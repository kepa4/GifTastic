$(document).ready(function() {
  var array = [
    'Ned Stark',
    'Catelyn Stark',
    'Jon Snow',
    'Rob Stark',
    'Arya Start',
    'Sansa Stark',
    'Bran Stark',
    'Rickon Stark'
  ];

  array.forEach(function(name) {
    $('.sidenav').append(`<button id=${name}>${name}</button>`);
  });
  
  $('button').on('click', function(e){
                  $.ajax({
                   type: 'GET',
         
                                  })   
                  })
});
