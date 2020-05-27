$(document).ready(function(){
    $('.slider').slick({
        mobileFirst: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                    arrows: true,
                }
            },{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                    arrows: true
                }
            }
        ]
    });
});