<?php
	header("Content-Type:application/json");
	require_once("../init.php");	
	@$fid=$_REQUEST['fid'];
	$output=[];
	if($fid){
		$sql="SELECT wid,watchtitle,wnum,wnumsecond,listpic FROM cs_watchs where fid=$fid";
		$result=mysqli_query($conn,$sql);
		$output["products"]=mysqli_fetch_all($result,1);
		$sql="SELECT fid,fname,ftitle,fpic FROM cs_watchs_family where fid=$fid";
		$result=mysqli_query($conn,$sql);
		$output["series"]=mysqli_fetch_all($result,1)[0];

        $sql="SELECT cs_banner_pic.pid,cs_banner_pic.fid,cs_banner_pic.wid,cs_banner_pic.lg,cs_watchs.watchtitle,cs_watchs.wnum,cs_watchs.wnumsecond FROM cs_banner_pic INNER JOIN cs_watchs ON cs_banner_pic.wid=cs_watchs.wid where cs_banner_pic.fid=$fid";
        $result=mysqli_query($conn,$sql);
        $output["banner"]=mysqli_fetch_all($result,1);
	}
	echo json_encode($output);
?>