// // Aguarde o carregamento do DOM
// document.addEventListener("DOMContentLoaded", () => {
//     // Localize o iframe no DOM principal
//     const iframe = document.querySelector("iframe");

//     // Verifique se o iframe foi encontrado
//     if (iframe) {
//         // Acesse o conteúdo interno do iframe
//         const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

//         // Agora execute o XPath no iframe
//         const xpath = "/html/body/div/div/div[3]/div[3]/div";
//         const element = iframeDoc.evaluate(xpath, iframeDoc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

//         console.log(element); // Verifique se encontrou o elemento
//     } else {
//         console.error("Iframe não encontrado!");
//     }
// });

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

window
  .fetch("http://127.0.0.1:5500/projeto3/produtos.json")
  .then((resposta) => resposta.json())
  .then((produtos) => {
    const listaProdutos = document.getElementById("lista-produtos");
    let html = ``;
    produtos.forEach((produto) => {
      html += `
        <div class="card p-2 w-lg-25 fade-left">
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
                    <a onclick="adicionarProdutoAoCarrinho(${produto.id}, '${produto.nome}', './img/${produto.imagem}', ${produto.preco})" class="btn1">
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
  let novoProduto = {
    id: p_id,
    nome: p_nome,
    imagem: p_imagem,
    preco: p_preco,
    quantidade: 1,
  };
  carrinho.push(novoProduto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}
