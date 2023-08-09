$(document).ready(function () {
    $(".slick-slider-wp").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        dots: true,
        arrows: true,
        // autoplay: true,
    });

    $(".render-product-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        speed: 300,
        dots: false,
        arrows: true,
        // autoplay: true,

        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
