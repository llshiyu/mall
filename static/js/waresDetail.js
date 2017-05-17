/*
 * 商品详情页
 * 2017-05-17
 * */
//接口地址
var url = 'http://120.24.68.200:8080';
//var succCode = 1;

$(function(){
	//规格颜色点击样式
	$('.specifications a').click(function(e){
		$(this).addClass('active').siblings().removeClass('active');
		e.preventDefault();
	})
});