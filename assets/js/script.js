$(document).ready(function(){
    $('.images-slider').slick({
        infinite: true,
        slidesToShow: 5, 
        dots: false, 
        arrows: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 1500
    });
});