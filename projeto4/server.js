const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;

// MIME types básicos
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".json": "application/json",
};

// Lê arquivo com tratamento básico de erro
function readFileSafe(filepath) {
  try {
    return fs.readFileSync(filepath);
  } catch {
    return null;
  }
}

// Renderiza página com include de header/footer
function renderPage(pagePath, res) {
  const header = readFileSafe(path.join(ROOT, "partials", "header.html"));
  const footer = readFileSafe(path.join(ROOT, "partials", "footer.html"));
  const content = readFileSafe(pagePath);

  if (!header || !footer || !content) {
    res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
    return res.end("<h1>Erro interno ao carregar a página.</h1>");
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(Buffer.concat([header, content, footer]));
}

// Serve arquivos estáticos da pasta /assets
function serveStatic(req, res) {
  // Normaliza o caminho para evitar path traversal
  const safePath = path.normalize(req.url).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(ROOT, safePath);

  // Garante que está dentro de /assets
  const assetsDir = path.join(ROOT, "assets");
  if (!filePath.startsWith(assetsDir)) return false; // não tratar aqui

  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME[ext] || "application/octet-stream";
  const file = readFileSafe(filePath);
  if (!file) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Arquivo estático não encontrado.");
    return true;
  }

  // Cabeçalhos simples de cache (opcional)
  res.writeHead(200, {
    "Content-Type": mime,
    "Cache-Control": "public, max-age=31536000", // 1 ano (ajuste se quiser)
  });
  res.end(file);
  return true;
}

const server = http.createServer((req, res) => {
  // Rota de estáticos
  if (req.url.startsWith("/assets/")) {
    const handled = serveStatic(req, res);
    if (handled) return;
  }

  // Rotas de páginas
  if (req.url === "/" || req.url === "/home") {
    return renderPage(path.join(ROOT, "pages", "home.html"), res);
  }
  if (req.url === "/carrinho") {
    return renderPage(path.join(ROOT, "pages", "carrinho.html"), res);
  }
  if (req.url === "/checkout") {
    return renderPage(path.join(ROOT, "pages", "checkout.html"), res);
  }
  if (req.url === "/sobre") {
    return renderPage(path.join(ROOT, "pages", "sobre.html"), res);
  }

  // 404
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>Página não encontrada</h1>");
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
