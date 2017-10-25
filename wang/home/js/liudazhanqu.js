$(function() {
	$(".img-wrap a:first-child").css("display","block");
//	var arr=[];
//	var init = 0;
	$('.chilun').click(function () {
		var index = $(this).index();
			if(index%2){
		 		$(".img-wrap a").eq(index-1).stop().slideDown(1500).siblings().slideUp(800);
				
			}else{
		 		$(".img-wrap a").eq(index-1).stop().show(1500).siblings().hide(800);
			}

//			$(".img-wrap>a").eq(index-1).addClass("animated bounceIn").siblings().removeClass("animated bounceIn");
	
//		arr.push(index);
//		console.log(arr);
//		if(arr.length<=1){
//			init = 0;
//		}else{
//			 init = (arr[arr.length-2]-1)*60;
//		};
	 	$(".zhizhen").rotate({
	 		angle: 0,
	 		duration: 2000,
	 		animateTo: (index-1)*60
//	 		easing: $.easing.easeInOutExpo
	 		});

		});

})