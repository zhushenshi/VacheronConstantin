<?php 
header("Content-Type:application/json");
require_once("init.php");
@$position=$_REQUEST["position"];
if ($position !== null) {
	$sql = "SELECT * FROM cs_position WHERE position LIKE '%$position%'";
	$result = mysqli_query($conn,$sql);
	$all = mysqli_fetch_all($result,1);
	echo json_encode($all);
}
