const btn = document.getElementById("cal");

function cal() {
  let number1 = parseInt(document.getElementById("n1").value);

  kel = number1 + 273.15;
  fah = (number1 * 9) / 5 + 32;

  document.write("La temperatura Kelvin es: " + kel + "K <br><br>");
  document.write("Los grados Fahrenheit son: " + fah + "°F <br><br> ");
  document.write(
    "<input type='button' value='volver a Calculadora' onClick='window.location.reload();'>"
  );

}

btn.addEventListener("click", cal);



