const btn = document.getElementById("cal");

function cal() {
  let number1 = parseInt(document.getElementById("n1").value);

  day = number1;
  week = Math.trunc(number1 / 7);
  year = Math.trunc( number1 / 365);

  document.write("Son: "+ year + " Año, " + week + " semana y " + day +" días");
  document.write("<br><br> <input type='button' value='volver a Calculadora' onClick='window.location.reload();'>");
}

btn.addEventListener("click", cal);