var p1 = new Progress({
    el:'Y_canvas',//canvas元素id
    deg:10,//绘制角度
    timer:1,//绘制时间
    lineWidth:10,//线宽
    lineBgColor:'white',//底圆颜色
    lineColor:'blue',//动态圆颜色
    textColor:'black',//文本颜色
    fontSize:26,//字体大小
    circleRadius:68//圆半径
});
var p2 = new Progress({
    el:'Y_canvaso',//canvas元素id
    deg:20,//绘制角度
    timer:1,//绘制时间
    lineWidth:10,//线宽
    lineBgColor:'white',//底圆颜色
    lineColor:'blue',//动态圆颜色
    textColor:'black',//文本颜色
    fontSize:26,//字体大小
    circleRadius:68//圆半径
});
var p3 = new Progress({
    el:'Y_canvast',//canvas元素id
    deg:60,//绘制角度
    timer:1,//绘制时间
    lineWidth:10,//线宽
    lineBgColor:'white',//底圆颜色
    lineColor:'blue',//动态圆颜色
    textColor:'black',//文本颜色
    fontSize:26,//字体大小
    circleRadius:68//圆半径
});
var p4 = new Progress({
    el:'Y_canvash',//canvas元素id
    deg:80,//绘制角度
    timer:1,//绘制时间
    lineWidth:10,//线宽
    lineBgColor:'white',//底圆颜色
    lineColor:'blue',//动态圆颜色
    textColor:'black',//文本颜色
    fontSize:26,//字体大小
    circleRadius:68//圆半径
});
var p5 = new Progress({
    el:'Y_canvasf',//canvas元素id
    deg:95,//绘制角度
    timer:1,//绘制时间
    lineWidth:10,//线宽
    lineBgColor:'white',//底圆颜色
    lineColor:'blue',//动态圆颜色
    textColor:'black',//文本颜色
    fontSize:26,//字体大小
    circleRadius:68//圆半径
});
var p6 = new Progress({
    el:'Y_canvase',//canvas元素id
    deg:100,//绘制角度
    timer:1,//绘制时间
    lineWidth:10,//线宽
    lineBgColor:'white',//底圆颜色
    lineColor:'blue',//动态圆颜色
    textColor:'black',//文本颜色
    fontSize:26,//字体大小
    circleRadius:68//圆半径
});
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // autoplay: { 
    //         delay: 10,   // 自动播放时间
    //         disableOnInteraction: true,
    //     },
    //     loop: true,   //是否循环
  },
});
var str = $('#template').html();
var box_temp = _.template(str);
$.get('json/Y_json.json', function (data) {
    var obj = typeof data == 'object' ? data : eval('(' + data + ')');
    var list = obj.data;
    list.forEach(function (item, index) {
        // 4.绑定数据
        var str1 = box_temp(item);
        // 5.展示数据
        $('.Y_time').append($(str1));
    });
})
var str2 = $('#templateo').html();
var box_tempt = _.template(str2);
$.get('json/Y_json.json', function (data) {
    var obj = typeof data == 'object' ? data : eval('(' + data + ')');
    var liste = obj.data;
    liste.forEach(function (item, index) {
        // 4.绑定数据
        var str3 = box_tempt(item);
        // 5.展示数据
        $('.Y_conclear').append($(str3));
    });
})