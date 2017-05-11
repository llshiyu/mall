/*
 * 登录页
 * 2017-05-11
 * */

//form跳转路径
var actionUrl = '../index.html';
//接口地址
var url = 'http://120.24.68.200:8080';

$(function(){
	//设置验证码的图片地址
	$('#kaptchaImage').attr('src',url+'/captcha.jpg');
	//点击图片生成验证码
	$('#kaptchaImage').click(function () {
		changeCode();
    });
    //form表单提交
	$('#form-submit').click(function(e){
		changeCode();
		var principal = $('#principal').val();
	    var credentials = $('#credentials').val();
	    var captcha = $('#captcha').val();
	    
	    console.log(principal == '');
		console.log(principal+' '+credentials+' '+captcha);
		$.ajax({
			type:"post",
			url:url+'/user/login',
			data:{
				principal:principal,
		    	credentials:credentials,
		    	captcha:captcha
			},
			success:function(data){
				
				console.log('2 :'+principal+' '+credentials+' '+captcha);
				console.log(data);
				console.log('succ');
			},
			error:function(){
				console.log('登录的接口错误');
			}
		});
		e.preventDefault();
	})
});

//关闭窗口时自动退出
window.onbeforeunload = function () {
    if (event.clientX > 360 && event.clientY < 0 || event.altKey) {
        alert(parent.document.location);
    }
};

//生成图片验证码
function changeCode() {
    $('#kaptchaImage').hide().attr('src', url+'/captcha.jpg?' + Math.floor(Math.random() * 100)).fadeIn();
    event.cancelBubble = true;
}
