$(document).on('scroll', function (e) {
    $('.navbar').css('opacity', ($(document).scrollTop() / 500));
});
//change navbar from invisible at top to full color when scrolling 