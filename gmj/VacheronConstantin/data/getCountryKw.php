<?php 
header("Content-Type:application/json");
require_once("init.php");
@$country=$_REQUEST["country"];
if ($country !== null) {
	$sql = "SELECT * FROM cs_position WHERE country LIKE '%$country%'";
	$result = mysqli_query($conn,$sql);
	$all = mysqli_fetch_all($result,1);
	echo json_encode($all);
}
