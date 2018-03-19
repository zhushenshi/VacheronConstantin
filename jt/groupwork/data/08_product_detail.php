<?php
//1:加载init.php文件
require("01_init.php");
//2:获取参数lid
$lid = $_REQUEST["lid"];
//echo 1;
//echo $lid;
//3:正则表达式对参数验证
$cPattern = '/^[0-9]{1,10}$/'; //创建正则表达式
if(!preg_match($cPattern,$lid)){    //判断用户输入格式
   echo '{"code":-3,"msg":"参数格式不正确"}';
   exit; //停止php执行
}
//echo 2;
//4:创建sql语句查询数据
//  查询产品名称，价格，编号，规格，售后，图片
//lname,price,lid,spec,promise xz_laptop
//sm                           xz_laptop_pic
//1:表连接
//a:多表名表名保存FROM 后面
//FROM xz_laptop,xz_laptop_pic
//b:每一个表起一个别名
//FROM xz_laptop x,xz_laptop_pic p
//c:查询两张表中不是列之间关系(= < > ..)
//WHERE x.lid = p.laptop_id;

//SELECT x.lname,x.price,x.lid,x.spec,
//       x.promise,p.sm
//FROM xz_laptop x,xz_laptop_pic p
//WHERE x.lid = p.laptop_id
//AND   x.lid = 1
//GROUP BY x.lid;
$sql =  " SELECT x.lname,x.price,x.lid";
$sql .= " ,x.spec,x.promise,p.sm";
$sql .= " FROM xz_laptop x,xz_laptop_pic p";
$sql .= " WHERE x.lid = p.laptop_id";
$sql .= " AND   x.lid = $lid";
$sql .= " GROUP BY x.lid";
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
   echo mysqli_error();
}
$row = mysqli_fetch_assoc($result);
echo json_encode($row);
//5:发送sql并且获取返回结果
