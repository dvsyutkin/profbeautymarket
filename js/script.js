window.addEventListener('DOMContentLoaded', function () {

    

    const sliderOne = $('.new-items__wrap .owl-carousel');
    sliderOne.owlCarousel($.extend({}, {
        nav: false,
        dots: false,
        items: 5,
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

    function nextSlider() {
        sliderOne.trigger('next.owl.carousel');
        console.log('next');
    }
    function prevSlider() {
        sliderOne.trigger('prev.owl.carousel');
        console.log('prev');
    }

    $('.new-items__arrow-prev').click(prevSlider);
    $('.new-item__arrow-next').click(nextSlider);


    const sliderTwo = $('.news .owl-carousel');
    sliderTwo.owlCarousel($.extend({}, {
        nav: false,
        dots: false,
        margin: 20,
        items: 4,
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


});