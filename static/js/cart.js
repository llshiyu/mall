/*
 * 购物车页
 * 2017-05-18
 * */
//接口地址
var url = 'http://120.24.68.200:8080';
//var succCode = 1;


$(function() {
	$('.text').each(function() {
		var num = parseInt($(this).val()),
			a = $(this).parents('tr').find('.c-price strong').html(),
			price = parseFloat($(this).parents('.cart-wares').find('.c-price strong').html()),
			$total = $(this).parents('.cart-wares').find('.c-total strong');

		// 设置减号的样式
		if(num == 1) {
			$(this).parent().find('.minus').attr('class', 'nominus');
		} else if(num > 1) {
			$(this).parent().find('.nominus').attr('class', 'minus');
		}
		
		// 计算总值
		$total.html((price * num).toFixed(2));
	});

	/*
	 * 点击加减商品时的效果
	 */
	//减
	$('.reduce').click(function(e) {
		var num = parseInt($(this).next('input').val()),
			$num = $(this).next('input'),
			price = parseFloat($(this).parents('tr').find('.c-price strong').html()),
			$total = $(this).parents('tr').find('.c-total strong');
		if(num == 2) {
			$(this).attr('class', 'nominus');
		}
		if(num > 1) {
			num--;
		} else num = 1;
		$num.val(num);
		$total.html((price * num).toFixed(2));
		e.preventDefault();
	});
	//加
	$('.plus').click(function(e) {
		var num = parseInt($(this).prev('input').val()),
			$num = $(this).prev('input'),
			price = parseFloat($(this).parents('tr').find('.c-price strong').html()),
			$total = $(this).parents('tr').find('.c-total strong');
		if(num == 1) {
			$(this).parent().find('.nominus').attr('class', 'minus');
		}
		num++;
		$num.val(num);
		$total.html((price * num).toFixed(2));
		e.preventDefault();
	});
	/*
	 * 文本框中直接输入值
	 */
	$('.text').keyup(function(e) {
		var num = $(this).val(),
			price = parseFloat($(this).parents('tr').find('.c-price strong').html()),
			$total = $(this).parents('tr').find('.c-total strong');

		// 如果不为数字时强制转换或者为0时强制转换
		if(num == '' || /\D+/.test(num) || num == 0) {
			num = 1;
			$(this).val(num);
			return false;
		}

		// 设置减号的样式
		if(num == 1) {
			$(this).parent().find('.minus').attr('class', 'nominus');
		} else if(num > 1) {
			$(this).parent().find('.nominus').attr('class', 'minus');
		}

		// 计算总值
		$total.html((price * num).toFixed(2));

	});
	//监听CheckBox变化，选中加深
	$('input').change(function(){
		if($('#all-up').is(':checked')){
			$('.cart-wares').addClass('active');
		}else{
			//判断当前是不是全选按钮
			if(!$(this).val()){
				if($(this).is(':checked')){
					$(this).parents('.cart-wares').addClass('active');
				}else{
					$(this).parents('.cart-wares').removeClass('active');
				}
			}else{
				$('.cart-wares').removeClass('active');
			}
		}
		
		//判断当前选中几件商品
		var cb = document.getElementsByClassName("cart-wares");
		var l = cb.length;
		var num = 0,price = 0.0;
		for(var i=0;i<l;i++){
			if($(cb[i]).is('.active')){
				++num;
				price += parseFloat($(cb[i]).children('.c-total').text().slice(1));
			}
		}
		$('#warse-num').html(num);
		$('#total').html(price.toFixed(2));
	});
	//删除
	$('#del').click(function(e){
		$(this).parents('tr').addClass('undis');
		e.preventDefault();
	});
	
});
