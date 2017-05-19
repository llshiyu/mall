/*
 * 我的订单页
 * 2017-05-19
 * */

//接口地址
var url = 'http://120.24.68.200:8080';
var succCode = 200;

$(function(){
	//筛选条件
	$('#select-btn span').click(function(e){
		$(this).addClass('undis').siblings().removeClass('undis');
		$('#select-more').is('.undis') ? $('#select-more').removeClass('undis') :$('#select-more').addClass('undis');
		e.preventDefault();
	});
	//所有类名为sleect-id的孩子li 点击事件
	$('.sleect-id li').click(function(e){
		$(this).addClass('active').siblings().removeClass('active');
		e.preventDefault();
	});
	
	//所有订单  tab切换
	$(".tabDemo li").click(function(e){
		$(this).addClass("active").siblings().removeClass("active");
		var tabDemoNum=$(".tabDemo li").index(this);
		$(".tabDemoCon>div").eq(tabDemoNum).removeClass("undis").siblings().addClass("undis");
		e.preventDefault();
	});
	
	$('.pending-payment').empty().append(errPage('待付款'));
	$('.shipment-pending').empty().append(errPage('待发货'));
	$('.goods-to-be-received').empty().append(errPage('待收货'));
	$('.pending-evaluation').empty().append(errPage('待评价'));
	
});
//<!--404页面-->
function errPage(text){
	var page ='<div class="err-page clear">'
				+'<div class="left-text fl">'
					+'<h4>没有<span>'+text+'</span>的订单哦~</h4>'
					+'<button class="btn btn-default"><a href="order.html">查看全部订单</a></button>'
					+'<button class="btn btn-danger"><a href="main.html">去首页看看</a></button>'
				+'</div>'
				+'<div class="right-img fl">'
					+'<img src="../../static/img/bird1.png"/>'
				+'</div>'
			 +'</div>';
	return page;
}
