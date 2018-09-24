
var mySwiper = new Swiper ('.search_top', {
    direction: 'horizontal',//垂直vertical 水平horizontal
    loop: true,//  循环播放
    autoplay: true,// 自动播放
    initialSlide: 0,// 默认显示

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        // type: 'progressbar'
    }
});

var swiper = new Swiper ('.search_btm', {
    direction: 'horizontal',//垂直vertical 水平horizontal
    loop: true,//  循环播放
    autoplay: true,// 自动播放
    initialSlide: 0,// 默认显示

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        // type: 'progressbar'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
