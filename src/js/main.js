import $ from 'jquery';
import 'bootstrap';
import 'slick-carousel';

function toggleMapPoint(selector) {
    $($(selector).data('location')).toggleClass('active');
    $($(selector).data('location')).siblings().removeClass('active');
}

$(document).ready(function () {

    toggleMapPoint('#accordion .btn.btn-link');

    $('#accordion .btn.btn-link').click(function () {
        toggleMapPoint(this)
    });

    $('.testimonials .slider').on('init', function (event, slick) {
        let $items = slick.$dots.find('li');
        $items.find('button').remove();
        $('.testimonialsArrows').append('<div class="circle"></div>');
    });
    $('.testimonials .slider').slick({
        dots: true,
        arrows: true,
        prevArrow: '<button class="slick-prev icon-larr slick-arrow" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next icon-rarr slick-arrow" aria-label="Next" type="button"></button>',
        appendDots: '.testimonialsDots',
        appendArrows: '.testimonialsArrows'
    });

})
