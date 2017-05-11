
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
			$formBoxObj = $parent.find(".formTipsBox"), // 获取信息提示框
			warnTips = {
				divCls: "formTipsWarn",
				txtCls: "eInputFocus",
				tipsObj: $msgObj,
				txtObj: $(this)
			}; // 提醒信息对象

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
	// 移除提示样式
	function revTipsCls(obj) {
		// 移除信息提示样式
		if(obj.tipsObj.hasClass(obj.divCls)) {
			obj.tipsObj.removeClass(obj.divCls);
		}
		// 移除文本框提示样式
		switch(obj.divCls) {
			case "formTipsWarn":
				obj.txtObj.removeClass(obj.txtCls);
				break;
			case "formTipsErr":
				if(obj.txtObj.hasClass(obj.txtCls)) {

					obj.txtObj.removeClass(obj.txtCls);
				}
		}
	}
	//提示信息
	function publicTips(obj, msg) {
		var $parent = $(obj).parent(), //获取input父元素
			$msgObj = $(obj).next("div").children(), // 获取信息提示部分隐藏的div
			$formBoxObj = $parent.find(".formTipsBox"), // 获取信息提示框
			warnTips = {
				divCls: "formTipsWarn",
				txtCls: "eInputFocus",
				tipsObj: $msgObj,
				txtObj: $(this)
			}; // 提醒信息对象
		// 输入是否为空
		if(obj.value == "") {
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
			revTipsCls(warnTips);
			$msgObj.addClass("undis");
		}
	}
}