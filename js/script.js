window.addEventListener('DOMContentLoaded', function () {





    // слайдер нашин новости
    const sliderTwo = $('.news .owl-carousel');
    sliderTwo.owlCarousel($.extend({}, {
        nav: false,
        dots: false,
        margin: 20,
        items: 4,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            720: {
                items: 2
            },
            960: {
                items: 3
            },
            1440: {
                items: 4
            }
        },

    }));

    $('.news__arrow-box .news__arrow-prev').click(function () {
        sliderTwo.trigger('prev.owl.carousel');
    });
    $('.news__arrow-box .news__arrow-next').click(function () {
        sliderTwo.trigger('next.owl.carousel');
    });

    // слайдер новинки
    const sliderOne = $('.new-items__wrap .owl-carousel');
    sliderOne.owlCarousel($.extend({}, {
        nav: false,
        dots: false,
        items: 5,
        loop: true,
        responsive: {
            0: {
                center: true,
                margin: 0,
                items: 1,
                loop: true,
            },
            720: {
                margin: 16,
                items: 3
            },
            960: {
                margin: 34,
                items: 5
            },
            1440: {
                margin: 10,
                items: 5
            }
        },

    }));

    function nextSlider() {
        sliderOne.trigger('next.owl.carousel');
        console.log('next');
    }

    function prevSlider() {
        sliderOne.trigger('prev.owl.carousel');
        console.log('prev');
    }

    $('.new-items__arrow-box .new-items__arrow-prev').click(prevSlider);
    $('.new-items__arrow-box .new-items__arrow-next').click(nextSlider);

    // слайдер хиты продаж
    const sliderHits = $('.hits-wrap .owl-carousel');
    sliderHits.owlCarousel($.extend({}, {
        nav: false,
        dots: false,
        margin: 20,
        items: 4,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            720: {
                items: 2
            },
            960: {
                items: 3
            },
            1440: {
                items: 4
            }
        },

    }));

    $(' .hits__arrow-prev').click(function () {
        sliderHits.trigger('prev.owl.carousel');
    });
    $(' .hits__arrow-next').click(function () {
        sliderHits.trigger('next.owl.carousel');
    });

    // слайдер партнеры
    const sliderThree = $('.partner .owl-carousel');
    sliderThree.owlCarousel($.extend({}, {
        nav: false,
        dots: false,
        margin: 20,
        items: 7,
        loop: true
        // responsive: {
        //     0: {
        //         center: true,
        //         margin: 32,
        //         items: 2,
        //         loop: true,
        //     },
        //     720: {
        //         margin: 16,
        //         items: 5
        //     },
        //     960: {
        //         margin: 34,
        //         items: 4
        //     },
        //     1440: {
        //         margin: 10,
        //         items: 5
        //     }
        // },

    }));

    const sliderHero = $('.hero-slider .owl-carousel');
    sliderHero.owlCarousel($.extend({}, {
        nav: false,
        dots: true,
        items: 1,
        loop: true
    }));


});