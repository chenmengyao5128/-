(function(win) {
	// 设计图尺寸
	window['adaptive'].desinWidth = 750;
	// body 字体大小 会将body字体大小设置为 baseFont / 100 + 'rem'  750的设计图一般设置为28,640的设计图一般设置为24
	window['adaptive'].baseFont = 28;
	// 显示最大宽度 可选
	window['adaptive'].maxWidth = 750;
	// rem值改变后执行方法 可选
	window['adaptive'].scaleType = 1;

	// 初始化
	window['adaptive'].init();

})(window);

