$(()=>{
	// $(".grid").on("click","img",e=>{
	// 	var id=$(e.target).data("id");
		// alert(id);
		var lid=location.search.split("=")[1];
		$.get({type:"get",url:"data/intr.php",data:"id="+lid}).then(data=>{
				var span = data[3];
				var spans=span.split(",");
				var groupspans ="";
				console.log(spans);
				for (var i = 0; i < spans.length; i++) {
					groupspans+=
					`<span>${spans[i]}</span>`;
				}
				console.log(groupspans);
				// location="intr.html";
				document.querySelector("h3")
						.innerHTML=data[1];
				document.querySelector(".span")
						.innerHTML=groupspans;
						console.log(data[2]);
				$(".intr").css("backgroundImage","url("+data[2]+")");
				console.log(data[0]);
			})
})


