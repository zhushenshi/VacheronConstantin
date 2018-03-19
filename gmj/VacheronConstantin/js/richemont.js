$(function(){
	/**
	 * 左右移动功能
	 * @param  {[element]} selector1 [消失元素]
	 * @param  {[element]} selector2 [出现元素]
	 * @param  {[number]} moved     [消失元素移动距离，默认为0]
	 */
	function richmove(selector1,selector2,moved){
		if (moved == undefined || typeof moved !== 'number') moved = 0;
		//点击事件触发主内容左移，完成时消失
		$(selector1).animate({
			left: moved
		},()=>{
			$(selector1).hide();
		});
		//左移的同时，职位详细介绍出现，左移
		$(selector2).show().animate({
			left: 0
		});
	}

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
				$('[data-c=seinpost]').addClass('rich_sein').removeClass('rich_seinpost');
				//所在地
				$('[data-toggle=rich_sefp_menu]').click(function(e){
					e.stopPropagation();//
					richmenu('.rich_sefp_menu','li','[data-toggle=rich_sefp]')
				});
			}
		});
		$(document).one('click',function(){
			$(selector1).hide();
		});
	}

	/**
	 * sql查询内容和点击后切换至详情页
	 * @param  {json} data [数据库中查询的数据]
	 */
	function search_kw(data){
		var result = data.reverse();
		var html = '';
		for (var d in result){
			html += `<div class="search_kw_result">
								<div class="search_kw_res_">
									<div>
										<div class="search_kw_date">发布于：
											<span data-toggle="search_kw_date">${result[d].issuetime}</span>
										</div>
										<div class="search_kw_name">
											<h5><a href="${result[d].phref}">${result[d].position}</a></h5>
										</div>
										<div class="search_kw_post">${result[d].belong} - ${result[d].country}</div>
									</div>
									<div>
										<div class="search_kw_fbtn pointer" data-use="first">
											查看具体信息
										</div>
										<span class="none">${result[d].country}</span>
									</div>
								</div>
							</div>`;
		}
		$('[data-toggle=search_result]').html(html);
		$('[data-toggle=richrescount]').html(data.length);
		//搜索区切换至详细介绍区
		$('[data-use=first]').click(function(e){
			$tar = $(e.target);
			richmove('.richmain','.rich_postdesc',-1280);
			for (var d in result){
				if ($tar.next().html() === result[d].country) {
					$('[data-use=post_refercode]').html(result[d].refercode);
					$('[data-use=issuetime]').html(result[d].issuetime);
					$('[data-use=post_name]').html(result[d].position);
					$('[data-use=post_city]').html(result[d].coffice);
					$('[data-use=workingh]').html(result[d].workingh);
				}
			}
		});
	}

	//搜索区切换至登录区
	$('.richnav_login').click(function(){
		richmove('.richmain','.richcon_login',-1280);
		if (!$('.rich_postdesc').is(':hidden')) {
			richmove('.rich_postdesc','.richcon_login',-1280);
		}
	});

	//详细介绍区/登录区域 切换至搜索区
	$('[data-toggle=postgback]').click(function(){
		richmove('.rich_postdesc','.richmain',1280);
		richmove('.richcon_login','.richmain',1280);
	});

	//职能范围
	$('[data-toggle=rich_sef_menu]').click(function(e){
		e.stopPropagation();
		richmenu('.rich_sef_menu','li','[data-toggle=rich_sef]')
	});

	//国家/地区
	$('[data-toggle=rich_sefc_menu]').click(function(e){
		e.stopPropagation();
		richmenu('.rich_sefc_menu','li','[data-toggle=rich_sefc]')
	});

	//全部重置
	$('.rich_sereset').click(function(){
		$('[data-toggle=rich_sef]').val('');
		$('[data-toggle=rich_sefc]').val('');
		$('[data-toggle=rich_sefp]').val('');
		$.getJSON('data/getPositionKw.php',function(data){
			search_kw(data);
		})
	});

	//获取点击输入框焦点事件
	$('[data-toggle=search_kw_input]').focus(function(e){
		$tar = $(e.target);
		$('.search_kw').addClass('search_kw_focus');
		$tar.keyup(function(e){
			if ($tar.val() !== '') {
				$('.search_kw_clear').show();
			}else {
				$('.search_kw_clear').hide();
			}
			if(e.keyCode == 13){//当在键盘上按了回车键时触发
				var kw = $('[data-toggle=search_kw_input]').val();
				//当kw为空的时候，查询的内容是所有，所以不必再写一个判断为空的情况
				$.getJSON('data/getPositionKw.php',{kw:kw},function(data){
					search_kw(data);
				});
				$tar.blur();//触发完毕失去焦点
			}
		});
	}).blur(function(e){
		$tar = $(e.target);
		$('.search_kw').removeClass('search_kw_focus');
		if ($tar.val() !== '') {
			$('.search_kw_clear').show();
		}else {
			$('.search_kw_clear').hide();
		}
	})

	//点击按钮清空输入框
	$('.search_kw_clear').click(function(){
		$('[data-toggle=search_kw_input]').val('');
		$('.search_kw_clear').hide();
		//恢复至搜索前的情况
		$.getJSON('data/richemont.php',function(data){
			search_kw(data);
		});
	})

	//语言class切换
	$('.richlang>span>a').click(function(e){
		$tar = $(e.target);
		$('.richlang>span>a').removeClass('richwhite');
		$tar.addClass('richwhite');
	})

	//接收职位信息按钮
	$('.richmsg_ad_f_click').click(function(e){
		if (false) {
			console.log('已登录');
		}else{
			richmove('.richmain','.richcon_login',-1280);
		}
	})

	//语言栏点击事件，切换class
	$('.richarrows').click(function(){
		if ($(this).attr('class').indexOf('richarrows_rotateopen')!==-1) {
			//关闭
			$(this).addClass('richarrows_rotatedown').removeClass('richarrows_rotateopen');
			$(this).prev().find('a').not('.richwhite').hide();
		}else {
			//打开
			$(this).addClass('richarrows_rotateopen').removeClass('richarrows_rotatedown');
			$(this).prev().find('a').not('.richwhite').show();
		}
	})

	//输入框 搜索关键字
	$('.search_kw_search').click(function(){
		var kw = $('[data-toggle=search_kw_input]').val();
		$.getJSON('data/getPositionKw.php',{kw:kw},function(data){
			search_kw(data);
		})
	});

	//开始搜索按钮 - 全部重置右侧按钮
	$('.rich_beginse').click(function(){
		var country = $('[data-toggle=rich_sefc]').val();//国家地区
		var position = $('[data-toggle=rich_sef]').val();//智能范围
		if (country == 'China') {
			country = '中国'
		}
		if (country !== '' || country !== undefined) {
			$.getJSON('data/getCountryKw.php',{country},function(data){
				search_kw(data);
			})
		}
		if (position !== '' || position !== undefined) {
			$.getJSON('data/getPo.php',{position},function(data){
				search_kw(data);
			})
		}
	});

	//详细介绍区应用按钮事件
	$('[data-toggle=postuse_]').click(function(){
		if(true){
			richmove('.rich_postdesc','.richcon_login',-1280);
		}
	})

	//登录按钮
	$('.rich_log_btn>input').click(function(){
		richmove('.richcon_login','.richmain',1280);
		$('.richnav_login').html('已登录').unbind('click').addClass('richwhite').removeClass('richnav_login');

	});

	//初始化职位所有内容
	$.getJSON('data/richemont.php',function(data){
		search_kw(data);
	});
})