$(function(){
	/**
	 * 显示和隐藏
	 * @param  {[element]} selector1 [需要显示/隐藏的元素]
	 * @param  {[element]} selector2 [在显示元素层级下需要获取数据的元素]
	 * @param  {[element]} selector3 [需要插入数据的元素]
	 */
	function richmenu(selector1,selector2,selector3){
		$(selector1).show();
		$(selector1).find(selector2).click(function(e){
			$(selector3).val($(e.target).html());
			if ($('[data-toggle=rich_sef]').val() !== '' && $('[data-toggle=rich_sefc]').val() !== '') {
				$('[data-c=seinpost]').addClass('rich_sein').removeClass('rich_seinpost')
			}
		});
		$(document).one('click',function(){
			$(selector1).hide();
		});
	}

	var wayPhone = [
		{country:'中国',week:'星期一-星期日',duration:'上午10时-下午7时',condition:'节假日除外'},
		{country:'香港',week:'星期一 - 星期五',duration:'上午10时 - 下午7时',condition:''},
		{country:'澳门',week:'星期一 - 星期五',duration:'上午10时 - 下午7时',condition:''},
		{country:'奥地利',week:'星期一 - 星期五',duration:'上午9时 - 下午7时 (GMT+1)',condition:'星期六 上午9时 - 下午5时 (GMT+1)'},
		{country:'比利时',week:'星期一 - 星期五',duration:'上午9时 - 下午7时 (GMT+1)',condition:'星期六 上午9时 - 下午5时 (GMT+1)'}
		// {country:'中国',week:'星期一-星期日',duration:'上午10时-下午7时',condition:'节假日除外'},
		// {country:'中国',week:'星期一-星期日',duration:'上午10时-下午7时',condition:'节假日除外'},
		// {country:'中国',week:'星期一-星期日',duration:'上午10时-下午7时',condition:'节假日除外'},
		// {country:'中国',week:'星期一-星期日',duration:'上午10时-下午7时',condition:'节假日除外'}
	];

	//通过电话联系方式下拉菜单
	$('.way_phone').click(function(e){
		e.stopPropagation();
		$('.phone_menu').show();
		$('.phone_menu_li').click(function(){
			$('.phone_menu_li').unbind('click');
			let pmsg = $(this).text().replace(/[:]\s/,':').split(':');
			console.log(pmsg)
			$('[data-toggle=waycontray]').html(pmsg[0]);
			$('[data-toggle=wayphone]').html(pmsg[1]);
			for(var wp in wayPhone){
				if (wayPhone[wp].country === pmsg[0]) {
					$('[data-toggle=way_week]').html(wayPhone[wp].week);
					$('[data-toggle=way_duration]').html(wayPhone[wp].duration);
					$('[data-toggle=way_condition]').html(wayPhone[wp].condition);
				}
			}
			
		})
		// $('[data-toggle=waycontray_menu]').
		$(document).one('click',function(){
			$('.phone_menu').hide();
		});
	})
})