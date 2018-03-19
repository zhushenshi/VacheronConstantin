<?php
header("Content-Type:application/json");
require_once("init.php");
@$kw=$_REQUEST["kw"];

// if ($kw !== null) {
	$sql = "SELECT * FROM cs_position WHERE position LIKE '%$kw%' OR country LIKE '%$kw%' OR city LIKE '%$kw%' OR workingh LIKE '$kw' OR refercode LIKE '$kw' ";
	$result = mysqli_query($conn,$sql);
	$all = mysqli_fetch_all($result,1);
	echo json_encode($all);
// }

// if ($kw === null && $country === null && $position === null) {
// 	$sql = "SELECT * FROM cs_position WHERE position LIKE '%$kw%' OR country LIKE '%$kw%' OR city LIKE '%$kw%' OR workingh LIKE '$kw' OR refercode LIKE '$kw' ";
// 	$result = mysqli_query($conn,$sql);
// 	$all = mysqli_fetch_all($result,1);
// 	echo json_encode($all);
// }


?>