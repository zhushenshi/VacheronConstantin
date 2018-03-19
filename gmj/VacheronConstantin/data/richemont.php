<?php
header("Content-type:application/json");
require_once("init.php");
$res = mysqli_query($conn,"select * from cs_position");
$row = mysqli_fetch_all($res,1);
echo json_encode($row);
?>