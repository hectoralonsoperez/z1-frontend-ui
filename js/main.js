$( document ).ready(function() {

    /* animations */
    // https://animate.style/
    $(window).on("scroll", function(){
        if ($(this).scrollTop() >= $(".platform-cards").offset().top - $(this).height()){
            $( ".platform-cards" ).addClass( "animate__animated animate__bounce" );
        }
        if ($(this).scrollTop() >= $(".press").offset().top - $(this).height()){
            $( ".press-card-1" ).addClass( "animate__animated animate__backInLeft" );
            $( ".press-card-2" ).addClass( "animate__animated animate__backInUp" );
            $( ".press-card-3" ).addClass( "animate__animated animate__backInRight" );
        }
    });
    /* END animations */

    /* menu responsive */
    $('.menu-hamburger').click(function(){ 
        if ($('.menu-responsive').is(':visible')) {
            $(".menu-responsive").hide();
            $(".menu-hamburger-img").attr("src", "img/menu-hamburguer.png");
        } else {
            $(".menu-responsive").fadeIn();
            $(".menu-responsive").fadeIn("slow");
            $(".menu-responsive").fadeIn(3000);
            $(".menu-hamburger-img").attr("src", "img/menu-hamburguer-close.png");
        }
    })
    /* END menu responsive */

});