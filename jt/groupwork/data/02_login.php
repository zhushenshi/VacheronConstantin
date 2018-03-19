<?php
//02_login.php
session_start();
require("01_init.php");
//4:获取二个参数 uname upwd
$uname = $_REQUEST["uname"];
$upwd = $_REQUEST["upwd"];
$code = $_REQUEST["code"];  //获取用户输入验证码
$cPattern = '/^[a-z]{4}$/'; //创建正则表达式
if(!preg_match($cPattern,$code)){    //判断用户输入格式
   echo '{"code":-3,"msg":"验证码格式不正确"}';
   exit; //停止php执行
}
//$_SESSION['code'];全小写验证表达式
if($code != $_SESSION['code']){
    echo '{"code":-4,"msg":"验证码错误，请重试"}';
    exit; //停止php执行
}
//4.1 创建二个变量保存正则表达式验证用户名密码格式
//4.2 创建用户名正则表达式  字母数字3,12
$uPattern = '/^[a-zA-Z0-9]{3,12}$/';
//4.3 验证用户名
if(!preg_match($uPattern,$uname)){
  //4.4 输出出错提示
  echo '{"code":-2,"msg":"用户名格式不正确"}';
  exit; //停止php执行
}
if(!preg_match($uPattern,$upwd)){
  //4.4 输出出错提示
  echo '{"code":-2,"msg":"密码格式不正确"}';
  exit; //停止php执行
}
//5:创建sql语句##注意大小写
//如果出现如下错误:原因sql语法写错了!
//expects parameter 1 to be mysqli_result
$sql = " SELECT uid FROM t_admin";
$sql .=" WHERE uname='$uname' AND";
$sql .=" upwd=md5('$upwd')";
//6:发送sql语句
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
//6.1 判断sql语句是否有错
if(mysqli_error($conn)){
   echo mysqli_error($conn);
}
//7:获取数据库返回结果
//8:判断返回结果
//9:依据结果发送json格式数据
//10:向操作日志表添加一条记录
//11:创建sql INSERT

//客户编号，如果操作用户不存在值为0
$uid = ($row[0] == null) ? 0 : $row[0];
//客户IP地址
$ip = $_SERVER["REMOTE_ADDR"];
//记录操作信息
$rs = "login success  $uname ip:$ip";
if($row == null){
$rs = "login error    $uname ip:$ip";
}

$sql1 =  " INSERT INTO t_log VALUES(";
$sql1 .= " null,$uid,'login',now(),'$rs')";
$result = mysqli_query($conn,$sql1);
//12:记录 uid opt opttime desc
if($row==null){
  echo '{"code":-1,"msg":"用户名或密码有误"}';
}else{
  echo '{"code":1,"msg":"登录成功"}';
  //登录成功将用户编号保存session
  $_SESSION["uid"] = $row[0];
}
?>