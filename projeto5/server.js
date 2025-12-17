require('dotenv').config();
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const ROOT = __dirname;

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
    //res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
    //return res.end("<h1>Erro interno ao carregar a página.</h1>");
    return res.status(500).type('html').send('<h1>Erro interno ao carregar a página</h1>');
  }

  //res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
 // res.end(Buffer.concat([header, content, footer]));
 res.status(200).type('html').send(Buffer.concat([header, content, footer]));
}

app.use('/assets', 
  express.static(path.join(ROOT, 'assets'), {
    maxAge:'1y', 
    setHeaders: (res) => {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  })
);

app.get(['/', '/home'], (req,res) => {
  return renderPage(path.join(ROOT,'pages', 'home.html'), res);
});

app.get('/produtos', (req,res) => {
  const categoria = req.query.categoria;
  return renderPage(path.join(ROOT,'pages','produtos.html'), res);
});

app.use((req,res) => {
  res.status(404).type('html').send('<h1>Página não encontrada</h1>');
});

const PORT = process.env.PORT;

app.listen(PORT,() => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
});