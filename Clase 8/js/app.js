/* Pruebas while
Crear un contador inicial en 1
mientras el contador no alcance 100:
  mostrar en la consola el numero si es multiplo de 4
  Incrementar el contador en uno
/////////////////////////////////////////////////////
var contador = 1;
while (contador < 100) {
  if (contador % 4 == 0) {
    console.log("Contador vale: " + contador);
  }
  contador++;
}
/////////////////////////////////////////////////////
*/

/* ejercicio
    0....
    00...
    000..
    0000.
    00000

    solucion 1 ----
    ----------------
*/
var contador = 0;
var texto = "";
var b = 0;
while (contador < 5) {
  var c = "";
  while (b < 4) {
    b = b + 1;
    c = c + "."
  }
  b = contador + 1;
  contador = contador + 1;
  texto = texto + "O";
  console.log(texto + c);
}
