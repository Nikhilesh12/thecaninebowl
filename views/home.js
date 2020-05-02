// function callback() { setTimeout(function() {console.log("Fadein Done") , 1000} );};
// $( "#fade-js" ).on( "scroll", function() { $("#fade-js").fadeIn("2000",callback); return false;});

// $('document').on('scroll',function () {
//   $( "#div-fade" ).fadeIn( "slow", function() {
//   });
// });

$(window).scroll(function() {
    clearTimeout($.data(this, 'scrollTimer'));//Lets the timer know were scrolling

    //Hide/Show nav based on location
    var y = $(this).scrollTop();
    if (y > 397) {
        $('#div-fade').fadeIn(500);   
    } else {
        $('#div-fade').hide();
    }

    //TimeOut function that is only hit if we havent scrolled for 3 Seconds
    //In here is where you fade out the nav
    $.data(this, 'scrollTimer', setTimeout(function() {    
        $('#div-fade').fadeOut();
        console.log("Haven't scrolled in 3s!");
    }, 3000));
});