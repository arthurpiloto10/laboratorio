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

document.getElementById('hamburguer').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('d-none');
});

document.getElementById('sub-menu').addEventListener('click', () => {
    document.getElementById('menu-categoria').classList.toggle('d-none');
});

function estaVisivel(elemento) {
    const posicao = elemento.getBoundingClientRect();
    return posicao.top <= window.innerHeight && posicao.bottom >= 0;
}

function aplicarAnimacoes() {
    const elementos = document.querySelectorAll(".fade-up, .fade-down, .fade-left, .fade-right");
    elementos.forEach((elemento) => {
        if(estaVisivel(elemento) && !elemento.classList.contains('visible')) {
            const delay = elemento.dataset.delay || '0s';
            elemento.style.transitionDelay = delay;
            elemento.classList.add('visible');
        }
    })
}

document.addEventListener('DOMContentLoaded', aplicarAnimacoes);
window.addEventListener('scroll', aplicarAnimacoes);