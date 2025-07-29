document.addEventListener("DOMContentLoaded", () => {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let itens = document.getElementById("itens");
  let total = 0;
  if (carrinho.length === 0) {
    itens.innerHTML =
      '<tr><td class="text-center" colspan="3">Carrinho Vazio</td></tr>';
    return;
  }
  
  let html = "";
  carrinho.forEach((produto) => {
    total += produto.preco * produto.quantidade;
    html += `
    <tr>
                    <td>
                            ${produto.nome}
                    </td>
                    <td class="text-center">
                            ${produto.quantidade}
                    </td>
                    <td class="text-center">
                        R$ 
                        <span id="total-produto-${produto.id}">
                        ${(produto.preco * produto.quantidade)
                          .toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2})}
                          </span>
                    </td>
                </tr>
    `;
  });
  itens.innerHTML = html;

  document.getElementById('total').textContent = `R$ ${total.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2})}`;
});


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
    let mensagem = `*Novo pedido recebido!*\n\n`;
    mensagem += `*Nome:* ${nome}\n`;
    mensagem += `*Email:* ${email}\n`;
    mensagem += `*Telefone:* ${telefone}\n\n`;
    mensagem += `*Produtos selecionados:*`;
    let total = 0;
    carrinho.forEach((produto, index) => {
      const subtotal = produto.preco * produto.quantidade;
      total += subtotal;
      mensagem += `\n${index + 1}. ${produto.nome} - ${
        produto.quantidade
      } X R$ ${produto.preco.toFixed(2).replace(".", ",")} = R$ ${subtotal
        .toFixed(2)
        .replace(".", ",")}`;
    });
    mensagem += `\n\n*Total:* R$ ${total.toFixed(2).replace('.' , ',')}`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    const numeroWhatsapp = "+5517991005637";
    // window.location.href = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`;
    window.open(`https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`, '_blank');
    localStorage.removeItem('carrinho');  
    //this.reset();
    //atualizarContadorDeProdutosNoCarrinho();
    window.location.href = './obrigado.html';
  });
