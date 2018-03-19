<?php
	header("Content-Type:application/json");
	require_once("../init.php");	
	@$wid=$_REQUEST['wid'];
	$output=[
//	    product=>{},商品全部信息
//	    pics=>{},商品图片
//	    recommand=>{}商品同款图片和id
	];
	if($wid){
	    //查询数据库中腕表的详细信息    系列的头部图片
		$sql="SELECT * FROM cs_watchs INNER JOIN cs_watchs_family ON cs_watchs.fid=cs_watchs_family.fid  where wid=$wid ";
		$result=mysqli_query($conn,$sql);
		$product=mysqli_fetch_all($result,1)[0];
		$output["product"]=$product;
        //查询数据库中腕表的图片
        $sql="SELECT pid,wid,sm,lg FROM cs_watchs_pic where wid=$wid";
        $result=mysqli_query($conn,$sql);
        $output["pics"]=mysqli_fetch_all($result,1);
        //查询同款推荐表	
		$wnum=$product["wnum"];//同款推荐依据腕表的wnum
        $sql="SELECT  wid,listpic FROM cs_watchs where wnum=$wnum AND wid!=$wid";
        $result=mysqli_query($conn,$sql);
        $output["recommand"]=mysqli_fetch_all($result,1);
        //查询机芯信息
        $cid=$product["cid"];
        $sql="SELECT  cs_caliber.cid,calibertitle,cnum,caliberintro,power,thickness,diameter,partcount,gemcount,frequency,powper,watchshow,authentication,sm FROM cs_caliber LEFT JOIN cs_caliber_pic ON cs_caliber.cid=cs_caliber_pic.cid where cs_caliber.cid=$cid";
        $result=mysqli_query($conn,$sql);
        $output["caliber"]=mysqli_fetch_all($result,1);

	}
	echo json_encode($output);
//	echo json_encode($output["caliber"]);
?>