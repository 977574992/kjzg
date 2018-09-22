$(function () {
    $('.w_nav li').on('click',function () {
        var ind=$(this).index();
        $('.w_nav li').eq(ind).addClass('w_current').siblings().removeClass('w_current')
    })
    // var swiper = new Swiper('#w_swiper1', {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     slidesPerGroup: 3,
    //     loop: true,
    //     loopFillGroupWithBlank: true,
    //     pagination: {
    //         el: '#w_swiper1 .swiper-pagination',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '#w_swiper1 .swiper-button-next',
    //         prevEl: '#w_swiper1 .swiper-button-prev',
    //     },
    // });
    // 轮播
    w_ajax()
    function w_ajax(cc){
        $.ajax({
            type: "get",
            url: "json/w_swiper.json",
            dataType: "json",
            success: function(data) {
                var obj = typeof data == "object" ? data : eval("(" + data + ")");
                var last = obj.w_data;
                for (var i = 0; i < last.length; i++) {
                    $('#w_swiper1 .swiper-wrapper').append($('<div class="swiper-slide"><a href="#" class="w_swiperimg"><img src="'+last[i].img+'"/></a><div class="w_mask"><span class="w_search-icon"></span></div></div>'))
                }
                var swiper = new Swiper('#w_swiper1', {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 3,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    pagination: {
                        el: '#w_swiper1 .swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#w_swiper1 .swiper-button-next',
                        prevEl: '#w_swiper1 .swiper-button-prev',
                    },
                });
            }
        });
    }

    var pa = {
        todos: [
            {
                img: 'img/w_img1.jpg',
                img1: 'img/w_img1back.png'
            },
            {
                img: 'img/w_img2.jpg',
                img1: 'img/w_img2back.png'
            },
            {
                img: 'img/w_img3.jpg',
                img1: 'img/w_img3back.png'
            },
            {
                img: 'img/w_img4.jpg',
                img1: 'img/w_img4back.png'
            },
            {
                img: 'img/w_img5.jpg',
                img1: 'img/w_img5back.png'
            },
            {
                img: 'img/w_img6.jpg',
                img1: 'img/w_img6back.png'
            },
            {
                img: 'img/w_img7.jpg',
                img1: 'img/w_img7back.png'
            },
            {
                img: 'img/w_img8.jpg',
                img1: 'img/w_img8back.png'
            },
        ]
    }
    var vm = new Vue({
        el: '#w_solution-list',
        data: pa
    });
    window.vm = vm;
})