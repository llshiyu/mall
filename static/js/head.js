/*
 * 公共头部js  监听是否登录
 * 2017-05-15
 * */
//接口地址
var url = 'http://120.24.68.200:8080';
//var succCode = 1;

$(function(){
	
	$.ajax({
		type:"post",
		url:url+"/user/checkLogin",
		xhrFields: {
			withCredentials: true //支持附带详细信息
		},
		success: function(data){
			if(data.code == 1){
				$('.nav-a').addClass('undis');
				$('.user-a').removeClass('undis');
				$('#head-username').empty().append(data.message);
				if(data.portrait == '' || data.portrait == undefined){
					$('#head-username').siblings('img').attr('src','../../static/img/bird.jpg');
				}else{
					$('#head-username').siblings('img').attr('src',url+data.data.portrait);
				}
				
			}
			else{
				$('.nav-a').removeClass('undis');
				$('.user-a').addClass('undis');
				
				$('#err').removeClass('undis');
				$('#err').empty().append(data.message);
			}
		},
		error: function(){
			$('#err').removeClass('undis');
			$('#err').empty().append('接口错误--head');
		}
	});
	//退出
	$('#logout').click(function(e){
		
		logout();
		e.preventDefault();
	});
	
	$('.main-page').click(function(e){
		jumpPage('/main.html');
		e.preventDefault();
	});
	$('.login-page').click(function(e){
		jumpPage('/login.html');
		e.preventDefault();
	});
	$('.register-page').click(function(e){
		jumpPage('/register.html');
		e.preventDefault();
	});
	$('.user-page').click(function(e){
		jumpPage('/user.html');
		e.preventDefault();
	});
	$('.cart-page').click(function(e){
		jumpPage('/cart.html');
		e.preventDefault();
	});
	$('.order-page').click(function(e){
		jumpPage('/order.html');
		e.preventDefault();
	});
	
});

function logout(){
	$.ajax({
		type:"get",
		url:url+"/user/logout",
		xhrFields: {
			withCredentials: true //支持附带详细信息
		},
		success: function(data){
			
			window.location="index.html";
			
			$('body').empty().append(data);
				$('#err').removeClass('undis');
				$('#err').empty().append(data.message);
		},
		error: function(){
			$('#err').removeClass('undis');
			$('#err').empty().append('接口错误--head');
		}
	});
}

//跳转页面
function jumpPage(page){
	$.ajax({
		type:"get",
		url:url+page,
		success: function(data){
			$('#err-prompt').empty().append('成功');
			$('body').empty().append(data);
		},
		error: function(){
			console.log('接口错误');
			$('#err-prompt').empty().append('接口错误---跳转时');
		}
	});
	
	
//	return $(a).attr('href',url+page);
}
