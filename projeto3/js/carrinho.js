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
                        <button class="btn">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <button class="btn">
                            1
                        </button>
                        <button class="btn">
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
                        <button class="btn btn-warning">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </td>
                </tr>
    `;
  });
  corpoCarrinho.innerHTML = html;
});
