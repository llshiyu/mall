/*
 * 个人中心修改页
 * 2017-05-11
 * */

$(function(){
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
});

//日期补零
function getZero(d) {
	if(d < 10) {
		return '0' + d;
	}
	return d;
}

