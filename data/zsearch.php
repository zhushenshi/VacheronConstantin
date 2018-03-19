<?php

	header("Content-Type:application/json");
	require_once("zbcinit.php");
//    	echo json_encode(mysqli_fetch_all($result,1));
$part=$_REQUEST['part'];
$country=$_REQUEST['country'];
//$part="亚太";
if($part==="亚太区")
    $part="亚太";
if($country===""){

}

if($country===""){
$sql="SELECT zstorefront,zaddress,zzipcode,zphone,zimgurl,zifsale,zifser,zcountry FROM cs_sale_part where zpname='$part'";
}else{
$sql="SELECT zstorefront,zaddress,zzipcode,zphone,zimgurl,zifsale,zifser,zcountry FROM cs_sale_part where zpname='$part' AND zcountry='$country'";
}

$result=mysqli_query($conn,$sql);
$asd=json_encode(mysqli_fetch_all($result,1));
echo $asd;
