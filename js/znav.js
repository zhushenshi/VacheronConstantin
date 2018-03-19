/**
 * Created by web-01 on 2018/2/26.
 */
$(()=>{
    //跳转页面函数
    function locaTo(part,country){
        location.href="zsearch.html?part="+part+"&country="+country;
    }
    //主页加载nav
    $("#zbc_forth").load("zbcnav.html",()=>{
        $(".zbc_forth_bot").on("click",".zbc_lititlea",function(e){
            e.preventDefault();
            let country=$(this).html();
            let part=$(e.target).parent().parent().parent().children().first().children().first().children().first().html();
//            console.log(country);
//            console.log(part);
            locaTo(part,country);
        });
        $(".zbc_forth_bot").on("click",".zbc_forth_h3a",function(e){
            e.preventDefault();
            let country="";
            let part=$(e.target).parent().parent().parent().children().first().children().first().children().first().html();
//            console.log(country);
//            console.log(part);
            locaTo(part,country);
        });
    });
});
