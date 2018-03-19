<?php
  #接收前端页面提交过来的数据并插入到数据
     #1.获取请求提交的数据
	    $uname=$_REQUEST["uname"];
		$upwd=$_REQUEST["upwd"];
		$email=$_REQUEST["email"];
		$phone=$_REQUEST["phone"];
		$user_name=$_REQUEST["user_name"];
		$gender=$_REQUEST["gender"];
	 #2.连接到数据库
        require("init.php");
	 #3.拼sql语句并执行
	    $sql="insert into xz_user(uname,upwd,email,phone,user_name,gender)values('$uname','$upwd','$email','$phone','$user_name','$gender')";
		$result=mysqli_query($conn,$sql);
	 #4.根据执行结果给出响应
	    if($result==true){
		   echo "注册成功";
		}else{
		   echo "注册失败";
		}
  
?>