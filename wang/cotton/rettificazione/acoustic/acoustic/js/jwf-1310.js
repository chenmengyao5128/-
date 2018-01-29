$(function(){
	$(".qianshenxitong .btns p").click(function(){
		$(this).css({"background":"#01c09e","color":"white","border":"none"}).siblings().css({"background":"white","border":"1px solid #8c92aa","color":"#8a95a9"});
		var index = $(this).index();
		$(".qianshenxitong .switch").eq(index).show().siblings(".xx").hide();
	});
	$(".huanshi360 p").click(function(){
		$(".w").show(300);
		$("body").css({"overflow":"hidden"});
		$(".w p").click(function(e){
			e.preventDefault();
			$(".w").hide(300);
		$("body").css({"overflow-y":"auto"});
		});
	});
	//视屏打开
	$(".play").click(function () {
        $(this).next().addClass('show');
		$(this).next().find('video').trigger("play");
		$(this).hide();
    });
    //视屏关闭
    $(".closeit").click(function () {
    	$(this).parent().prev().show();
        $(this).next().find("video").trigger('pause');
        $(this).parent().removeClass('show');
//      $(this).next().find("video").get(0).pause();
    });
    //  双击暂停
	$(".player").dblclick(function () {
		console.log(2)
        var x = $(this).find('video').get(0).paused;
		if(x){
            $(this).find('video').trigger('play');
        }else{
            $(this).find('video').trigger('pause');
        }
	});
})