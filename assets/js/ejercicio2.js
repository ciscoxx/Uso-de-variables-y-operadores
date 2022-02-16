const btn = document.getElementById("cal");



function cal() {
  var number1 = parseInt(document.getElementById("n1").value);
  var number2 = parseInt(document.getElementById("n2").value);
  var resultado;

  if (number1 <= 0 || number2 <= 0 || isNaN(number1) || isNaN(number2)) {
    document.write("Ingrese solo números y que sea mayor a 0");
    document.write(
      "<br><br> <input type='button' value='volver a Calculadora' onClick='window.location.reload();'>"
    );
  } else {
    suma = number1 + number2;
    resta = number1 - number2;
    mul = number1 * number2;
    div = number1 / number2;
    mod = number1 % number2;

    document.write("El resultado de la suma es: " + suma + "<br>");
    document.write("El resultado de la resta es: " + resta + "<br>");
    document.write("El resultado de la multiplicación es: " + mul + "<br>");
    document.write("El resultado de la división es: " + div + "<br>");
    document.write("El el porcentaje es: " + mod + "%");
    document.write(
      "<br><br> <input type='button' value='volver a Calculadora' onClick='window.location.reload();'>"
    );
  }
}

btn.addEventListener("click", cal);
