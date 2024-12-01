if($(".main-banner__silder-list").length){
    let bannerSlider = new Swiper($(".main-banner__silder-list"), {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
}
$('.faq__item').on('click',function(){
    let bodyAccr = $(this).find('.faq__body');
    $(this).toggleClass('active');
    console.log(bodyAccr);
    bodyAccr.slideToggle();
})