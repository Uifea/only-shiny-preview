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
if($(".videos__slider").length){
    let videos = new Swiper($(".videos__slider"), {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 16,
        navigation: {
            nextEl: ".videos__btn.btn-next",
            prevEl: ".videos__btn.btn-prev",
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
            }
        }
    });
}
if($(".article-detail__slider").length){
    let galleryArticle = new Swiper($(".article-detail__slider"), {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".article-detail__slider-next.btn-next",
            prevEl: ".article-detail__slider-prev.btn-prev",
        },
    });
}
if($(".article-detail__slider--news").length){
    let galleryNews = new Swiper($(".article-detail__slider--news"), {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".article-detail__slider-next.btn-next",
            prevEl: ".article-detail__slider-prev.btn-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 1,
            }
        }
    });
}
$(window).on('scroll', function(){
    let headerHeight = $('.header').outerHeight();
    let scrollTop = $(window).scrollTop();

    if(scrollTop >= headerHeight){
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
})
$('.faq__item').on('click',function(){
    let bodyAccr = $(this).find('.faq__body');
    $(this).toggleClass('active');
    console.log(bodyAccr);
    bodyAccr.slideToggle();
})
$('.header__search-icon').on('click',function(){
    if(!$(this).hasClass('js-search-mob')){
        $('.header__search').slideToggle();
        $(this).toggleClass('open');
    }
})
$('.sort-select__head').on('click', function(){
    let selectContainer = $(this).closest('.sort-select__container');
    let selectBody = selectContainer.find('.sort-select__body');
    selectContainer.toggleClass('active');
    selectBody.slideToggle();
})
$('.sort-option').on('click', function(){
    let selectContainer = $(this).closest('.sort-select__container');
    let selectBody = selectContainer.find('.sort-select__body');
    let selectReset = $('.sort-select__reset');
    let selectHead = selectContainer.find('.sort-select__head');
    let content = $(this).text();
    selectHead.text(content);
    selectContainer.toggleClass('active');
    selectBody.slideToggle();
    selectReset.fadeIn();
})
$('.sort-select__reset').on('click',function(){
    let select = $(this).closest('.sort-select');
    let selectHead = select.find('.sort-select__head');

    selectHead.text("Не выбрано");
    $(this).fadeOut();
})
$('.header__burger-btn').on('click', function(){
    $(this).toggleClass('active');
    $('.header__mobile-wrapper').toggleClass('active');
})
$('.js-search-mob').on('click', function(){
    if(!$('.search-mobile').hasClass('active')){
        $('.search-mobile').addClass('active');
        $('.search-mobile').slideDown();
    }
})
$('.js-inc-edit').on('click', function(){
    $('.counter__data-increment').fadeOut();
    setTimeout(function(){
        $('.counter__increment-input').toggleClass('active');
        $('.counter__increment-input').slideDown();
    },400)
})
$('.counter__increment-btn').on('click', function(){
    let value = $('.counter__increment-value').val();
    if(value == '' || value == 0){
        $('.counter__data-increment span').text(1);
    } else {
        value = value.replace(' ','');
        $('.counter__data-increment span').text(value);
    }
    $('.counter__increment-input').slideUp();
    $('.counter__increment-input').toggleClass('active');
    setTimeout(function(){
        $('.counter__data-increment').fadeIn();
    },400)
})
$('.counter__increment-value').on('input', function(e){
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
})
let countValuePrev;
$('.js-count-edit').on('click', function(){
    $('.counter__pokemon-number').css('display','none');
    $('.counter__hunt-input').toggleClass('active');
    $('.counter__hunt-input').css('display','flex');
    $('.counter__hunt-value').focus();
    countValuePrev = $('.counter__hunt-value').val();
})
$('.counter__hunt-btn').on('click', function(){
    let value = $('.counter__hunt-value').val();
    if(value == ''){
        $('.counter__hunt-count').text(countValuePrev);
        $('.counter__hunt-count').attr('data-count',countValuePrev);
    } else {
        value = value.replace(' ','');
        $('.counter__hunt-count').text(value);
        $('.counter__hunt-count').attr('data-count',value);
    }
    $('.counter__pokemon-number').css('display','flex');
    $('.counter__hunt-input').toggleClass('active');
    $('.counter__hunt-input').css('display','none');
})
$('.counter__hunt-value').on('input', function(e){
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
})
$(document).keydown(function(e){
    if($('.counter__increment-input').hasClass('active') && e.keyCode === 13){
        let value = $('.counter__increment-value').val();
        if(value == '' || value == 0){
            $('.counter__data-increment span').text(1);
        } else {
            $('.counter__data-increment span').text(value);
        }
        $('.counter__increment-input').slideUp();
        $('.counter__increment-input').toggleClass('active');
        setTimeout(function(){
            $('.counter__data-increment').fadeIn();
        },400)
    } else if($('.counter__hunt-input').hasClass('active') && e.keyCode === 13){
        let value = $('.counter__hunt-value').val();
        if(value == ''){
            $('.counter__hunt-count').text(countValuePrev);
            $('.counter__hunt-count').attr('data-count',countValuePrev);
        } else {
            $('.counter__hunt-count').text(value);
            $('.counter__hunt-count').attr('data-count',value);
        }
        $('.counter__pokemon-number').css('display','flex');
        $('.counter__hunt-input').toggleClass('active');
        $('.counter__hunt-input').css('display','none');
    }
})
$('.counter__plus').on('click', function(){
    let countValue = $('.counter__hunt-count').text();
    countValue = countValue.replace(' ','');
    countNum = parseInt(countValue);
    countNum++;
    $('.counter__hunt-value').val(countNum);
    $('.counter__hunt-count').text(countNum);
})
$('.counter__minus').on('click', function(){
    let countValue = $('.counter__hunt-count').text();
    countValue = countValue.replace(' ','');
    countNum = parseInt(countValue);
    countNum--;
    $('.counter__hunt-value').val(countNum);
    $('.counter__hunt-count').text(countNum);
})
$('.counter__timer-play').on('click', function(){
    $(this).toggleClass('pause');
})

$('.counter__pokemon-item').on('click', function(){
    let firstSelect = $('.counter__pokemon-item.active');
    if(!$(this).hasClass('active')){
        $('.counter__pokemon-item').removeClass('active');
        $('.counter__settings-tab').removeClass('disable');
        $(this).addClass('active');
        if(firstSelect.length == 0){
            setTimeout(function(){
                $('.counter__settings-tab').removeClass('active');
                $('.js-tab-game').addClass('active');
                $('.counter__settings-pokemons').fadeOut();
                $('.counter__settings-pokemons').removeClass('active');
                $('.counter__games').addClass('active');
                $('.counter__games').fadeIn();
            },400)
        }
    }
})
$('.counter__settings-tab').on('click',function(){
    if(!$(this).hasClass('disable')){
        $('.counter__settings-tab').removeClass('active');
        let setting = $(this).attr('data-tab');
        $(this).addClass('active');
       
        $('.counter__settings-list').each(function(){
            
            if($(this).attr('data-info') == setting){
                $('.counter__settings-list').removeClass('active');
                $('.counter__settings-list').fadeOut();
                $(this).addClass('active');
                $(this).fadeIn();
            }
        })
    }

})
$('.counter__game').on('click', function(){
    let firstSelect = $('.counter__game.active');
    if(!$(this).hasClass('active')){
        $('.counter__game').removeClass('active');
        $(this).addClass('active');
        $('.counter__settings-tab').removeClass('active');
        $('.js-tab-method').addClass('active');
        if(firstSelect.length == 0){
            setTimeout(function(){
                $('.counter__games').fadeOut();
                $('.counter__games').removeClass('active');
                $('.counter__methods').addClass('active');
                $('.counter__methods').fadeIn();
            },400)
        }
    }
})
$('.counter__method').on('click', function(){
    let firstSelect = $('.counter__method.active');
    if(!$(this).hasClass('active')){
        $('.counter__method').removeClass('active');
        $(this).addClass('active');
        $('.counter__settings-tab').removeClass('active');
        $('.js-tab-other').addClass('active');
        if(firstSelect.length == 0){
            setTimeout(function(){
                $('.counter__methods').fadeOut();
                $('.counter__methods').removeClass('active');
                $('.counter__other-settings').addClass('active');
                $('.counter__other-settings').fadeIn();
                $('.counter__settings-btn').removeClass('disabled')
            },400)
        }

    }
})
$('.counter__other-setting').on('click', function(){
    if(!$(this).hasClass('active')){
        $(this).addClass('active');
    }
})
$('.counter__settings-btn').on('click', function(){
    if(!$(this).hasClass('disabled')){
        let chosenPokemon = $('.counter__pokemon-item.active').attr('data-pokemon');
        let chosenGame = $('.counter__game.active').attr('data-game');
        let chosenMethod = $('.counter__method.active').attr('data-method');
        let otherSettings = [];

        let counter_block = $('.counter__block');
        let counter_list = $('.counter__list');
    
        $('.counter__other-setting.active').each(function(){
            let setting = $(this).attr('data-other');
            otherSettings.push(setting);
        })
        console.log(chosenPokemon);
        console.log(chosenGame);
        console.log(chosenMethod);
        console.log(otherSettings);
    
        $('.counter__settings').fadeOut(200);
    
        $('.counter__pokemon-item').removeClass('active');
        $('.counter__game').removeClass('active');
        $('.counter__method').removeClass('active');
        $('.counter__other-setting').removeClass('active');
        $('.counter__settings-list').removeClass('active');
        $('.counter__settings-tab').removeClass('active');
        $('.counter__settings-tab').addClass('disable');
    
        $('.counter__settings-pokemons').addClass('active');
        $('.js-tab-pokemon').removeClass('disable');
        $('.js-tab-pokemon').addClass('active');
    
        $(this).addClass('disabled');
    
        $('.counter__add').fadeIn(400);
    }

})
$('.counter__add-btn').on('click',function(){
    $('.counter__add').fadeOut(200);
    $('.counter__settings-pokemons').fadeIn(400);
    $('.counter__settings').fadeIn(400);
})
$('.counter__timer-play').on('click', function(){
    if($(this).hasClass('stop')){
        stopTimer();
    } else {
        startTimer();
    }
    $(this).toggleClass('stop');
})
$('.counter__timer-reset').on('click', function(){
    resetTimer();
})
$('.counter__shiny-btn').on('click',function(){
    $('.counter__data-list').hide();
    $('.counter__timer').hide();
    $('.counter__chance').hide();
    $('.counter__buttons').hide();
    $('.counter__pokemon-number').hide();
    $('.counter__control').hide();
    $('.counter__pokemon').addClass('catched');
    $('.counter__result').fadeIn();
    $('.counter__result').css('display','flex');
})
$('.counter__result-prev').on('click', function(){
    $('.counter__result').hide();
    $('.counter__pokemon').removeClass('catched');
    $('.counter__data-list').fadeIn();
    $('.counter__data-list').css('display','flex');
    $('.counter__timer').fadeIn();
    $('.counter__chance').fadeIn();
    $('.counter__buttons').fadeIn();
    $('.counter__pokemon-number').fadeIn();
    $('.counter__control').fadeIn();

})
$('.personal-acc__sidebar-btns').on('click', function(){
    if(!$(this).hasClass('active')){
        $('.personal-acc__sidebar-btns').removeClass('active');
        $(this).addClass('active');
    }
    if($(this).attr('data-tab') == 'history' && $('.personal-acc__settings').hasClass('active')){
        $('.personal-acc__settings').removeClass('active');
        $('.personal-acc__settings').hide();
        $('.personal-acc__history').fadeIn();
        $('.personal-acc__history').addClass('active');
    } else if($(this).attr('data-tab') == 'settings' && $('.personal-acc__history').hasClass('active')){
        $('.personal-acc__history').removeClass('active');
        $('.personal-acc__history').hide();
        $('.personal-acc__settings').css('display','flex');
        $('.personal-acc__settings').hide();
        $('.personal-acc__settings').fadeIn();
        $('.personal-acc__settings').addClass('active');
    } else if($(this).attr('data-tab') == 'exit'){
        $('.modal-acc-exit').css('display','flex');
        $('.modal-acc-exit').hide();
        $('.modal-acc-exit').fadeIn();
    }   
})
$('.js-upd-info').on('click', function(){
    $('.personal-acc__wrapper').hide();
    $('.personal-acc__btns').hide();
    $('.personal-acc__update').fadeIn();
})
$('.js-change-pass').on('click', function(){
    $('.personal-acc__wrapper').hide();
    $('.personal-acc__btns').hide();
    $('.personal-acc__change-pass').fadeIn();
})
$('.js-upd-info-submit').on('click',function(){
    let nic = $('.personal-acc__nic');
    let email = $('.personal-acc__email');
})
$('.modal-acc-exit__close').on('click',function(){
    $('.modal-acc-exit').fadeOut();
})
$('.modal-acc-exit__btn-close').on('click', function(){
    $('.modal-acc-exit').fadeOut();
})
$('.modal-del-find__close').on('click', function(){
    $('.modal-del-find').fadeOut();
})
$('.modal-del-find__btn-close').on('click', function(){
    $('.modal-del-find').fadeOut();
})
$('.modal-forgot__close').on('click', function(){
    $('.modal-forgot').fadeOut();
})
$('.find-shiny__del').on('click', function(){
    $('.modal-del-find').css('display','flex');
    $('.modal-del-find').hide();
    $('.modal-del-find').fadeIn();
})
$('.modal-reg__close').on('click',function(){
    let modal = $(this).closest('.modal-reg');
    modal.fadeOut();
})
$('.modal-login__close').on('click', function(){
    $('.modal-login').fadeOut();
})
$('a').on('click', function(e){
    let url = $(this).attr('href');

    if(url == '#login'){
        e.preventDefault();
        console.log('test');
        $('.modal-login').css('display','flex');
        $('.modal-login').hide();
        $('.modal-login').fadeIn();
    }
    if(url == '#registration'){
        e.preventDefault();
        $('.modal-login').fadeOut();
        $('.modal-reg').css('display','flex');
        $('.modal-reg').hide();
        $('.modal-reg').fadeIn();
    }
    if(url == '#restore-pass'){
        e.preventDefault();
        $('.modal-login').fadeOut();
        $('.modal-forgot').css('display','flex');
        $('.modal-forgot').hide();
        $('.modal-forgot').fadeIn();
    }
})
$('.filter-tab').on('click',function(){
    if(!$(this).hasClass('active')){
        $('.filter-tab').removeClass('active');
        $(this).addClass('active');
    }
})
$('.header__mobile-link-parent svg').on('click',function(){
    let parentLink = $(this).closest('.header__mobile-link-parent');
    let submenu = parentLink.find('.header__mobile-submenu');
    let mobileMenu = $('.header__mobile-menu');

    submenu.toggleClass('active');
    mobileMenu.toggleClass('hide');
})
$('.header__mobile-submenu-back').on('click',function(){
    let parentLink = $(this).closest('.header__mobile-link-parent');
    let submenu = parentLink.find('.header__mobile-submenu');
    let mobileMenu = $('.header__mobile-menu');

    submenu.toggleClass('active');
    mobileMenu.toggleClass('hide');
})
$('.show-more').on('click',function(){
    let parent = $(this).closest('section');
    let textBlock = parent.find('.hide-content-mobile');

    if(!$(this).hasClass('open')){
        textBlock.addClass('open');
        $(this).addClass('open');
        $(this).text('Скрыть');
    } else {
        textBlock.removeClass('open');
        $(this).removeClass('open');
        $(this).text('Подробнее');
    }
})
$("a").on("click", function (event) {
    var id = $(this).attr('href');
    var top = $(id).offset().top - 130;
    $('body,html').animate({ scrollTop: top }, 1000);
});