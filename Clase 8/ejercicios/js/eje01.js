
for (var cont = 50; cont > 0; cont--) {
  var parrafo = document.createElement("p");
  parrafo.textContent = "Parrafo numero: " + cont;
  if (cont % 2 == 0) {
    parrafo.style.color = "green";
    parrafo.style.fontSize =  cont + "px";
  } else {
    parrafo.style.color = "red";
    parrafo.style.fontSize = cont + "px";
  }
  document.body.appendChild(parrafo);
}

//var parrafo = document.createElement("p");
//parrafo.textContent = "Hola";
//document.body.appendChild(parrafo);
