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

	$('#birthday').val(year + '-' + getZero(month) + '-' + getZero(day));
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
				if(data.data.gender == 'MALE'){
					$('#male').attr("checked",true);
				}
				else if(data.data.gender == 'FEMALE'){
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

	//点击修改按钮
	$('#user-detail-submit').click(function(e) {
		var username = $('#username').val();
		var nickname = $('#nickname').val();
		var birthday = $('#birthday').val();
		var phone = $('#phone').val();
		var email = $('#email').val();
		var introduction = $('#introduction').val();
//		$('input:radio[name="gender"]:checked').val()
		var gender = $('input:radio[name="gender"]:checked').val();  //选择被选中Radio的Value值
		var genderNum = '';
		if(gender == 'UNKNOW')genderNum = 0;
		if(gender == 'MALE')genderNum = 1;
		if(gender == 'FEMALE')genderNum = 2;
		$('#err-prompt').empty().append(gender+' '+genderNum);
		
		$.ajax({
			type: "post",
			url: url + '/user',
			data: {
				_message: put,
				principal: principal,
				credentials: credentials,
				captcha: captcha
			},
			xhrFields: {
				withCredentials: true //支持附带详细信息
			},
			success: function(data) {
				if(data.code == succCode){
					$('#err-prompt').empty().append('提交信息成功!!!!');
				}
				else{
					$('#err-prompt').empty().append('提交信息失败??????????');
				}
			},
			error: function() {
				console.log('接口错误');
				$('#err-prompt').empty().append('接口错误----按钮');
			}
		});

		e.preventDefault();
	});

});

//日期补零
function getZero(d) {
	if(d < 10) {
		return '0' + d;
	}
	return d;
}