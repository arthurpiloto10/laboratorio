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
