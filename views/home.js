// function callback() { setTimeout(function() {console.log("Fadein Done") , 1000} );};
// $( "#fade-js" ).on( "scroll", function() { $("#fade-js").fadeIn("2000",callback); return false;});

$('window').scroll(function () {
  $( "#div-fade" ).fadeIn( "slow", function() {
  });
});

