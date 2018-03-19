//下拉菜单
$(()=>{
    //opwn下拉菜单单击事件
    $(".welcome_close").click(function(){
        if($(this).html()=="OPEN"){
            // console.log($this);
            $(this).next().css("animation","disc 0.5s linear forwards");
            $(this).html("CLOSE");
        }else{
            $(this).next().css("animation","disc_reverse 0.5s linear forwards");
            $(this).html("OPEN");
        }
    });
    //昵称的正则验证
    $("#uname").blur(function(){
        // console.log(1);
        var tar=$(this).val();
        // console.log(tar);
        var uname=tar;
        // console.log(uname);
        var reg1=/^[\u4e00-\u9fa5_a-zA-Z0-9]{3,10}$/i;
        if(!reg1.test(uname)){
          $(".comfirm_input").show();
        }else{
          $(".comfirm_input").hide();
        }
    })
  //密码的正则验证
    $("#upwd").blur(function(){
        // console.log(2);
        var tar=$(this).val();
        // console.log(this);
        console.log(tar);
        var upwd=tar;
        var reg2=/^[a-zA-Z0-9]{6,16}$/i;
        if(!reg2.test(upwd)){
          $(".comfirm_upwd").show();
        }else{
          $(".comfirm_upwd").hide();
        }
    })
 // log in 单击事件
    $("#login").click(function(){

    });

// create new account单击事件
    $("#register").click(function(){
       location.href="register.html";
    });

// receive a new password单击事件
   $("#find").click(e=>{
       e.preventDefault();
       console.log(1)
       location.href="register.html";
   });

   $('[data-toggle=login_logo]').click(function(){
    location.href = "../index.html";
   });
   $("#login").click(function(){
    location.href = "../index.html";
   })

});

