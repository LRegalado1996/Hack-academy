var a = 25;
var b = 11;
var c = 15;

// ejercicio 1
function maximoDeDos (n1, n2) {
  var maximo;
  if (n1 <= n2) {
    maximo = n2;
  } else if (n1 > n2) {
    maximo = n1;
  }
  return (maximo);
}

// ejercicio 2
function maximoDeTres (n1, n2, n3) {
  var maximo = maximoDeDos((maximoDeDos(n1, n2)), maximoDeDos(n1, n3));
  return (maximo);
}

maximoDeTres(a, b, c);
