document
  .getElementById("formulario-pedido")
  .addEventListener("submit", function (evento) {
    evento.preventDefault();
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    if (carrinho.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }
  });