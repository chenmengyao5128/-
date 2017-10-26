//360℃全景轮播
$(document).ready(function () {
    //360℃全景图
    var $threeSixty = $('.threesixty');
    $threeSixty.threeSixty({
        dragDirection: 'horizontal',
        useKeys: true,
        draggable: true,
        drag:true
    });

    //控制喂入型式400，500条筒切换
    $(".wr-btn-one").click(function () {
        $(this).css("border","1px solid #01c09e").css("background","#01c09e").css("color","#fff");
        $(".wr-btn-two").css("border","1px solid #8c92aa").css("background","#fff").css("color","#8a95a9");
        $(".wr-btn-img").attr("src","image/jwf1418a_dongtai05_400.gif");
    });
    $(".wr-btn-two").click(function () {
        $(this).css("border","1px solid #01c09e").css("background","#01c09e").css("color","#fff");
        $(".wr-btn-one").css("border","1px solid #8c92aa").css("background","#fff").css("color","#8a95a9");
        $(".wr-btn-img").attr("src","image/jwf1418a_dongtai05_500.gif");
    });

});