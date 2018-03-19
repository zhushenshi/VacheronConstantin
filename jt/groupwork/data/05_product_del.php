<?php
session_start();
//1:设置响应数据格式json
//2:连接数据库，设置编码
require("01_init.php");
//3:获取参数 lid
$lid = $_REQUEST["lid"];
$cPattern = '/^[0-9]{1,10}$/'; //创建正则表达式
if(!preg_match($cPattern,$lid)){    //判断用户输入格式
   echo '{"code":-3,"msg":"参数有误"}';
   exit; //停止php执行
}
//4:创建正则表达式验证 必须数字 1-10
//5:删除
//  UPDATE xz_laptop SET expire ='1'
$sql =  " UPDATE xz_laptop SET ";
$sql .= " expire = '1'";
$sql .= " WHERE lid = $lid";
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
  echo mysqli_error($conn);
}
if(mysqli_affected_rows($conn) == 0){
     echo '{"code":-4,"msg":"更新失败"}';
     exit; //停止php执行
}
//6:发送sql语句并且判断返回结果
//7:记录系统日志表
//   id    编号
//   uid   用户编号
//   opt   操作 UPDATE
//   opttime 操作时间
//   desct   UPDATE 表 ip
//将session中uid保存系统日志表中
$uid = $_SESSION["uid"];
$ip = $_SERVER["REMOTE_ADDR"];
$sql1 =  " INSERT INTO t_log VALUES(";
$sql1 .= " null,$uid,'UPDATE',now(),";
$sql1 .= " 'xz_laptop $ip')";
$result = mysqli_query($conn,$sql1);
if(mysqli_error($conn)){
  echo mysqli_error($conn);
}
echo '{"code":1,"msg":"删除成功"}';



