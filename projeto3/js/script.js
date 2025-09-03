document.addEventListener('DOMContentLoaded', () => {
  window
  .fetch("http://127.0.0.1:5500/projeto3/js/categorias.json")
  .then((resposta) => resposta.json())
  .then((categorias) => {
    let html = ``;
    categorias.forEach((categoria) => {
      html += `
      <li>
      <a href="./produtos.html?categoria=${categoria.id}">${categoria.nome}</a>
      </li>
      `;
    });
    document.getElementById("footer-categorias").innerHTML = html;
  }).catch(erro => {
    console.log(erro);
  })
  ;
});

fetch("./includes/footer.html")
  .then((resposta) => {
    if (!resposta.ok) {
      throw new Error("Erro ao carregar arquivo");
    }
    return resposta.text();
  })
  .then((html) => {
    document.getElementById("footer").innerHTML = html;
  })
  .catch((erro) => {
    console.error(erro);
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

function atualizarContadorDeProdutosNoCarrinho() {
  let elementoContador = document.getElementById("carrinho-quantidade");
  if (elementoContador) {
    elementoContador.textContent = contadorDeProdutosNoCarrinho();
  }
}

function inicializaHeader() {
  document.getElementById("hamburguer").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("d-none");
  });

  document.getElementById("sub-menu").addEventListener("click", () => {
    document.getElementById("menu-categoria").classList.toggle("d-none");
  });
  atualizarContadorDeProdutosNoCarrinho();
}

function carregarHeader() {
  fetch("./includes/header.html")
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error("Erro ao carregar arquivo");
      }
      return resposta.text();
    })
    .then((html) => {
      document.getElementById("header").innerHTML = html;
      inicializaHeader();
    })
    .catch((erro) => {
      console.error(erro);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  carregarHeader();
});
