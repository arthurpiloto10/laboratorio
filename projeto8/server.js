require("dotenv").config();
const sequelize = require("./database");
const Produto = require("./models/Produto");
const Categoria = require("./models/Categoria");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const ROOT = __dirname;

app.set("view engine", "ejs");
app.set("views", path.join(ROOT, "views"));

app.use(
  "/assets",
  express.static(path.join(ROOT, "assets"), {
    maxAge: "1y",
    setHeaders: (res) => {
      res.setHeader("Cache-Control", "public, max-age=31536000");
    },
  }),
);

// let cacheCategorias = null;

// app.use(async (req, res, next) => {
//   if (!cacheCategorias) {
//     cacheCategorias = await Categoria.findAll({
//       order: [["nome", "ASC"]]
//     });
//   }
//   res.locals.categorias = cacheCategorias;
//   next();
// });


app.use(async (req, res, next) => {
    const categorias = await Categoria.findAll({
      order: [["nome", "ASC"]]
    });
  res.locals.categorias = categorias;
  next();
});

app.get(["/", "/home"], (req, res) => {
  res.render("home");
});

app.get("/produtos", async (req, res) => {
  const categoria = req.query.categoria;
  const where = {};
  if (categoria) {
    where.idCategoria = categoria;
  }
  const produtos = await Produto.findAll({
    where,
    order: [["nome", "ASC"]]
  });
  res.render("produtos", { produtos });
});

app.get("/sobre", (req, res) => {
  res.render("sobre");
});

app.get("/servicos", (req, res) => {
  res.render("servicos");
});

app.get("/contato", (req, res) => {
  res.render("contato");
});

app.get("/carrinho", (req, res) => {
  res.render("carrinho");
});

app.get("/checkout", (req, res) => {
  res.render("checkout");
});

app.get("/obrigado", (req, res) => {
  res.render("obrigado");
});

app.get("/servicos-adubacao-e-fertilizacao", (req, res) => {
  res.render("servicos-adubacao-e-fertilizacao");
});

app.get("/servicos-controle-de-pragas", (req, res) => {
  res.render("servicos-controle-de-pragas");
});

app.get("/servicos-corte-e-manutencao", (req, res) => {
  res.render("servicos-corte-e-manutencao");
});

app.use((req, res) => {
  res.status(404).render("404");
});

const PORT = process.env.PORT;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao MySQL com sucesso");
    await sequelize.sync();
  } catch (erro) {
    console.error("Erro ao conectar no MySQL:", erro);
  }
})();

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
