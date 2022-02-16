const btn = document.getElementById("cal");

function cal()
{
    var number1=parseInt(document.getElementById('n1').value);
    var number2=parseInt(document.getElementById('n2').value);
    var number3=parseInt(document.getElementById('n3').value);
    var number4=parseInt(document.getElementById('n4').value);
    var number5=parseInt(document.getElementById('n5').value);

    if(number1 <= 0 || number2 <= 0 || number3 <= 0 || number4 <= 0 || number5 <= 0 || isNaN(number1) || isNaN(number2) || isNaN(number3) || isNaN(number4) || isNaN(number5)){  
    document.write("Ingrese solo números y que sea mayor a 0")
    document.write("<br><br> <input type='button' value='volver a Calculadora' onClick='window.location.reload();'>")   
    }

    else{
    suma= number1 + number2 + number3 + number4 + number5;
    promedio= suma/5;

    document.write("La suma de todos los números es: "+suma+"<br><br>")
    document.write("El promedio de todos los números es: "+promedio)
    document.write("<br><br> <input type='button' value='volver a Calculadora' onClick='window.location.reload();'>")              }
}

btn.addEventListener("click", cal);