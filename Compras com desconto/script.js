// Entrada de valores
let valCompra = parseFloat(
  prompt("Digite o valor da compra: ").replace(",", ".")
);
let formPagamento = prompt("Digite a forma de pagamento: ")
  .toLowerCase()
  .trim();

// Conversão de caracteres especiais
let convertFormPagamento = formPagamento
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/, "");

// declaração de variavel resultante
let valorTotal = null;

// Condicionais e syntaxes de calculo
if (convertFormPagamento === "dinheiro") {
  valorTotal = valCompra - valCompra * 0.1;
  alert("Valor total da compra ficou: " + valorTotal);
} else if (convertFormPagamento === "debito") {
  valorTotal = valCompra - valCompra * 0.08;
  alert("Valor total da compra ficou: " + valorTotal);
} else if (convertFormPagamento === "credito") {
  valorTotal = valCompra - valCompra * 0.05;
  alert("Valor total da compra ficou: " + valorTotal);
} else {
  let parcelas = parseInt(
    prompt("Digite em quantas vezes deseja parcelar sua compra: ")
  );

  let valorParcela = null;
  if (parcelas <= 3) {
    valorParcela = valCompra / parcelas;
    alert(
      "Voce parcelou sua compra em " +
        parcelas +
        "x. Cada parcela ficou por " +
        valorParcela
    );
  } else {
    valorTotal = valCompra + valCompra * 0.04;
    valorParcela = valorTotal / parcelas;
    alert(
      "Voce parcelou sua compra em " +
        parcelas +
        "x. Cada parcela ficou por " +
        valorParcela
    );
  }
}
