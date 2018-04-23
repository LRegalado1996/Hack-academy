var marcas = ["BMW", "Peugeot", "Chevrolet"];
var frutas = ["bananas", "manzanas", "naranja"];

function mostrarElemento() {
  $('#lista').html("");
  marcas.forEach(function(item) {
    $("#lista").append('<li>' + item + '</li>');
  })
}

$('#btnMostrarLista').on('click', mostrarElemento());

// $('#btnMostrarLista').click(function() {
//   marcas.forEach(function(item){
//     var mystring = "<li>" + item + "</li>";
//     $("btnMostrarLista").append(mystring);
//   })
// });
