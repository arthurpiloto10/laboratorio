window.fetch("http://127.0.0.1:5500/projeto3/js/categorias.json")
.then((resposta) => resposta.json())
.then((categorias) => {
  console.log(categorias);
});

window
  .fetch("http://127.0.0.1:5500/projeto3/js/produtos.json")
  .then((resposta) => resposta.json())
  .then((produtos) => {
    const listaProdutos = document.getElementById("lista-produtos");
    let html = ``;
    produtos.forEach((produto) => {
      html += `
        <div class="card p-2 w-lg-25" data-categoria="${produto.categoria_id}">
                <div class="imagem d-flex align-items-center justify-content-center">
                    <img src="./img/${produto.imagem}" alt="${
        produto.nome
      }" class="img-fluid">
                </div>
                <h3 class="text-uppercase mt-1">
                    ${produto.nome}
                </h3>
                <p class="mb-1 mt-1">
                    ${produto.descricao}
                </p>
                <div class="d-flex justify-content-between">
                    <span>
                        R$
                        <span class="text-success">
                            ${produto.preco.toFixed(2).replace(".", ",")}
                        </span>
                    </span>
                    <a onclick="adicionarProdutoAoCarrinho(${produto.id}, '${
        produto.nome
      }', '${produto.imagem}', ${produto.preco})" class="btn1">
                        <i class="fa-solid fa-plus"></i>
                    </a>
                </div>
            </div>
        `;
    });
    listaProdutos.innerHTML = html;
  });

function adicionarProdutoAoCarrinho(p_id, p_nome, p_imagem, p_preco) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let produtoExistente = carrinho.find((produto) => produto.id === p_id);
  if (produtoExistente) {
    produtoExistente.quantidade += 1;
  } else {
    let novoProduto = {
      id: p_id,
      nome: p_nome,
      imagem: p_imagem,
      preco: p_preco,
      quantidade: 1,
    };
    carrinho.push(novoProduto);
  }
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContadorDeProdutosNoCarrinho();
}

function mostrarTodosOsProdutos() {
  const elementos = document.querySelectorAll("[data-categoria]");
  elementos.forEach((elemento) => {
    elemento.style.display = "block";
  });
}

function mostrarProdutosPorCategoria(categoria_id) {
  const elementos = document.querySelectorAll("[data-categoria]");
  elementos.forEach((elemento) => {
    if (elemento.getAttribute("data-categoria") == categoria_id) {
      elemento.style.display = "block";
    } else {
      elemento.style.display = "none";
    }
  });
}
