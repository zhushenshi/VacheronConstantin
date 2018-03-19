<?php
//多条件搜索产品功能   15:36--15:46
//1:产品名称       lname mac
//2:产品价格下限    low  3000
//3:产品价格上限    high 8000
//1:加载init.php文件
require("01_init.php");
//2:获取数据
//  lname   搜索名称   ""
//  low     下限       0
//  high    上限       21000000
//  pno     当前页码    1
//  pageSize页大小      8
$lname = $_REQUEST["lname"];//搜索产品名称
$low = $_REQUEST["low"];    //产品价格下限
$high = $_REQUEST["high"];  //产品价格上限
$pno = $_REQUEST["pno"];    //页码
$pageSize = $_REQUEST["pageSize"];//页大小
//echo $lname."|".$low."|".$high."|".$pno."|".$pageSize;
//3:判断是否存在 如果参数不存在 默认值
if(!$lname){
  $lname = "";
}
if(!$low){
  $low = 0;
}
if(!$high){
  $high = 210000000;
}
if(!$pno){
  $pno = 1;
}
if(!$pageSize){
  $pageSize = 8;
}
//echo $lname."|".$low.'|'.$high."|";
//echo $pno."|".$pageSize;

//4:创建sql语句并且发送sql语句
//4.1:获取总记录数   % 通配符 表示0个或个多字符
$sql1 =  " SELECT count(lid) as c";
$sql1 .= " FROM xz_laptop ";
$sql1 .= " WHERE lname LIKE '%$lname%' ";
$sql1 .= " AND price >= $low ";
$sql1 .= " AND price <= $high ";
$result = mysqli_query($conn,$sql1);
if(mysqli_error($conn)){
  echo mysqli_error($conn);
}
$row = mysqli_fetch_assoc($result);
//echo "4|".$row["c"];
//4.2:获取当前页内容
//lid,lname,title,price,exire,sm
$offset = ($pno-1)*$pageSize;
$sql2 =  " SELECT x.lid,x.lname,x.title,";
$sql2 .= " x.price,x.expire,p.sm";
$sql2 .= " FROM xz_laptop x,xz_laptop_pic p";
$sql2 .= " WHERE x.lid = p.laptop_id";
$sql2 .= " AND x.lname LIKE '%$lname%'";
$sql2 .= " AND x.price >= $low";
$sql2 .= " AND x.price <= $high";
$sql2 .= " GROUP BY x.lid";
$sql2 .= " LIMIT $offset,$pageSize";
$result = mysqli_query($conn,$sql2);
if(mysqli_error($conn)){
  echo mysqli_error($conn);
}
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);

$output =
["pno"=>$pno,
 "pageSize"=>$pageSize,
 "pageCount"=>ceil($row["c"]/$pageSize),
 "data"=>$rows
];
echo json_encode($output);








//5:$output = pno pageSize data
