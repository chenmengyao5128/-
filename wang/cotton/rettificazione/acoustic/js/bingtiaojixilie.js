$(function() {
	//	var left = $(".bingtiaoxilie-container .wangluojicheng .wangluojicheng-img div").scrollLeft();
	//	console.log(left);
	//	if (left<0) {
	//		$(".tishi").hide();
	//	} else{
	//		
	//	}
	//	
	$(".bingtiaoxilie-container .wangluojicheng .wangluojicheng-img ").scroll(function() {
		var left = $(".bingtiaoxilie-container .wangluojicheng .wangluojicheng-img").scrollLeft();
//		console.log(left);
		if (left>30) {
			$(".tishi").hide(300);
		} else{
			$(".tishi").show(300);
		}
	})
})