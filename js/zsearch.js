/**
 * Created by web-01 on 2018/2/27.
 */
$(()=>{
    let loc=location.href;
    let ln1=loc.length;
    let ln2=loc.indexOf("?");
    let uri=decodeURI(loc.substr(ln2+1,ln1-ln2));
    // console.log(uri);
    let ln3=uri.length;
    let ln4=uri.indexOf("=",5);
    let lpart=uri.substr(5,ln4-13);
    let lcountry=decodeURI(uri.substr(ln4+1,ln3-ln4));
    // console.log(lpart);
    // console.log(lcountry);
    // 跳转返回主页
    function locback() {
        location.href=encodeURI("zindex.html");
    }
    $.ajax({
        type:"POST",
        url:"data/zsearch.php",
        data:{part:lpart,country:lcountry},
        success:function(data){
            console.log(data);
            let html3="";
            html3+=`<span>
                        <a href="#">${lpart}</a>`;
            if(lcountry===""){
                html3+="";
            }else{
                html3+="/";
            }
            html3+=`${lcountry}
                    </span>
                    -
                    <span class="bold">
                        ${data.length} 结果
                    </span>`;
            $("#zbc_ssecond_titlespan").html(html3);
            let html1="",html2="";
            let zmd=0,lss=0,fwzx=0;
            for(let p of data){
                // console.log(p.zifser);
                if(p.zifsale==="1"){
                    zmd++;
                    html1+=`<div class="zbc_thir_div" data-fwzx="${p.zifser}" data-zmd="1">
                        <div class="zbc_thir_divbody">
                            <div class="zbc_thir_firdiv clearfix">
                                <div class="zbc_thir_smhead">
                                    <span class="zbc_input_pic zbc_zmd_pic"></span>  专卖店
                                </div>
                                <div class="zbc_thir_smhead">`;
                    if(p.zifser==="1"){
                        html1+=`<span class="zbc_input_pic zbc_fwzx_pic"></span>  服务中心`;
                        fwzx++;
                    }
                    html1+=`</div>
                            </div>
                            <div class="zbc_thir_secdiv">
                                <img src="${p.zimgurl}" alt="" class="zbc_thir_img">
                            </div>
                            <div class="zbc_thir_thirdiv">
                                ${p.zstorefront}
                                <div class="zbc_after_pic"></div>
                            </div>
                            <div class="zbc_thir_fordiv">
                                <div class="zbc_fordiv_left">
                                    <div class="zbc_fordiv_style2 zbc_marg1">地址</div>
                                    <div class="zbc_fordiv_style1">${p.zaddress}</div>
                                    <div class="zbc_fordiv_style1">${p.zzipcode}</div>
                                    <div class="zbc_fordiv_style1">${p.zcountry}</div>
                                    <div><br></div>
                                    <div>  Phone:<a href="#" class="zbc_fordiv_style2">${p.zphone
                        } </a></div>
                                    <div><br></div>
                                    <div class="zbc_fordiv_final"><span class="zbc_for_span"></span>  打印</div>
                                </div>
                                <div class="zbc_fordiv_left">
                                    <h5 class="zbc_fordiv_h5 zbc_marg1 zbc_fordiv_style2">营业时间：</h5>
                                    <table class="zbc_forth_table">
                                        <tr class="zbc_tr">
                                            <td>星期一</td>
                                            <td>10:00 - 22:00</td>
                                        </tr>
                                        <tr class="zbc_tr">
                                            <td>星期二</td>
                                            <td>10:00 - 22:00</td>
                                        </tr>
                                        <tr class="zbc_tr">
                                            <td>星期三</td>
                                            <td>10:00 - 22:00</td>
                                        </tr>
                                        <tr class="zbc_tr">
                                            <td>星期四</td>
                                            <td>10:00 - 22:00</td>
                                        </tr>
                                        <tr class="zbc_tr">
                                            <td>星期五</td>
                                            <td>10:00 - 22:00</td>
                                        </tr>
                                        <tr class="zbc_tr">
                                            <td>星期六</td>
                                            <td>10:00 - 22:00</td>
                                        </tr>
                                        <tr class="zbc_tr">
                                            <td>星期日</td>
                                            <td>10:00 - 22:00</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <a class="zbc_fif_search" href="#">
                                探索
                            </a>
                        </div>
                    </div>`;
                }
                else if(p.zifsale==="2"){
                    console.log();
                    lss++;
                    html2+=`<div class="zbc_thir_divtwo" data-zmd="0">
                        <div class="zbc_thir_divbody2">
                            <div class="zbc_thir_firdiv clearfix zbc_thirtwo_bg">
                                <div class="zbc_thir_smhead2">
                                    <span class="zbc_input_pic zbc_zmd_pic"></span>  授权零售商
                                </div>
                            </div>
                            <div class="zbc_thir_thirdiv2">
                                ${p.zstorefront}
                                <div class="zbc_after_pic"></div>
                            </div>
                            <div class="zbc_thir_fordiv">
                                <div class="zbc_fordiv_left">
                                    <div class="zbc_marg1">地址</div>
                                    <div class="zbc_fordiv_style1">${p.zaddress}</div>
                                    <div class="zbc_fordiv_style1">${p.zzipcode}</div>
                                </div>
                                <div class="zbc_fordiv_left">
                                    <div>Phone:<a href="#" class="zbc_white">${p.phone} </a></div>
                                </div>
                                <div class="zbc_fordiv_final zbc_white"><span class="zbc_for_span"></span> 打印</div>
                            </div>
                            <a class="zbc_fif_search2" href="#">
                                探索
                            </a>
                        </div>
                    </div>`;
                }
            }
            let html="";
            html+=`<div class="zbc_input_div zbc_zmd_div">
                        <label for="zbc_zmd_input" class="zbc_zmd_label" id="zbc_nav_zmc">
                        <span class="zbc_input_pic zbc_zmd_pic " id="zbc_nav_zmdspan"></span>
                        <input type="checkbox" id="zbc_zmd_input" checked>
                        专卖店(<span>${zmd}</span>)</label>
                    </div>
                    <div class="zbc_input_div zbc_zmd_div">
                        <label for="zbc_sqlxs_input" class="zbc_zmd_label">
                            <span class="zbc_input_pic zbc_sqlxs_pic"></span>
                            <input type="checkbox" id="zbc_sqlxs_input" checked>
                            授权零售商(<span>${lss}</span>)</label>
                    </div>
                    <div class="zbc_input_div zbc_fwzx_div">
                        <label for="zbc_fwzx_input" class="zbc_zmd_label">
                            <span class="zbc_input_pic zbc_fwzx_pic"></span>
                            <input type="checkbox" id="zbc_fwzx_input" checked>
                            服务中心(<span>${fwzx}</span>)</label>
                    </div>`;
            $("#zbc_ssec_navl").html(html);
            $("#zbc_thir_zmd").html(html1);
            $("#zbc_thir_lss").html(html2);
            let zbc_zmd_chose=1;
            /*checkbox控制显示隐藏*/
            $("#zbc_zmd_input").change(function(){
                if($("#zbc_zmd_input").is(':checked')) {
                    // console.log("1");
                    zbc_zmd_chose=1;
                    $("[data-zmd=1]").removeClass("hidden");
                }
                else if(!$("#zbc_zmd_input").is(':checked')){
                    // console.log("2");
                    zbc_zmd_chose=0;
                    $("[data-zmd=1]").addClass("hidden");
                }
            });
            $("#zbc_sqlxs_input").change(function(){
                if($("#zbc_sqlxs_input").is(':checked')) {
                    $("[data-zmd=0]").removeClass("hidden");
                }
                else if(!$("#zbc_sqlxs_input").is(':checked')){
                    $("[data-zmd=0]").addClass("hidden");
                }
            });
            $("#zbc_fwzx_input").change(function(){
                console.log($("#zbc_fwzx_input").is(':checked'));
                if(zbc_zmd_chose===1){
                    if($("#zbc_fwzx_input").is(':checked')) {
                        if($("[data-fwzx=0]").hasClass("hidden"))
                        $("[data-fwzx=0]").removeClass("hidden");
                    }
                    else if(!$("#zbc_fwzx_input").is(':checked')){
                        if(!$("[data-fwzx=0]").hasClass("hidden"))
                        $("[data-fwzx=0]").addClass("hidden");
                    }
                }else{
                    if($("#zbc_fwzx_input").is(':checked')){
                        if($("[data-fwzx=1]").hasClass("hidden"))
                        $("[data-fwzx=1]").removeClass("hidden");
                    }else{
                        if(!$("[data-fwzx=1]").hasClass("hidden"))
                            $("[data-fwzx=1]").addClass("hidden");
                    }
                }
            });
            if(zmd+lss+fwzx===0){
                alert("没有找到相应销售点");
                locback();
            }
        },
        error:function(){alert("网络错误！");}
    });
    $(".zbc_btn").click(e=>{
        e.preventDefault();
    });
    $("#zbc_btn_small").click(function(e){
        e.preventDefault();
        locback();
    });
});
