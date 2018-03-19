<?php
   #1.接收客户端提交过来的数据
     $n=$_REQUEST["uname"];
	 $p=$_REQUEST["upwd"];
   #2.连接到数据库
     require("init.php");
   #3.执行SQL语句
     $sql="select * from xz_user where uname='$n' and upwd='$p'";
	 $result=mysqli_query($conn,$sql);
   #4.判断执行结果
     if($result==false){
	    echo "SQL执行失败";
	 }else{
	    $user=mysqli_fetch_row($result);
		if($user==null){
		   echo "用户名或密码错误";
		}else{
		   echo "登录成功！";
		}
	 }
?>