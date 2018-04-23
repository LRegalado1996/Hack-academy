/* var x = prompt("Ingrese un valor: ");
var y = prompt("Ingrese otro valor: ");

//prueba 1

 if (x == y) {
  alert('son iguales :D');
  }  else if (x < y) {
    alert('B es mas grande :(');
  } else {
    alert('A es el mas grande ');
  }

  //prueba 2

  if (x < 5 && y < 5) { //operador logico Y
    alert("Ambos valores son menores de 5")
  } else if (x < 5 || y < 5) { //operador logico O
    alert("Al menos uno es menor que 5")
  } else {
    alert("Todos son mayores")
  }

  ejercicio 01
  */

var tech = "JavaScript";
var year = 1550;
if (typeof(tech) != "string") {
  alert("El tech debe ser un string");
} else if (year < 0) {
  alert("Error el año debe ser positivo");
} else if (year > 2017) {
  alert("Es el futuro");
} else if (year == 1995 && tech == "JavaScript") {
  alert("Creacion de JS");
} else {
  alert("La idea es que caiga dentro de las opciones");
}
