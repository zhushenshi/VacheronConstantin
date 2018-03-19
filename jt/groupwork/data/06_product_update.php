<?php
session_start();
//*1:加载init.php 文件
require("01_init.php");
//*2:获取二个参数:
//  lid   产品编号
//  price 产品价格
$lid = $_REQUEST["lid"];
$price = $_REQUEST["price"];
//echo $lid;
//echo $price;
//*3:正则表达式表达式验证
$lidpattern = '/^[0-9]{1,10}$/'; //创建正则表达式
if(!preg_match($lidpattern,$lid)){    //判断用户输入格式
   echo '{"code":-3,"msg":"产品编号参数不正确"}';
   exit; //停止php执行
}
$ppattern = '/^[0-9]{1,10}(.[0-9]{1,2})?$/'; //创建正则表达式
if(!preg_match($ppattern,$price)){    //判断用户输入格式
   echo '{"code":-3,"msg":"产品价格参数不正确"}';
   exit; //停止php执行
}
//echo $lid;   //17:26--17:28
//echo $price;
//4:更新产品表价格
$sql =  " UPDATE xz_laptop SET price=$price";
$sql .= " WHERE lid=$lid";
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
  echo mysqli_error($conn);
}

//5:创建sql语句发送语句并且判断
//6:向日志表中添加一条记录
$ip =    $_SERVER["REMOTE_ADDR"];
$uid =   $_SESSION["uid"];
$sql1 =  " INSERT INTO t_log VALUES(";
$sql1 .= " null,$uid,'update',now(),'update product price $ip')";
$result = mysqli_query($conn,$sql1);
echo '{"code":1,"msg":"更新成功"}';