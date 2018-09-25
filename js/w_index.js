$(function () {
    // 轮播
        $.ajax({
            type: "get",
            url: "json/w_swiper.json",
            dataType: "json",
            success: function(data) {
                var obj = typeof data == "object" ? data : eval("(" + data + ")");
                var arr=[objj(),obj1(),obj2(),obj3(),obj4(),obj5()]
                function objj(){
                    return obj.w_data;
                }
                function obj1(){
                    return obj.w_data1;
                }
                function obj2(){
                    return obj.w_data2;
                }
                function obj3(){
                    return obj.w_data3;
                }
                function obj4(){
                    return obj.w_data4;
                }
                function obj5(){
                    return obj.w_data5;
                }
                var s=objj()
                swip(s)
                $('.w_nav li').on('click',function () {
                    $('#w_swiper1 .swiper-wrapper').empty()
                    var ind=$(this).index();
                    $('.w_nav li').eq(ind).addClass('w_current').siblings().removeClass('w_current')
                    var s=arr[ind];
                    swip(s)
                })
                function swip(s) {
                    for (var i = 0; i < s.length; i++) {
                        $('#w_swiper1 .swiper-wrapper').append($('<div class="swiper-slide"><a href="#" class="w_swiperimg"><img src="'+s[i].img+'"/></a><div class="w_mask"><span class="w_search-icon"></span></div></div>'))
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

            }
        });
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
    var amour = $("#template").html();
    var come = _.template(amour);
    $.get("json/w_swiper.json", function(data) {
        var obj = typeof data == "object" ? data : eval("(" + data + ")");
        var list = obj.eg;
        list.forEach(function(item) {
            // 绑定数据
            var ALL = come(item);
            $(".w_partner-list").append($(ALL));
        });

        // setInterval(function () {
        //     var and=rand(0,24)
        //
        // },30)
    });

    //窗口显示才加载
    var wrapTop = $(".w_math").offset().top;
    var istrue = true;
    $(window).on("scroll",
        function() {
            var s = $(window).scrollTop();
            if (s > wrapTop - 500 && istrue) {
                $(".num-1").each(count);
                function count(a) {
                    var b = $(this);
                    a = $.extend({},
                        a || {},
                        b.data("countToOptions") || {});
                    b.countTo(a)
                };
                istrue = false;
            };
        })
    //设置计数
    $.fn.countTo = function (options) {
        options = options || {};
        return $(this).each(function () {
            //当前元素的选项
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from:            $(this).data('from'),
                to:              $(this).data('to'),
                speed:           $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals:        $(this).data('decimals')
            }, options);
            //更新值
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;
            //更改应用和变量
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};
            $self.data('countTo', data);
            //如果有间断，找到并清除
            if (data.interval) {
                clearInterval(data.interval);
            };
            data.interval = setInterval(updateTimer, settings.refreshInterval);
            //初始化起始值
            render(value);
            function updateTimer() {
                value += increment;
                loopCount++;
                render(value);
                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }
                if (loopCount >= loops) {
                    //移出间隔
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;
                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }
            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };
    $.fn.countTo.defaults={
        from:0,               //数字开始的值
        to:0,                 //数字结束的值
        speed:1000,           //设置步长的时间
        refreshInterval:100,  //隔间值
        decimals:0,           //显示小位数
        formatter: formatter, //渲染之前格式化
        onUpdate:null,        //每次更新前的回调方法
        onComplete:null       //完成更新的回调方法
    };
    function formatter(value, settings){
        return value.toFixed(settings.decimals);
    }
    //自定义格式
    $('#count-number').data('countToOptions',{
        formmatter:function(value, options){
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });
    //定时器
    $('.num-1').each(count);
    function count(options){
        var $this=$(this);
        options=$.extend({}, options||{}, $this.data('countToOptions')||{});
        $this.countTo(options);
    }
    $(window).resize(function(){
        document.documentElement.style.cssText = 'font-size:' + (document.body.offsetWidth / 1080) * 100 + 'px';
    });

    var vm = new Vue({
        el: '#w_solution-list',
        data: pa
    });
    window.vm = vm;
})