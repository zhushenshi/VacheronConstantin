$(()=>{
   // location.search.split("&")              //["?wid=6", "i=1"]
   //  console.log(location.search.split("&"));
    var wid=location.search.split("&")[0].split("=")[1];
    var index=location.search.split("&")[1].split("=")[1]
    // console.log(wid);
    // console.log(index);
    //获取当前页面前面页面的url
    $.ajax({
        type:"GET",
        url:"data/product/getProductsPicById.php",//大图小图片按照顺序排列
        data:"wid="+wid,
        dataType:"json"
    }).then(data=>{
        // console.log(data);
        var hehe="";
        var html="";
        html+=`<div class="pic-main">
                <a href="javascript:bigImg(0);">
                    <div class="main-product">
                        <img src="${data[0].sm}" alt="">
                    </div>
                </a>
                <div class="pic-btn">
                    <a href="product_details.html?wid=${parseInt(wid)-1};"><img src="img/nav-zoom-product-left.png" alt=""></a>
                    <a href="product_details.html?wid=${parseInt(wid)+1};"><img src="img/nav-zoom-product-right.png" alt=""></a>
                </div>
            </div>`;
        //加载主图之外的小图片
        if(data.length>1){
            html+=`<div class="pic-other">`;
            for(var i=1;i<data.length;i++){
                html+=`<div>
                  <a href="javascript:bigImg(${i});"><img src="${data[i].sm}" alt=""></a>
               </div>`;
            }
            html+=`</div>`;
        };
    $("[data-toggle=imgBox]").html(html);
        //加载大图片
         bigImg=function(index){
             html="";
            html+=`<img src="${data[index].lg}" alt="">`;
             $("[data-toggle=bigImg]").html(html);
             // console.log(data[index].lg);
            // console.log($("[data-toggle=bigImg]").html());
        };
        bigImg(index);
        // 鼠标的移动事件
        var $img=$("[data-toggle=bigImg]");
        $img.mousemove((e)=>{
            //       获取鼠标相对浏览器窗口的位置x,y
            var x=e.clientX,y=e.clientY;
            //       获取当前浏览器窗口的宽度w 高度h
            var w=window.innerWidth,h=window.innerHeight;
            $img.css({left:((w-2000)/w)*x,top:((h-2000)/h)*y})

        });
        // 右侧关闭大图预览图标
        $("[data-toggle=imgClose]").click((e)=>{
            e.preventDefault();
            console.log();
            history.go(-1);
        });
    //       2000*2000
        //          w   h
        //       h/2000
        //       onMouseMove事件  y=0是top=0   x=0时 left=0
        //                               y=h时top=h-2000;//top=-(2000-h)
        //                               x=w时left=x-2000;
    })
})