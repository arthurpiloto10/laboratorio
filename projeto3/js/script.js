document.getElementById("hamburguer").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("d-none");
});

document.getElementById("sub-menu").addEventListener("click", () => {
  document.getElementById("menu-categoria").classList.toggle("d-none");
});

function estaVisivel(elemento) {
  const posicao = elemento.getBoundingClientRect();
  return posicao.top <= window.innerHeight && posicao.bottom >= 0;
}

function aplicarAnimacoes() {
  const elementos = document.querySelectorAll(
    ".fade-up, .fade-down, .fade-left, .fade-right"
  );
  elementos.forEach((elemento) => {
    if (estaVisivel(elemento) && !elemento.classList.contains("visible")) {
      const delay = elemento.dataset.delay || "0s";
      elemento.style.transitionDelay = delay;
      elemento.classList.add("visible");
    }
  });
}

document.addEventListener("DOMContentLoaded", aplicarAnimacoes);
window.addEventListener("scroll", aplicarAnimacoes);


function contadorDeProdutosNoCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let contador = 0;
    carrinho.forEach((produto) => (contador += produto.quantidade));
    return contador;
}

async function atualizarContadorDeProdutosNoCarrinho() {
    document.getElementById('carrinho-quantidade').textContent = await contadorDeProdutosNoCarrinho();
}

document.addEventListener("DOMContentLoaded", atualizarContadorDeProdutosNoCarrinho);