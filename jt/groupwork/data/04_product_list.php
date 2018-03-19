<?php
//1:加载数据库连接
require("01_init.php");
//2:获取二个参数 pno  pageSize
$pno = $_REQUEST["pno"];//当前页码
$pageSize = $_REQUEST["pageSize"];//页大小
//3:正则表达式验证
$pnoPattern = '/^[0-9]{1,5}$/';
//echo "1";
if(!preg_match($pnoPattern,$pno)){    //判断用户输入格式
   echo '{"code":-1,"msg":"页码格式不正确"}';
   exit; //停止php执行
}
if($pno<1){
 $pno = 1;
}
if(!preg_match($pnoPattern,$pageSize)){    //判断用户输入格式
   echo '{"code":-2,"msg":"页大小格式不正确"}';
   exit; //停止php执行
}
//echo "3";
if($pageSize<1){
 $pageSize = 8;
}
//echo $pageSize;
//4:获取当前产品数据记录数 xz_laptop
$sql1 = "SELECT count(lid) as c FROM xz_laptop";
$result = mysqli_query($conn,$sql1);
$row = mysqli_fetch_row($result);
if(mysqli_error($conn)){
  echo mysqli_error($conn);
}
//echo ":".$row[0];
$pageCount = ceil($row[0]/$pageSize);
//5:获取当前页产品内容    lid,lname,title,price
$offset = ($pno-1)*$pageSize;
$sql2 =  " SELECT lid,lname,price,category,spec,expire FROM ";
$sql2 .= " xz_laptop ORDER BY lid";
$sql2 .= " LIMIT $offset,$pageSize";
$result = mysqli_query($conn,$sql2);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
if(mysqli_error($conn)){
  echo mysqli_error($conn);
}

//var_dump($rows);
//6:创建json数据发送   11:32--11:37 调试错误
$output =
 [
  "pno"=>$pno,
  "pageSize"=>$pageSize,
  "pageCount"=>$pageCount,
  "data"=>$rows
 ];
echo json_encode($output);
?>