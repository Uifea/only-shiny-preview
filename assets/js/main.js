if($(".main-banner__silder-list").length){
    let bannerSlider = new Swiper($(".main-banner__silder-list"), {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 4000,
        },
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
$('.header__search-icon').on('click',function(){
    let seacrh = $(this).closest('.header__search').find('.header__search-input');
    seacrh.addClass('active');
})