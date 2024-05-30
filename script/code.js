document.getElementById('calculateButton').addEventListener('click', calculateTotal);

function calculateTotal() {
  let price1 = parseFloat(document.getElementById('price1').innerText);
  let qty1 = parseInt(document.getElementById('qty1').value);
  let total1 = price1 * qty1;
  document.getElementById('total1').innerText = 'R ' + total1.toFixed(2);

  let price2 = parseFloat(document.getElementById('price2').innerText);
  let qty2 = parseInt(document.getElementById('qty2').value);
  let total2 = price2 * qty2;
  document.getElementById('total2').innerText = 'R ' + total2.toFixed(2);

  let orderTotal = total1 + total2;
  document.getElementById('orderTotal').innerText = 'R ' + orderTotal.toFixed(2);
}