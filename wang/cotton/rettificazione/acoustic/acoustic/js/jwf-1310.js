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
	$(".qianshenbianhuan").click(function(){
		$(".qianshenbianhuan-video").show(300);
		$(".qianshenbianhuan-video span").click(function(){
			$(".qianshenbianhuan-video").hide(300);
			$(".qianshenbianhuan-video video").get(0).pause();
		});
	});
	$(".zidongduantiao").click(function(){
		$(".zidongduantiao-video").show(300);
		$(".zidongduantiao-video span").click(function(){
			$(".zidongduantiao-video").hide(300);
			$(".zidongduantiao-video video").get(0).pause();
		});
	});
	$(".shipinyanshi").click(function(){
		$(".shipinyanshi-video").show(300);
		$(".shipinyanshi-video span").click(function(){
			$(".shipinyanshi-video").hide(300);
			$(".shipinyanshi-video video").get(0).pause();
		});
	});
})