$(()=>{
    //动态加载页面
    var wid=location.search.split("=")[1];
    $.ajax({
        type:"GET",
        url:"data/product/getProductDetailById.php",//手表的全部信息
        data:"wid="+wid,
        dataType:"json"
    }).then(data=>{
        // console.log(data);
        var product=data.product;
        var pics=data.pics;
        var caliber=data.caliber;
        var recommand=data.recommand;
        //返回系列按钮
        $("#backSeries").html(`            
            <span class="back">
               <a href="product.html?fid=${product.fid}">返回系列</a>
            </span>
        `);
        //详细信息
        var html='';
            //图片
        html+=`<div class="list-show">
                <a href="img_show.html?wid=${product.wid}&i=0">
                    <img src="${pics[0].sm}" alt="">
                </a>
               </div>`;
        html+=`<div class="show-info">
                <ul class="info-ul">
                    <li class="info-series-title"><a href="#">${product.fname}</a></li>
                    <li class="info-title"><h1>${product.watchtitle}</h1></li>
                    <li class="info-number">编号&nbsp;&nbsp;<span>${product.wnum+''+product.wnumsecond}</span></li>`;
        if(product.price){
            html+=`<li class="info-price"><span>￥322,000.00</span></li>
                    <li class="info-price-mess"><p>含税</p><p>参考价格。</p></li>`;
        }else{
            html+=`<li class="info-price-mess price-null"><p>价格应要求提供</p></li>`;
        }
        html+=`<li><img src="img/product/pdg.png" alt=""></li>
                    <li class="info-contact">请联系礼宾部以获取更多资讯</li>
                    <li class="info-tel info-connection">
                        <a href="javascript:;">
                            <i class="lf"></i>
                            <p class="rt">中国  :  400-623-1289</p>
                        </a>
                        <a href="javascript:;" data-toggle="tel-drop"><div class="dropdown"></div></a>
                        <div class="area">
                            <select class="area-select" name="" id="area-select" size="4">
                                <option value="CN">中国  :  400-623-1289</option>
                                <option value="HK">香港  :  +852 8200 1755</option>
                                <option value="HK">香港  :  +852 8200 1755</option>
                                <option value="MO">澳门  :  +853 080 0733</option>
                                <option value="AT">奥地利  :  +43 1 928 1755</option>
                                <option value="BE">比利时  :  +32 2 405 1755</option>
                                <option value="CH">瑞士  :  +41 22 580 1755</option>
                                <option value="DE">德国  :  +49 89 203 03 1755</option>
                                <option value="International">国际  :  +41 41 580 1755</option>
                                <option value="ES">西班牙  :  +34 91 419 1755</option>
                                <option value="FR">法国  :  +33 1 70 70 20 27</option>
                                <option value="GB">英国  :  +44 208 585 1755</option>
                                <option value="IT">意大利  :  +39 023 602 1755</option>
                                <option value="NL">荷兰  :  +31 107 131 889</option>
                                <option value="SE">瑞典  :  +46 856 642 659</option>
                                <option value="JP">日本  :  +81 (0)120-63-1755</option>
                                <option value="US">美国  :  +1 (877) 701-1755</option>
                                <option value="TW">台湾  :  +886 008 0185 6857</option>
                                <option value="SG">新加坡  :  +65 800 852 3656</option>
                                <option value="VN">越南  :  +84 12280284</option>
                                <option value="MY">马来西亚  :  +60 1 800 81 7947</option>
                                <option value="TH">泰国  :  +66 001 800 852 5409</option>
                                <option value="ID">印尼  :  +62 001 803 852 6127</option>
                                <option value="AU">澳大利亚  :  +61 1800 796 452</option>
                            </select>
                        </div>
                    </li>
                    <li class="info-email info-connection">
                        <a href="javascript:;">
                            <i class="lf"></i>
                            <p class="rt">发送电邮</p>
                        </a>
                    </li>
                </ul>
            </div>`;
        html+=`<div class="same-series">
                <ul style="display:flex;justify-content:center;">`;
        if(recommand.length!=0){
            for(var item of recommand){
                html+=`<li><a href="product_details.html?wid=${item.wid}"><img style="width:80px;"src="${item.listpic}" alt=""></a></li>`;
            }
        }
        html+=` </ul>
            </div>`;
        $("[data-toggle=detail]").html(html);
        html="";
        if(pics.length>1){
            html+=`<ul>`;
            for(var i=1;i<pics.length;i++){
               html+=`<li class="lf"><a href="img_show.html?wid=${product.wid}&i=${i}"><img src="${pics[i].sm}" alt=""></a></li>`;
            }
            html+=`</ul>`;
            $("[data-toggle=pics]").html(html);
        }else{
            $("[data-toggle=pics]").hide();
        }
        // console.log(product.fid);
    //    电话的下拉菜单
        var $btn=$("[data-toggle=tel-drop]");
        $btn.click(()=>{
            $btn.next().toggle();
        });
        $("#area-select").click((e)=>{
            e.preventDefault();
            if($(e.target).is("option")){
                $btn.prev().children("p").html($(e.target).html());
                $btn.next().hide();
            }
        });
        //规格表和机芯表展示
        //左边规格信息
        html="";
        html+=`<div class="content">
                <h2>规格</h2>
                <div class="pic-box">
                    <div>
                        <img src="img/specification-picto-automatique.png.resource.1394782485834.png" alt="">
                        <p>自动腕表</p>
                    </div>
                    <div>
                        <img src="img/specification-picto-diametre.png.resource.1394782485836.png" alt="">
                        <p>直径（毫米）：</p>
                        <span>${product.watchdiameter}</span>
                    </div>
                    <div>
                        <img src="img/specification-picto-clasp-ardillon.png.resource.1394782485835.png" alt="">
                        <p>表扣：</p>
                        <span>${product.watchclasp}</span>
                    </div>
                </div>
                <ul>
                    <li><b>编号: </b><span>${product.wnum+'/'+product.wnumsecond}</span></li>
                    <li><b>形状：</b><span>${product.shape}</span></li>
                    <li><b>直径（毫米）： </b><span>${product.watchdiameter}</span></li>
                    <li><b>厚度（毫米）： </b><span>${product.watchthickness}</span></li>
                    <li><b>表壳材质： </b><span>${product.watchcase}</span></li>
                    <li><b>挡板材料： </b><span>${product.watchtailgate}</span></li>
                    <li><b>表冠材质： </b><span>${product.watchcrown}</span></li>
                    <li><b>表盘材质： </b><span>${product.watchdisc}</span></li>
                    <li><b>表底盖： </b><span>${product.watchbottom}</span></li>
                    <li><b>表底盖： </b><span>${product.waterproof}</span></li>                    
                    <li><b>表链材质： </b><span>${product.watchchainmaterial}</span></li>
                    <li><b>表链颜色： </b><span>${product.watchchaincolor}</span></li>
                    <li><b>表扣类型： </b><span>${product.watchclasp}</span></li>
                    <li><b>表扣材质： </b><span>${product.watchclaspmaterial}</span></li>
                    <li><b>特性说明： </b><span>${product.llustrate}</span></li>
                </ul>
                <ul class="more">
                    <li>更多表款</li>
                    <li><a href="#">所有男士表款</a></li>
                    <li><a href="#">所有女士表款</a></li>
                    <li><a href="#">所有复杂功能表款</a></li>
                    <li><a href="#">All our automatic watches</a></li>
                    <li><a href="#">所有手动表款</a></li>
                    <li><a href="#">所有金质表款</a></li>
                    <li><a href="#">所有玫瑰金表款</a></li>
                    <li><a href="#">所有皮表带表款</a></li>
                </ul>
            </div>`;
    $("[data-toggle=spec]").html(html);
        //右边的机芯信息
        html="";
        html+=`<div class="content">
                <h2>1731机芯</h2>
                <ul>
                    <li><b>编号: </b><span>${caliber[0].cnum}</span></li>
                    <li><b>动力: </b><span>${caliber[0].power}</span></li>
                    <li><b>厚度（毫米）: </b><span>${caliber[0].thickness}</span></li>
                    <li><b>直径（毫米）: </b><span>${caliber[0].diameter}</span></li>
                    <li><b>零件数: </b><span>${caliber[0].partcount}</span></li>
                    <li><b>宝石数: </b><span>${caliber[0].gemcount}</span></li>
                    <li><b>震动频率: </b><span>${caliber[0].frequency}</span></li>
                    <li><b>动力存储（小时）: </b><span>${caliber[0].powper}</span></li>
                    <li><b>显示: </b><span>${caliber[0].watchshow}</span></li>
                    <li><b>认证: </b><span>${caliber[0].authentication}</span></li>
                    <li class="link"><a href="#">此机芯涉及的所有工艺</a></li>
                </ul>
                <div class="caliber">
                    <div class="pic-left"><img src="${caliber[0].sm}" alt=""></div>
                    <div class="pic-right"><img src="${caliber[1].sm}" alt=""></div>
                </div>
            </div>`;
        $("[data-toggle=caliber]").html(html);
        // console.log(caliber[0].sm);
    })
})