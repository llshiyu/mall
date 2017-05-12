/*
 * 个人中心修改页
 * 2017-05-11
 * */
//接口地址
var url = 'http://120.24.68.200:8080';
var succCode = 200;

$(function() {
	//日期对象
	$('.form_datetime').datetimepicker({
		//language:  'fr',
		weekStart: 1,
		todayBtn: 1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
		showMeridian: 1
	});
	$('.form_date').datetimepicker({
		language: 'zh-CN',
		weekStart: 1,
		todayBtn: 1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
	});

	var today = new Date(); //获得当前日期
	var year = today.getFullYear(); //获得年份
	var month = today.getMonth() + 1; //此方法获得的月份是从0---11，所以要加1才是当前月份
	var day = today.getDate(); //获得当前日期

	$('#startTime').val(year + '-' + getZero(month) + '-' + getZero(day));
	$.ajax({
		type: "get",
		url: url + '/user',
//		xhrFields: {
//			withCredentials: true //支持附带详细信息
//		},
		success: function(data) {
			if(data.code == succCode){
				$('#username').val('data.data.username');
				$('#nickname').val('data.data.nickname');
				$('#birthday').val('data.data.birthday');
				$('#phone').val('data.data.phone');
				$('#email').val('data.data.email');
				$('#introduction').val('data.data.introduction');
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
				$('#err-prompt').empty().append('获取信息失败   '+data);
				$('body').empty().append(data);
			}
		},
		error: function() {
			console.log('接口错误');
			$('#err-prompt').empty().append('接口错误');
		}
	});

	//修改form表单提交
//	$('#user-detail-submit').click(function(e) {
//		var principal = $('#principal').val();
//		var credentials = $('#credentials').val();
//		var captcha = $('#captcha').val();
//		console.log(principal + ' ' + credentials + ' ' + captcha);
//		$.ajax({
//			type: "get",
//			url: url + '/user',
//			data: {
//				principal: principal,
//				credentials: credentials,
//				captcha: captcha
//			},
//			xhrFields: {
//				withCredentials: true //支持附带详细信息
//			},
//			success: function(data) {
//				$('#err-prompt').empty().append(data.message);
//				console.log(data.message);
//				console.log('2 :' + principal + ' ' + credentials + ' ' + captcha);
//				console.log(data);
//				console.log('succ');
//				if(data.code != succCode) {
//					changeCode();
//					console.log("data.code");
//				}
//			},
//			error: function() {
//				console.log('登录的接口错误');
//			}
//		});
//		$('#credentials').val('');
//		$('#captcha').val('');
//
//		e.preventDefault();
//	});

});

//日期补零
function getZero(d) {
	if(d < 10) {
		return '0' + d;
	}
	return d;
}