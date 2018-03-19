<?php
    
	header("Content-Type:application/json");
	require_once("zbcinit.php");
//    	echo json_encode(mysqli_fetch_all($result,1));
$part=$_REQUEST['part'];
//$part="亚太";
if($part==="亚太区")
    $part="亚太";
$sql="SELECT pcountry FROM cs_location_city where ppname='$part'";
$result=mysqli_query($conn,$sql);
$asd=json_encode(mysqli_fetch_all($result,1));
echo $asd;
