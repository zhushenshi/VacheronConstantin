<?php
//1:设置响应头格式json
//如果出现下载php错误
//输出 text/html;
header("Content-Type:application/json;charset=utf-8");
//2:连接数据库 xz
$conn = mysqli_connect("127.0.0.1","root","","work",3306);
//3:设置编码为 UTF8
mysqli_query($conn,"SET NAMES UTF8");
