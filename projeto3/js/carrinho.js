document.addEventListener("DOMContentLoaded", () => {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let corpoCarrinho = document.getElementById("corpo-carrinho");
  if (carrinho.length === 0) {
    corpoCarrinho.innerHTML =
      '<tr><td class="text-center" colspan="5">Carrinho Vazio</td></tr>';
    return;
  }
  let html = "";
  carrinho.forEach((produto) => {
    html += `
    <tr>
                    <td class="d-flex align-items-center">
                        <img src="./img/${produto.imagem}" alt="${produto.nome}" style="width: 75px;">
                        <span>
                            ${produto.nome}
                        </span>
                    </td>
                    <td class="text-center">
                        <button class="btn" onclick="diminuiQuantidadeDoProdutoNoCarrinho(${produto.id})">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <button class="btn">
                            ${produto.quantidade}
                        </button>
                        <button class="btn" onclick="aumentaQuantidadeDoProdutoNoCarrinho(${produto.id})">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </td>
                    <td class="text-center">
                        R$ ${produto.preco.toFixed(2).replace('.', ',')}
                    </td>
                    <td class="text-center">
                        R$ ${produto.preco.toFixed(2).replace('.', ',')}
                    </td>
                    <td class="text-center">
                        <button class="btn btn-warning" onclick="removerProdutoDoCarrinho(${produto.id})">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </td>
                </tr>
    `;
  });
  corpoCarrinho.innerHTML = html;
});


function aumentaQuantidadeDoProdutoNoCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let produto = carrinho.find(produto => produto.id === id);
    if (produto) {
        produto.quantidade += 1;
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }
    location.reload();
}

function diminuiQuantidadeDoProdutoNoCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let produto = carrinho.find(produto => produto.id === id);
    if (produto && produto.quantidade > 1) {
        produto.quantidade -= 1;
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }
    location.reload();
}

function removerProdutoDoCarrinho(id) {
    let confimacao = window.confirm("Deseja realmente excluir o produto do carrinho?");
    if (confimacao) {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho = carrinho.filter(produto => produto.id !== id);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        location.reload();
    }
}