// Mi código JavaScript:
// pagina de ventas combo de a;os
for (var i = 2020; i > 1980; i--) {
  $('#combo1').append('<option class= value=' + i +'>' + i + '</option>')
}

// pagina de ventas combo de marcas
$.ajax({
  method    : 'GET',
  url       : 'https://ha.edu.uy/api/brands',
  dataType  : 'json',
  success   : function(data) {

    data.forEach(function(item) {
      $('#combo2').append('<option value=' + item +'>' + item + '</option>');
    })
  },
  error     : function(xhr, status, e) {
    alert(e);
  }
});
// paginas de ventas combo de modelos
$.ajax({
  method    : 'GET',
  url       : 'https://ha.edu.uy/api/models?brand=Audi',
  dataType  : 'json',
  success   : function(data) {

    data.forEach(function(item) {
      $('#combo3').append('<option value=' + item +'>' + item + '</option>');
    })
  },
  error     : function(xhr, status, e) {
    alert(e);
  }
});

// Cargar autos

var app = new Vue({
  el: '#posts',
  data: {
    posts: [],
    filtrado: [],
  }
});
// snjdbhsbdhsbhdbshbs
$.ajax({
  method    : 'GET',
  url       : 'https://ha.edu.uy/api/cars',
  dataType  : 'json',
  success   : function(data) {
    app.posts = data
  },
  error     : function(xhr, status, e) {
    alert(e);
  }
});

$('#filtrar').on('click', function() {
  alert($('combo1').val());
  alert($('combo2').val());
  alert($('combo3').val());
});
for (var i = 0; i < app.posts.length; i++) {

}
