<?php
	header("Content-Type:application/json");
	require_once("../init.php");	
	@$wid=$_REQUEST['wid'];
	if($wid){
		$sql="SELECT pid,wid,sm,lg FROM cs_watchs_pic where Wid=$wid ORDER BY pid";
		$result=mysqli_query($conn,$sql);
		$output=mysqli_fetch_all($result,1);
	}
	echo json_encode($output);
?>