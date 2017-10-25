//	5秒后页面跳转
//	window.onload=function () {
//		var time=0;
//      var times=setInterval(function () {
//      	time+=1;
//      	console.log(time)
//      	if(time==5){
//      		clearTimeout(times)
//      		window.location.href = "home/liudazhanqu.html";
//      	}
//      },1000);
//  }

$(function() {
	var images = new Array()

	function preload() {
		for(i = 0; i < preload.arguments.length; i++) {
			images[i] = new Image()
			images[i].src = preload.arguments[i]
		}
	}
	preload(
		"img/bg.png",
		"img/quan1.png",
		"img/quan2.png"
	)
	var tim = setInterval(function() {
		$('.meteor6').show();
	}, 1000)
	setTimeout(function() {
		$('.meteor6').hide();
		clearTimeout(tim)
	}, 3000);
})