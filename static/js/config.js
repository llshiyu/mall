/*
 * 公共js，监听输入框状态
 * 2017-05-11
 * */
$(function(){
	inputChange();
});

//监听输入框状态
function inputChange() {
	var start = '<p><em class="formTipsIcon">提示</em><span class="fl">', // 提示信息开始
		end = '</span></p>', // 提示信息结束
		okStart = '<em class="formTipsOk">', // 成功提示信息开始
		okEnd = '</em>'; // 成功提示信息结束

	// 文本框失去焦点后
	$('form :input').blur(function() {
		var $parent = $(this).parent(), //获取input父元素
			$msgObj = $(this).next("div").children(), // 获取信息提示部分隐藏的div
			$formBoxObj = $parent.find(".formTipsBox"); // 获取信息提示框
		
			
		// 移除提示信息
		$formBoxObj.children().remove();
		$parent.children("em").remove();

		// 验证用户名
		if($(this).is('#principal') || $(this).is('#username')) {
			publicTips(this,'请输入用户名');
		}
		//验证密码
		if($(this).is('#credentials') || $(this).is('#password') || $(this).is('#confirm')) {
			publicTips(this,'请输入密码');
		}
		//验证昵称
		if($(this).is('#nickname')) {
			publicTips(this,'请输入昵称');
		}
		//验证手机号码
		if($(this).is('#phone')) {
			publicTips(this,'请输入手机号码');
		}
		//验证简介
		if($(this).is('#introduction')) {
			publicTips(this,'请输入简介');
		}		
		//验证邮箱
		if($(this).is('#email')) {
			publicTips(this,'请输入邮箱');
		}
		//验证验证码
		if($(this).is('#captcha')) {
			publicTips(this,'请输入验证码');
		}
	}).keyup(function() {
		$(this).triggerHandler("blur");
	}).focus(function() {
		$(this).triggerHandler("blur");
	}); //end blur
	//登录，注册，个人中心修改页点击提交按钮是验证表单
	var $parents = $('form :input').parent(), //获取input父元素
		$msgObjs = $('form :input').next("div").children(), // 获取信息提示部分隐藏的div
		$formBoxObjs = $parents.find(".formTipsBox"); // 获取信息提示框
	$('#login-submit').click(function(e){
		$formBoxObjs.children().remove();
		$parents.children("em").remove();
		publicTips('#principal','请输入用户名');
		publicTips('#credentials','请输入密码');
		publicTips('#captcha','请输入验证码');
		e.preventDefault();
	});
	$('#register-submit').click(function(e){
		$formBoxObjs.children().remove();
		$parents.children("em").remove();
		publicTips('#username','请输入用户名');
		publicTips('#password','请输入密码');
		publicTips('#confirm','请输入密码');
		publicTips('#email','请输入邮箱');
		publicTips('#captcha','请输入验证码');
		e.preventDefault();
	});
	$('#user-detail-submit').click(function(e){
		$formBoxObjs.children().remove();
		$parents.children("em").remove();
		publicTips('#nickname','请输入昵称');
		publicTips('#phone','请输入手机号码');
		publicTips('#email','请输入邮箱');
		publicTips('#introduction','请输入简介');
		e.preventDefault();
	});
	//提示信息
	function publicTips(obj, msg) {
		var $parent = $(obj).parent(), //获取input父元素
			$msgObj = $(obj).next("div").children(), // 获取信息提示部分隐藏的div
			$formBoxObj = $parent.find(".formTipsBox"); // 获取信息提示框
			console.log($(obj).val());
		// 输入是否为空
		if(obj.value == "" || $(obj).val() == "") {
			// 提醒信息
			var warnMsg = msg;

			// 显示提醒信息
			$formBoxObj.append(start + warnMsg + end);
			$(obj).addClass("eInputFocus");
			$msgObj.removeClass("undis").addClass("formTipsWarn");

		} else {
			// 成功信息
			var okMsg = '成功';

			// 显示成功信息
			$parent.append(okStart + okMsg + okEnd);

			// 移除提醒和错误信息样式
			if($msgObj.hasClass("formTipsWarn")) {
				$msgObj.removeClass("formTipsWarn");
			}
			$(obj).removeClass("eInputFocus");
			$msgObj.addClass("undis");
		}
	}
}