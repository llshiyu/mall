/*
 * 登录页
 * 2017-05-11
 * */

//form跳转路径
var actionUrl = '../index.html';
//接口地址
var url = 'http://120.24.68.200:8080';
var succCode = 200;

$(function() {

	//设置验证码的图片地址
	$('#kaptchaImage').attr('src', url + '/captcha.jpg');
	//点击图片生成验证码
	$('#kaptchaImage').click(function() {
		changeCode();
	});
	//登录form表单提交
	$('#login-submit').click(function(e) {		
		var principal = $('#principal').val();
		var credentials = $('#credentials').val();
		var captcha = $('#captcha').val();
		console.log(principal + ' ' + credentials + ' ' + captcha);
		$.ajax({
			type: "post",
			url: url + '/user/login',
			data: {
				principal: principal,
				credentials: credentials,
				captcha: captcha
			},
			xhrFields: {
				withCredentials: true //支持附带详细信息
			},
			success: function(data) {
				if(data.code == succCode){
					$('#err-prompt').empty().append(data.message+'，2s后跳转到主页');
					
					console.log(data.message);
					console.log('2 :' + principal + ' ' + credentials + ' ' + captcha);
					console.log(data);
					console.log('succ');
				}
					
				else {
					changeCode();
					console.log("data.code");
					$('#err-prompt').empty().append(data.message);
				}
			},
			error: function() {
				console.log('接口错误');
				$('#err-prompt').empty().append('接口错误');
			}
		});
		$('#credentials').val('');
		$('#captcha').val('');
		
		e.preventDefault();
	});
	//注册form表单提交
	$('#register-submit').click(function(e) {
		var username = $('#username').val();
		var password = $('#password').val();
		var confirm = $('#confirm').val();		
		var email = $('#email').val();
		var captcha = $('#captcha').val();
		
		console.log(username + ' ' + password + ' ' + confirm + ' ' + email + ' ' + captcha);
		$.ajax({
			type: "post",
			url: url + '/user/register',
			data: {
				username: username,
				password: password,
				confirm: confirm,
				email: email,
				captcha: captcha
			},
			xhrFields: {
				withCredentials: true //支持附带详细信息
			},
			//			crossDomain:true,//请求偏向外域
			success: function(data) {
				if(data.code == succCode){
					$('#err-prompt').empty().append(data.message);
					console.log(data.message);
					console.log(data);
					console.log('succ');
				}
				else {
					changeCode();
					$('#err-prompt').empty().append(data.message);
				}
			},
			error: function() {
				console.log('接口错误');
				$('#err-prompt').empty().append('接口错误');
			}
		});

		e.preventDefault();
	});

});

//关闭窗口时自动退出
window.onbeforeunload = function() {
	if(event.clientX > 360 && event.clientY < 0 || event.altKey) {
		alert(parent.document.location);
	}
};

//生成图片验证码
function changeCode() {
	$('#kaptchaImage').hide().attr('src', url + '/captcha.jpg?' + Math.floor(Math.random() * 100)).fadeIn();
	event.cancelBubble = true;
}

//function 