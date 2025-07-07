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
    this.reset();
    atualizarContadorDeProdutosNoCarrinho();
  });
