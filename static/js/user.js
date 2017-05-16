/*
 * 个人中心页
 * 2017-05-16
 * */

//接口地址
var url = 'http://120.24.68.200:8080';
var succCode = 200;

$(function(){
	$.ajax({
		type: "get",
		url: url + '/user',
		xhrFields: {
			withCredentials: true //支持附带详细信息
		},
		success: function(data) {
			if(data.code == succCode){
				$('#username').val(data.data.username);
				$('#nickname').val(data.data.nickname);
				$('#birthday').val(data.data.birthday);
				$('#phone').val(data.data.phone);
				$('#email').val(data.data.email);
				$('#introduction').val(data.data.introduction);
				if(data.data.username == 'MALE'){
					$('#male').attr("checked",true);
				}
				else if(data.data.username == 'FEMALE'){
					$('#female').attr("checked",true);
				}
				else{
					$('#unknow').attr("checked",true);
				}
			}
			else{
				$('#err-prompt').empty().append('获取信息失败 ');
				$('body').empty().append(data);
			}
		},
		error: function() {
			console.log('接口错误');
			$('#err-prompt').empty().append('接口错误---加载页面');
		}
	});
});