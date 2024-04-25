function calcular() {
  var altura = document.getElementById("altura").value;
  var largura = document.getElementById("largura").value;
  var qh = Math.round(475/altura);
  var qv = Math.floor(1000/largura);
  var qt = qh*qv;

  var total = (50 / qt)*7.55;
  var total = total.toFixed(2);

  var custoEtiqueta = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);

  document.getElementById("total").textContent= custoEtiqueta;
}