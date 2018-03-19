<?php
require("init.php");
$id = $_REQUEST["id"];
$sql = " SELECT * FROM workwatch where uid =$id";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
// var_dump($row);
echo json_encode($row);

?>