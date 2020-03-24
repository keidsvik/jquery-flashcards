$(document).ready(function() {
  $(".card").on( "click", ".concept", function(event){
    $(`#description${event.target.id}`).toggleClass("description");
  })
});

