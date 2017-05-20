/*
 * 主页
 * 2017-05-20
 * */
//接口地址
var url = 'http://120.24.68.200:8080';
//var succCode = 1;

$(function() {
	//分类点击事件
	$('#content-nav li').click(function(e) {
		$(this).addClass('active').siblings().removeClass('active');
		$('#waresDetail').addClass('undis');
		$('#waresIndex').removeClass('undis');
		e.preventDefault();
	});

});
