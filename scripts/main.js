$(document).ready(function() {
  var array = [
    'Beagle',
    'Basset',
    'Dachshund',
    'Bulldog',
    'Poodle',
    'Pug',
    'Chihuahua',
    'Husky',
  ];

  array.forEach(function(name) {
    $('.sidenav').append(`<button id=${name}>${name}</button>`);
  });

  $('button').on('click', function(e) {
    console.log(e);
    var url =
      'http://api.giphy.com/v1/gifs/search?q=' +
      e.target.id +
      '&api_key=o0kDV1eHMdbMcWplc4n285321HyV03He';
    $.ajax({
      method: 'GET',
      url: url,
      dataType: 'json',
      success: function(data) {
        $('.gifs').empty();
        for(var i = 0; i < 10; i++){
          $('.gifs').append(`<div><img src='${data.data[i].images.original.url}' alt='${data.data[i].title}'/><p>rating: ${data.data[i].rating}</p></div>`)  
        }
        
      },
      error: function(error) {
        console.log(error);
      },
    });
  });
});
