function contadorDeProdutosNoCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let contador = 0;
  carrinho.forEach((produto) => (contador += produto.quantidade));
  return contador;
}

function atualizarContadorDeProdutosNoCarrinho() {
  let elementoContador = document.getElementById("carrinho-quantidade");
  if (elementoContador) {
    elementoContador.textContent = contadorDeProdutosNoCarrinho();
  }
  let elementoContadorMobile = document.getElementById(
    "carrinho-quantidade-mb"
  );
  if (elementoContadorMobile) {
    elementoContadorMobile.textContent = contadorDeProdutosNoCarrinho();
  }
}

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