$(()=>{
    // 快速搜索和高级搜索
    let $fastTitle=$(".zbc_search_title_left");
    let $seniorTitle=$(".zbc_search_title_middle");
    let $locateTitle=$(".zbc_search_title_right");
    let $fast=$(".zbc_fast_search");
    let $senior=$(".zbc_senior_search");
    $fastTitle.click((e)=>{
        e.preventDefault();
        $fastTitle.children().first().addClass("zbc_btn_hover");
        $fastTitle.siblings().children().first().removeClass("zbc_btn_hover");
        $fast.removeClass("hidden").addClass("show");
        $fast.siblings().removeClass("show").addClass("hidden");
    });
    $seniorTitle.click((e)=>{
        e.preventDefault();
        $seniorTitle.children().addClass("zbc_btn_hover");
        $seniorTitle.siblings().children().first().removeClass("zbc_btn_hover");
        $senior.removeClass("hidden").addClass("show");
        $senior.siblings().removeClass("show").addClass("hidden");
    });
    $locateTitle.click((e)=>{
        e.preventDefault();
    });

    let $fsPart=$("#parta");
    let $part=$("#part");
    let $partList=$("#partList");
    let $partLi=$("#partList>ul>li");

    let $country=$("#country1");
    let $countryList=$("#countryList");

    let $city=$("#city");
    let $cityList=$("#cityList");
    let $p1=$("#zbc_fastsearch_partdiv1");
    let $p2=$("#zbc_fastsearch_partdiv2");
    let $p3=$("#zbc_fastsearch_partdiv3");
    let $p4=$("#zbc_fastsearch_partdiv4");
    let $p5=$("#zbc_fastsearch_partdiv5");
    let $p6=$("#zbc_fastsearch_partdiv6");
    function clearPart(){
        $part.val("");
        $("#countryList").html("")
            .addClass("hidden");
        clearcountry();
    }
    function clearcountry(){
        $country.val("");
        showv($p3,$p4);
        $("#country1").addClass("zbc_input_chose");
        $("#cityList").html("")
            .addClass("hidden");
        clearcity();
    }
    function clearcity(){
        $city.val("");

        showv($p5,$p6);
        $("#city").addClass("zbc_input_chose");
    }

    function showx(p1,p2){
        p2.removeClass("hidden").addClass("show");
        p1.removeClass("show").addClass("hidden");
    }
    function showv(p1,p2){
        p1.removeClass("hidden").addClass("show");
        p2.removeClass("show").addClass("hidden");
    }

    //消除重复数据
    function deRepeatpart(data){
        let newArr=[],obj={},index=0;
        for(let p of data){
            if(obj[p.pcountry]===undefined){
                obj[p.pcountry]=1;
                newArr[index++]=p.pcountry;
            }
        }
        return newArr;
    }
    function deRepeatcity(data){
        let newArr=[],obj={},index=0;
        for(let p of data){
            if(obj[p.pcity]===undefined){
                obj[p.pcity]=1;
                newArr[index++]=p.pcity;
            }
        }
        return newArr;
    }

    // part的ajax请求
    function ajaxPart(){
        let part=$part.val();
        $.ajax({
            type:"POST",
            url:"data/zpart.php",
            data:{part:part},
            success:function(data){
                data=deRepeatpart(data);
                // console.log(data.length);
                if(data.length===0)
                    return;
                // console.log(data);
                let html="";
                html+=`<ul class="zbc_country_ul">`;
                for(let i=0;i<data.length;i++){
                    html+=`<li>${data[i]}</li>`;
                }
                html+=`</ul>`;

                $("#countryList").html(html);
                $("#country1").removeClass("zbc_input_chose");
                /*第二个*/
                $("#countrya").click((e)=>{
                    e.preventDefault();
                    // console.log($country.val());
                    if($country.val()){
                        showv($p3,$p4);
                        clearcountry();
                        $country.removeClass("zbc_input_chose");
                        return;
                    }
                    if($countryList.hasClass("hidden"))
                        $countryList.removeClass("hidden");
                    else
                        $countryList.addClass("hidden");
                    // $country.addClass("zbc_input_chose");
                });
                /*国家和地区input框监听事件*/
                $part.on('input propertychange',function(){
                    // console.log($part.val());
                    if($country.val()){
                        showx($p3,$p4);
                        $country.addClass("zbc_input_chose");
                        // ajaxPart();
                    }else{
                        showv($p1,$p2);
                        clearcountry();
                        $city.removeClass("zbc_input_chose");
                    }
                });
                /*第二个下拉框点击事件*/
                let $countryLi=$(".zbc_country_ul>li");
                $countryLi.click((e)=>{
                    e.preventDefault();
                    if(!$country.val()){
                        showx($p3,$p4);
                    }
                    $country.val($(e.target).html());
                    // console.log($(e.target).html());
                    $countryList.addClass("hidden");
                    $country.addClass("zbc_input_chose");
                    // ajaxcountry();
                    let ajaxpart=$part.val();
                    let ajaxcount=$country.val();
                    // console.log(ajaxpart,ajaxcount);
                    $.ajax({
                        type: "POST",
                        url: "data/zcountry.php",
                        data: {part:ajaxpart,country: ajaxcount},
                        success: function (data) {
                            data=deRepeatcity(data);
                            // console.log(data.length);
                            if(data.length===0)
                                return;
                            console.log(data);
                            let html="";
                            html+=`<ul class="zbc_city_ul">`;
                            for(let i=0;i<data.length;i++){
                                html+=`<li>${data[i]}</li>`;
                            }
                            html+=`</ul>`;
                            // console.log(html);
                            $("#cityList").html(html);
                            $("#city").removeClass("zbc_input_chose");
                            /*第三个*/
                            $("#citya").click((e)=>{
                                e.preventDefault();
                                console.log($city.val());
                                if($city.val()){
                                    showv($p5,$p6);
                                    clearcity();
                                    $city.removeClass("zbc_input_chose");
                                    return;
                                }
                                if($cityList.hasClass("hidden"))
                                    $cityList.removeClass("hidden");
                                else
                                    $cityList.addClass("hidden");
                                // $country.addClass("zbc_input_chose");
                            });
                            let $cityLi=$(".zbc_city_ul>li");
                            $cityLi.click((e)=> {
                                e.preventDefault();
                                if (!$city.val()) {
                                    showx($p5, $p6);
                                }
                                $city.val($(e.target).html());
                                // console.log($(e.target).html());
                                $cityList.addClass("hidden");
                                $city.addClass("zbc_input_chose");
                            });
                        },
                        error: function () {
                            alert("网络故障，请检查");
                        }
                    });
                });
            },
            error:function(){
                alert("网络故障，请检查");
            }
        });
    }
    /*第一个*/
    // 下拉框按钮点击事件
    $fsPart.click((e)=>{
        e.preventDefault();
        if($part.val()){
            showv($p1,$p2);
            clearPart();
            $part.removeClass("zbc_input_chose");
            return;
        }
        if($partList.hasClass("hidden"))
            $partList.removeClass("hidden");
        else
            $partList.addClass("hidden");
    });
    // 下拉框li点击事件
    $partLi.click((e)=>{
        // console.log($part.val()===null);
        e.preventDefault();
        if(!$part.val()){
            showx($p1,$p2);
        }
        $part.val($(e.target).html());
        $partList.addClass("hidden");
        $part.addClass("zbc_input_chose");
        ajaxPart();
    });

    // $part.on('input propertychange',function(){
    //     console.log($part.val());
    //     if($part.val()){
    //         showx($p1,$p2);
    //         $part.addClass("zbc_input_chose");
    //         ajaxPart();
    //     }else{
    //         showv($p1,$p2);
    //         clearPart();
    //         $part.removeClass("zbc_input_chose");
    //         $("#countryList").addClass("hidden");
    //     }
    // });
    $("#zbc_highsearch").click((e)=>{
        e.preventDefault();
        let hrefpart=$part.val();
        let hrefcountry=$country.val();
        if(hrefpart===""){
            console.log(1);
            return;
        }
        location.href=encodeURI("zsearch.html?part="+hrefpart+"&country="+hrefcountry);
    })
});
