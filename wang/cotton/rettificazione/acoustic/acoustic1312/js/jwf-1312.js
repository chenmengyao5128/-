$(function(){
	$(".jwf1312yzxt-btns p").click(function(){
		$(this).css({"background":"#01c09e","color":"white","border":"none"}).siblings().css({"background":"white","border":"1px solid #8c92aa","color":"#8a95a9"});
		var index = $(this).index();
		$(".jwf1312-yzxt-con .switch").eq(index).show().siblings().hide();
	});
	$(".jwf1312yzjg-btns p").click(function(){
		$(this).css({"background":"#01c09e","color":"white","border":"none"}).siblings().css({"background":"white","border":"1px solid #8c92aa","color":"#8a95a9"});
		var index = $(this).index();
		$(".jwf1312-yzjg-con .switch").eq(index).show().siblings().hide();
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
	
	$(".jwf1312-zhinengduantiao").click(function(){
		$(".jwf1312-zhinengduantiao-video").show(300);
		$(".jwf1312-zhinengduantiao-video span").click(function(){
			$(".jwf1312-zhinengduantiao-video").hide(300);
			$(".jwf1312-zhinengduantiao-video video").get(0).pause();
		});
	});
	
	$(".jwf1312-shipinyanshi").click(function(){
		$(".jwf1312-shipinyanshi-video").show(300);
		$(".jwf1312-shipinyanshi-video span").click(function(){
			$(".jwf1312-shipinyanshi-video").hide(300);
			$(".jwf1312-shipinyanshi-video video").get(0).pause();
		});
	});

})