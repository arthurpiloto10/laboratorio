/*document.addEventListener("DOMContentLoaded", () => {
  window
    .fetch("/assets/json/categorias.json")
    .then((resposta) => resposta.json())
    .then((categorias) => {
      let html = ``;
      categorias.forEach((categoria) => {
        html += `
      <li>
      <a href="/produtos?categoria=${categoria.id}">${categoria.nome}</a>
      </li>
      `;
      });
      document.getElementById("footer-categorias").innerHTML = html;
    })
    .catch((erro) => {
      console.log(erro);
    });
}); */

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

document.addEventListener("DOMContentLoaded", aplicarAnimacoes);
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("hamburguer").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("d-none");
  });

  document.getElementById("sub-menu").addEventListener("click", () => {
    document.getElementById("menu-categoria").classList.toggle("d-none");
  });
  atualizarContadorDeProdutosNoCarrinho();
});
window.addEventListener("scroll", aplicarAnimacoes);
