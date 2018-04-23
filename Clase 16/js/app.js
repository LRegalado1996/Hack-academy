$.ajax({
  method    : 'GET',
  url       : 'https://www.googleapis.com/books/v1/volumes?q=0596554877',
  dataType  : 'json',
  success   : function(data) {
    var libro = 'data.items[0].volumeInfo';
    $('#titulo').text(libro.title);
    $('#subtitulo').append(data.items[0].volumeInfo.subtitle);
    $('#descripcion').append("<h3>Descripcion<h3>");
    $('#descripcion').append('<img src=' + data.items[0].volumeInfo.imageLinks.smallThumbnail + '>');
    $('#descripcion').append(data.items[0].volumeInfo.description);
    $('#descripcion').append('<br><div class="btn btn-primary">Ver mas informacio</div>');


  },
  error     : function(xhr, status, e) {
    alert(e);
  }
});
