<?php
 require("01_init.php");
 //依据产品编号获取产品详细信息
 //lid
 $lid = $_REQUEST["lid"];
 $lidPattern = '/^[0-9]{1,5}$/';
 if(!preg_match($lidPattern,$lid)){    //判断用户输入格式
   echo '{"code":-1,"msg":"参数不正确"}';
   exit; //停止php执行
 }
 //lid,title,lname,price,spec,category
 $sql =  " SELECT lid,title,lname,price,spec,category";
 $sql .= " FROM xz_laptop WHERE lid = $lid";
 if(mysqli_error($conn)){
   echo mysqli_error($conn);
 }



 //发送json字符串
 $result = mysqli_query($conn,$sql);
 $row = mysqli_fetch_assoc($result);
 echo json_encode($row);
 ?>