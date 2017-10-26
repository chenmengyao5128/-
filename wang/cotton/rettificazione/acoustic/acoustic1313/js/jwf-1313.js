$(function(){	
	$(".huanshi360 p").click(function(){
		$(".w").show(300);
		$("body").css({"overflow":"hidden"});
		$(".w p").click(function(e){
			e.preventDefault();
			$(".w").hide(300);
		$("body").css({"overflow-y":"auto"});
		});
	});
})