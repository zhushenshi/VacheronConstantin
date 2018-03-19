$(()=>{
    //获取请求参数
    var search=location.search.slice(1,);
    //动态加载页面
    $.ajax({
        type:"GET",
        url:"data/product/getProductsByFid.php",//手表的全部信息
        data:search,
        dataType:"json"
    }).then(data=>{
        var products=data.products;
        var series=data.series;
        var banner=data.banner;
        console.log(products);
        // console.log(series);
        // console.log(banner);
        var html=""
        html+=`<div class="banner-img">
				<img src="${series.fpic}" alt="">
			</div>
			<div class="banner-intro">
				<div class="banner-text">
						<h1>${series.fname}</h1>
						<p>"${series.ftitle}"
						</p>
				</div>
			</div>`;
        $("#banner").html(html);
        //小广告轮播图设置
        //加载小广告轮播
        html="";

        function loadbanner(banner){
            html+=`<li class="products-lg lf"style="position:relative;">`;
                if(banner.length!=0){
                    html+=`			<ul class="lg-list" data-toogle="lg-list">`;
                    for(var i=0;i<banner.length;i++){
                        html+=`<li class="lg-li">
								<a href="product_details.html?wid=${banner[i].wid}">
									<div class="lg-img-box">
										<img src="${banner[i].lg}" alt=""/>
										<div class="logo"><img src="img/product/highlight-poincon.png" alt=""/></div>
									</div>
									<div class="lg-text-box">
										<h2 class="product-title">${banner[i].watchtitle}</h2>
										<span class="product-code">{ ${banner[i].wnum+"/"+banner[i].wnumsecond} }</span>
										<div class="search"><span>探索</span></div>
									</div>
								</a>
							</li>`;

                    }
                    html+=` 		</ul>`;
                    if(banner.length>1){
                        html+=`    <div class="circleInds" data-toogle="circleInds">
							<span style=""></span>
							<span style=""></span>
							<span style=""></span>
						</div>`;
                    }
                };
            html+=`</li>`;
            return html;
        };
        //for循环遍历加载商品列表
        function loadproducts(products){
            html="";
            if(products.length>0){
                for(var i=0;i<products.length;i++){
                    html+=`<li class="products-sm lf">
						<a href="product_details.html?wid=${products[i].wid}">
							<div class="sm-img-box">
								<img src="${products[i].listpic}" alt=""/>
								<div class="logo"><img src="img/product/result-picto_poincon.png" alt=""/></div>
							</div>
							<div class="sm-text-box">
								<i>——————</i>
								<h2 class="product-title">${products[i].watchtitle}</h2>
								<span class="product-code">{${products[i].wnum+"/"+products[i].wnumsecond}}</span>

								<div class="over">
									<div class="search"><span>探索</span></div>
								</div>
							</div>

						</a>
					</li>`
                }
            }else{
                html+=`<li class="notfound">没有符合您搜索条件的产品</li>`;
            }
            return html;
        };
        $("[data-toggle=products_show]").html(loadbanner(banner)+loadproducts(products));
            // 小广告轮播的事件设置
            var $ul= $("[data-toogle=lg-list]");
            var $div=$("[data-toogle=circleInds]");
            var $circleInds=$("[data-toogle=circleInds]");
            var moved=0;
            var timer=null;
            function move(){
                if(moved==3)moved=0;
                var $tar=$ul.children(`:eq(${moved})`);
                //$tar.children().children(".lg-img-box").removeClass("hover");
                $tar.siblings().fadeOut(300,function(){$(this).children().children(".lg-img-box").removeClass("hover");});
                $tar.fadeIn(500)
                    .children().children(".lg-img-box").addClass("hover");
                $div.children(`:eq(${moved})`).addClass("hover")
                    .siblings().removeClass("hover");
            }
            move();
            timer=setInterval(()=>{
                moved++;
                move();
            },2000);
            //鼠标hover暂停动画
            $ul.parent().hover(
                ()=>clearInterval(timer),
                ()=>{timer=setInterval(
                    ()=>{
                        moved++;
                        move();
                    },2000);
                }
            );
            //小圆点事件
            $circleInds.on("mouseenter","span",e=>{
                moved=$(e.target).index();
                $ul.children().stop(true);
                move();
            });
        //筛选搜索结果的checkbox事件
        $('input[type=checkbox]').click(function(e){
            //设置checkebox只能单选
            // $(this).prop('checked',false);
            // console.log($(this).prop('checked'));
            if($(this).prop('checked')){
                //如果当前元素点击后被选中
                $('input[type=checkbox]').prop('checked',false);
                $(this).prop('checked',true);
                if($(this).prop('id')=='isNew'){
                    products=products;
                    products=[products[1],products[3],products[2],products[6],products[5],products[7],products[4]];
                }
                if($(this).prop('id')=='women'){
                    products=[];
                }
                if($(this).prop('id')=='complex'){
                    products=products;
                    products=[];
                }
                if($(this).prop('id')=='auto'){
                    products=products;
                }
                if($(this).prop('id')=='manual'){
                    products=[];
                }
                if($(this).prop('id')=='gem'){
                    products=[];
                }
                // $("[data-toggle=products_show]").html("");
                $("[data-toggle=products_show]").html(loadproducts(products));
            }else{
                //当前元素点击取消选中
                $("[data-toggle=products_show]").html("");
                 $("[data-toggle=products_show]").html(loadbanner(banner)+loadproducts(products));
                 //需要优化
                history.go(0);
                //
            }
            // console.log($(this).prop('id'));


        });
    })
});