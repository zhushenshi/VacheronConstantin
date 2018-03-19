/**
 * Created by web-01 on 2018/2/28.
 */
$(()=>{
    //昵称的正则验证
    $("#uname").blur(function(){
        // console.log(1);
        var tar=$(this).val();
        // console.log(tar);
        var uname=tar;
        // console.log(uname);
        var reg1=/^[\u4e00-\u9fa5_a-zA-Z0-9]{5,10}$/i;
        // console.log(reg1);
        if(!reg1.test(uname)){
            // $("#uname").parent().prev().show();
            $("#uname").next().next().show();
            console.log(1);
            // $(".fl_span").show();
        }else{
            // $("#uname").parent().prev().hide();
            $("#uname").next().next().hide();
            // console.log(2);
        }
    });
    //邮箱的正则验证
    $(".email").blur(e=>{
        var tar=$(e.target);
        var email=tar.val();
        //console.log(tar,email);
        var reg2=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        //console.log();
        if(!reg2.test(email)){
            $(".email").next().next().show();
        }else{
            $(".email").next().next().hide();
        }
    });
    //密码的正则验证--失去焦点事件
    $("#form_input1").blur(function(){
        // console.log(2);
        var tar=$(this).val();
        // console.log(this);
        // console.log(tar);
        var upwd=tar;
        var reg3=/^[a-zA-Z0-9]{6,16}$/i;
        if(!reg3.test(upwd)){
            $(".p_style1").show();
        }else{
            $(".p_style1").hide();
        }
    });
    //密码框获取焦点事件
    $("#form_input1").focus(function(){
        // console.log(2);
        var tar=$(this).val();
        // console.log(this);
        // console.log(tar);
        $(".confirm_content").show();
    });
    //确认密码的正则验证
    $("#sure").bind("input",function(e){
        var tar=$(e.target).val();
        // console.log(this);
        //console.log(tar==$("#form_input1").val());
        $(".p_style").show();
        if(tar==$("#form_input1").val()) {
            // console.log(3);
            $(".p_style span").html("yes");
        }
    });
    //密码框获取焦点时事件
    $("#form_input1").bind("input",function(e){
        var tar=$(e.target).val();
        var reg=/^[a-z]+$/;
        var reg1=/^[0-9]+$/;
        // var reg2=/^[\,\.\?\!]+$/;
        //console.log(tar);
        if(tar.length>=6){
          $(".word_1").css("display","none");
        }
        for(var i=0;i<tar.length;i++){
            var c=tar.charAt(i);
            // console.log(c);
            if(c>'A'&& c<'Z'){
                $(".word_3").css("display","none");
                break;
            }
        }
        if(reg.test(tar)){
            $(".word_2").css("display","none");
        }
        if(reg1.test(tar)){
            $(".word_4").css("display","none");
        }
        // if(reg2.test(tar)){
        //     $(".word_5").css("display","none");
        // }
        //监听密码输入框，一旦输入的密码符合要求，就将密码框的对应文本变色
        //密码 至少8个字符.{6,}，大写和小写字母([a-z]+)([A-Z]+)，至少一个字母或一个符号([a-zA-Z_#@]+)
        //是数字，标点符号
        // var upwdReg1 = /^.{6,}$/;
        // var upwdReg2 = /(([a-z]+)([A-Z]+)([0-9]+))/;
        // var upwdReg3 = /^([0-9a-zA-Z_#@]+)$/;
        // var upwdReg5=/^[\,\.\?\!]+$/;
        // if((upwdReg1.test(tar))&&!(upwdReg2.test(tar))&&!(upwdReg3.test(tar))&&!(upwdReg4.test(tar))&&!(upwdReg5.test(tar))){
        //   console.log(1);
        //    $(".progress_color").css("width","20%");
        //    $(".weak").html("弱");
        // }
        var upwdReg1 = /^.{6,}$/;
        var upwdReg2 = /(([a-z]+)([A-Z]+)([0-9]+))/;
        var upwdReg3 = /^([0-9a-zA-Z_#@]+)$/;
        var upwdReg4=/^[\,\.\?\!]+$/;
        if((upwdReg1.test(tar)&&!upwdReg2.test(tar)&&!upwdReg3.test(tar))||(!upwdReg1.test(tar)&&upwdReg2.test(tar)&&!upwdReg3.test(tar))||(!upwdReg1.test(tar)&&!upwdReg2.test(tar)&&upwdReg3.test(tar))){
            $(".progress_color").css("width","30%");
            $(".weak").html("Weak");
        }
        else if((upwdReg1.test(tar)&&upwdReg2.test(tar)&&!upwdReg3.test(tar))||(upwdReg1.test(tar)&&upwdReg3.test(tar)&&!upwdReg2.test(tar))||(upwdReg2.test(tar)&&upwdReg3.test(tar)&&!upwdReg1.test(tar))){
            $(".progress_color").css("width","60%");
            $(".weak").html("Medium");
        }else if(upwdReg1.test(tar)&&upwdReg2.test(tar)&&upwdReg3.test(tar)){
            $(".progress_color").css("width","100%");
            $(".weak").html("Strong");
        }else{
            $(".progress_color").css("width",0);
            $(".weak").html("Weak");
        }


    });
    //姓氏失去焦点事件
    $("#first_input").blur(function(){
        // console.log(1);
        var tar=$(this).val();
        // console.log(this);
        //  console.log(tar);
        if(!tar){
            $(".l_style").show();
        }else{
            $(".l_style").hide();
        }
     });
    //名字失去焦点事件
    $("#last_input").blur(function(){
        var tar=$(this).val();
        // console.log(this);
        //  console.log(tar);
        if(!tar){
            $(".l_style1").show();
        }else{
            $(".l_style1").hide();
        }
    });
    //地址失去焦点事件
    $("#add_input").blur(function(){
        var tar=$(this).val();
        // console.log(tar);
        var adress=tar;
        var reg4=/^[\u4e00-\u9fa5a-zA-Z0-9]{5,10}$/i;
        if(!reg4.test(adress)){
            $(".adr").show();
        }else{
            $(".adr").hide();
        }
    });
 //性别单击事件
    // $(".dropdown").click(function(e){
    //     // console.log(1);
    //     var startHeight=$(this).height;
    //     // console.log(startHeight);
    //     $(this).css("height","auto");
    //     var autoHeight=$(this).height;
    //     console.log(autoHeight);
    //     // $(".dropdown-menu")
    //     $(e.target).children().last().height(startHeight).animate({height: autoHeight}, 300);
    //     // $(e.target).children().last().css("height","300px");
    //
    // })

   //复选框选中事件
    $("#checkbox").change(function(){
            if(!$("#checkbox").is(':checked')){
                $(".I_style").show();
            }else{
                $(".I_style").hide();
            }
        });

    //logo图片-a链接跳转
    $(".header_img").click(function(){
        location.href = "../index.html";
    });
   //尾部图片1-a链接跳转
    $(".footer_pucture").click(function(){
        location.href = "../index.html";
    });
    //尾部图片2-a链接跳转
    $(".footer_pucture2").click(function(){
        location.href = "login.html";
    });
    //尾部图片3-a链接跳转
    $(".footer_font").click(function(){
        location.href = "register.html";
    });
   //下拉菜单点击事件1
    $(".dropdown>a").click(function(e){
        // console.log(1);
        var tar=$(e.target);
        // var tar1=$()
        console.log(tar);
        if(tar.next().height()==0){
            tar.next().css({
                height:"auto",
                cursor:"pointer"
            });
        }else{
            tar.next().css("height",0);
        }
    })
    //下拉菜单点击事件2
    $(".dropdown-menu>li").click(function(e){
        var tar=$(e.target);

        tar.parent().prev().html(tar.html());


    })

    //表单提交事件
    $("#btnRegister").click(function(e) {
        e.preventDefault();
        var puanduan = true;
        var uname = $("#uname").val();
        var email = $(".email").val();
        var upwd = $("#form_input1").val();
        var cofirmUpwd = $("#sure").val();
        var fristName = $("#first_input").val();
        var lastName = $("#last_input").val();
        var address = $("#add_input").val();
        var checkbox = $("#checkbox").val();
        if (uname == null||uname == ""){
            console.log("用户名不能为空");
            $("#uname").next().next().show();
            $(".confirm").show();
            puanduan = false;
        } else {
            $("#uname").next().next().hide();
            puanduan = true;
        }
        if (email == null||email == ""){
            console.log("邮箱不能为空");
            $(".email").next().next().show();
            $(".confirm").show();
            puanduan = false;
        } else {
            $(".email").next().next().hide();
            puanduan = true;
        }
        if (upwd == null||upwd == ""){
            console.log("密码不能为空");
            $(".p_style1").show();
            $(".confirm").show();
            puanduan = false;
        } else {
            $(".p_style1").hide();
            puanduan = true;
        }
        if (cofirmUpwd == null||cofirmUpwd == ""){
            console.log("密码不能为空");
            $(".confirm_content").show();
            $(".confirm").show();
            puanduan = false;
        } else {
            $(".confirm_content").hide();
            puanduan = true;
        }
        if (fristName == null||fristName == ""){
            console.log("姓氏不能为空");
            $(".l_style").show();
            $(".confirm").show();
            puanduan = false;
        } else {
            $(".l_style").hide();
            puanduan = true;
        }
        if (lastName == null || lastName == "") {
            console.log("名字不能为空");
            $(".l_style1").show();
            $(".confirm").show();
            puanduan = false;
        } else {
            $(".l_style1").hide();
            puanduan = true;
        }
        if (address == null||address == ""){
            console.log("地址不能为空");
            $(".adr").show();
            $(".confirm").show();
            puanduan = false;
        } else {
            $(".adr").hide();
            puanduan = true;
        }
        if (!$("#checkbox").is(':checked')){
            console.log("复选框未选中");
            $(".I_style").show();
            $(".confirm").show();
            puanduan = false;
        } else {
            $(".I_style").hide();
            puanduan = true;
        }
        if (puanduan) {
            location.href = 'login.html';
        }
    })
   //进度条的显示





});