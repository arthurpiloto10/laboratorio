// Aguarde o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
    // Localize o iframe no DOM principal
    const iframe = document.querySelector("iframe");

    // Verifique se o iframe foi encontrado
    if (iframe) {
        // Acesse o conteúdo interno do iframe
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        // Agora execute o XPath no iframe
        const xpath = "/html/body/div/div/div[3]/div[3]/div";
        const element = iframeDoc.evaluate(xpath, iframeDoc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        console.log(element); // Verifique se encontrou o elemento
    } else {
        console.error("Iframe não encontrado!");
    }
});