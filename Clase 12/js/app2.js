// ejercicio 3
function formatp(color, tamano, elemento) {
  $(elemento).css({
    "color": color,
    "font-size": tamano + "px",
  })
}
// formatp("green", 29);

// ejecicio 4
function lorem(elemento) {
  $(elemento).append('<br><br>' + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
}
// lorem();

// ejercicio 5
function alarmaaa(s, n) {
  // formatp("green", "20px", s);
  for (var i = 0; i < n; i++) {
    lorem(s);
  }
}

alarmaaa("p", 3);

// ejercicio 6
function alarma(){
  var a = 5;
  while (a != 5){
    if () {

    }
    $('body').css({ "backgroud-color": color,})
  }
}
