var columna = 0;
var fila = 0;
for (var cont = 0; cont < 8; cont++) {
  for (var cont2 = 0; cont2 < 8; cont2++) {
  var newDiv = document.createElement("div");
  newDiv.style.height = "50px";
  newDiv.style.width = "50px";
  newDiv.style.position = "absolute";
  newDiv.style.top = columna + "px";
  newDiv.style.left = fila + "px";
  if (cont % 2 == 0) {
    if (cont2 % 2 == 0) {
      newDiv.style.backgroundColor = "white";
    } else {
      newDiv.style.backgroundColor = "black";
    }
  } else {
    if (cont2 % 2 == 0) {
      newDiv.style.backgroundColor = "black";
    } else {
      newDiv.style.backgroundColor = "white";
    }
  }
  document.body.appendChild(newDiv);
  columna = columna + 50;
  }
  fila = fila + 50;
  columna = 0;
}


//var newDiv = document.createElement("div");
//parrafo.textContent = "Parrafo numero: " + cont;
//document.body.appendChild(newDiv);
