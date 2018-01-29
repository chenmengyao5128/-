$(function(){
	//数据切换
	$(".model-flow p").on("touchend",function(){
		$(this).parent().parent().find(".model-cut-img").hide()
		$(this).parent().find("p").removeClass("active")
		$(this).addClass("active")
		$(this).parent().parent().find(".model-cut-img").eq($(this).index()).show()
	})
	//遮盖层的显示影藏
	$(".model-slide").scroll(function(){
		if($(".model-slide").scrollLeft()>30){
			$(this).find(".model-character").hide(300);
		}else{
			$(this).find(".model-character").show(300);
		}
		
	});
	//视屏打开
//	$(".play").click(function () {
//      $(this).nextAll().addClass('show');
//		$(this).nextAll().find('video').get(0).play();
//		$(this).hide();
//		$('h2').text($('video').offset().top);
//  });
//  //视屏关闭
//  $(".closeit").click(function () {
//  	$(".play").show()
//      $(".player video").trigger('pause');
//      $('.shop_bj>div').removeClass('show');
//  });
})
