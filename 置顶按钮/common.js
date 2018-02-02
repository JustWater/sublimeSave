// 置顶 jq
$(function(){
	var toTop = $("#toTop");
	toTop.on('click',function(){
		$("html,body").animate({"scrollTop":0},"fast");
	})
	showHideToTop();
	$(window).scroll(function(){
		showHideToTop();
	})
	function showHideToTop(){
		if ($(window).scrollTop()>100) {
			toTop.show();
		}else{
			toTop.hide();
		}
	}
	// 分页
	var sel = $("#sel");
	var putPageNum = $(".putPageNum");
	for (var i = 1; i < pageAll; i++) {
		var option = $("<option value = "+(i+1)+" class ='chooseOption'>"+(i+1)+"</option>");
		sel.append(option);
	}
	if (pageAll<5) {
		for (var i = 1; i < pageAll; i++) {
			var li = $("<li index="+(i+1)+" class='pageNum'>"+(i+1)+"</li>");
			putPageNum.append(li);
		}
	}else{
		for (var i = 1; i < 5; i++) {
			var li = $("<li index="+(i+1)+" class='pageNum'>"+(i+1)+"</li>");
			putPageNum.append(li);
		}
	}
	pagePosition();
})
//置顶js
// /*window.onload = function(){
// 	var toTop = document.getElementById("toTop");
// 	var timer = null;
// 	/*toTop.onclick=function(){
// 		clearInterval(timer);
// 		timer = setInterval(() => {
// 		  // Todo...
// 		  var scrollTopVal = document.body.scrollTop || document.documentElement.scrollTop;
// 		  if (scrollTopVal>0) {
// 		  	document.body.scrollTop = document.documentElement.scrollTop = scrollTopVal - 50;

// 		  }else{
// 		  	clearInterval(timer);

// 		  }
// 		}, 10);
// 	}*/
// 	toTop.onclick = function(){
// 		clearTimeout(timer);
// 		timer = setTimeout(function fn() {
// 		  // Todo...
// 		  var scrollTopVal = document.body.scrollTop || document.documentElement.scrollTop;
// 		  if (scrollTopVal>0) {
// 		  	document.body.scrollTop = document.documentElement.scrollTop = scrollTopVal - 50;
// 		  	timer = setTimeout(fn,10);
// 		  }else{
// 		  	clearInterval(timer);
// 		  }
// 		}, 10)
// 	}
// 	/*toTop.onclick = function(){
// 		cancelAnimationFrame(timer);
// 		timer = requestAnimationFrame(function fn(){
// 			var scrollTopVal = document.body.scrollTop || document.documentElement.scrollTop;
// 			if (scrollTopVal > 0) {
// 				document.body.scrollTop = document.documentElement.scrollTop = scrollTopVal - 50;
// 				timer = requestAnimationFrame(fn);
// 			}else{
// 				cancelAnimationFrame(timer);
// 			}
// 		})
// 	}*/
// 	showHideToTop();
// 	function showHideToTop(){
// 		var scrollTopVal = document.body.scrollTop || document.documentElement.scrollTop;
// 		if (scrollTopVal>100) {
// 			toTop.style.display="block";
// 		}else{
// 			toTop.style.display = "none";
// 		}
// 	}
// 	document.onscroll = function(){
// 		showHideToTop();
// 	}
// }*/


// 提示框
function showMask(type,mes){
	var timer = null;
	var oDiv = $('<div class="mask"><div class="maskContent"><i></i><span></span></div></div>');
	$("body").append(oDiv);
	var documentHeight = $(document).height();
	$(".mask").css("height",documentHeight);
	if (type == 'warning') {
		$('.maskContent i').addClass('icon1');
	}
	else if (type == 'success') {
		$('.maskContent i').addClass('icon2');
	}
	else if (type == 'error') {
		$('.maskContent i').addClass('icon3');
	}
	$('.maskContent span').text(mes);
	oDiv.fadeIn();
	timer = setTimeout(() => {
		oDiv.remove();
	}, 1200);
}

// 分页
$(document).on('click','#paging',function(e){
	var obj = e.target || e.srcElement;
	switch(obj.className || obj.id){
		case 'pageFirst':
		comeFirst(1,0);
		break;
		case 'pageLast':
		comeFirst(pageAll,1);
		break;
		case 'pagePrev':
		prevPage();
		break;
		case 'pageNext':
		nextPage();
		break;
		case 'pageNum':
		pageBtn($(obj).attr("index"));
		break;
		case 'turnTo':
		turnToPage();
	}
})
// 首页、尾页
function comeFirst(Index,num){
	$(".pageNum").removeClass("on");
	if (pageAll <= 5) {
		$(".paging").find('*[index='+Index+']').addClass("on");
	}else{
				/*if (num==0) {
					var firstNumIndex = parseInt($("#pagePrev").next().attr("index"));
					if(firstNumIndex == Index){
						$(".paging").find('*[index='+Index+']').addClass("on");
					}else{
						$(".pageNum").remove();
						for (var i = Index; i < Index+5; i++) {
							var li = $("<li index="+i+" class='pageNum'>"+i+"</li>");
							$("#pageNext").before(li);
						}
						$(".paging").find('*[index='+Index+']').addClass("on");
					}
				}else{
					var lastNumIndex = parseInt($("#pageNext").prev().attr("index"));
					if(lastNumIndex == Index){
						$(".paging").find('*[index='+Index+']').addClass("on");
					}else{
						$(".pageNum").remove();
						for(var j = Index-5; j < Index; j++){
							var jIn = j+1;
							var li = $("<li index="+jIn+" class='pageNum'>"+jIn+"</li>");
							$("#pageNext").before(li);

						}
						$(".paging").find('*[index='+Index+']').addClass("on");
					}
				}*/
				var index = $(".pageNum").eq(2).attr("index");
				if(index-2 == Index || index+2 == Index){
					$(".paging").find('*[index='+Index+']').addClass("on");
				}else{
					if(num == 0){
						index = Index+2;
					}else{
						index = Index-2;
					}
					$(".pageNum").remove();
					for (var i = index+1; i < index+3; i++) {
						var li = $("<li index="+i+" class='pageNum'>"+i+"</li>");
						$(".putPageNum").append(li);
					}
					for (var j = index; j > index-3; j--) {
						var li = $("<li index="+j+" class='pageNum'>"+j+"</li>");
						$(".putPageNum").prepend(li);
					}
				}
				$(".paging").find('*[index='+Index+']').addClass("on");
			}
			showHidePage(Index);
		}
//上一页
function prevPage(){
	var index = parseInt($(".paging").find(".on").attr("index"));
	if (index != 1) {
		if ($(".pageNum:first").hasClass("on")) {
			$(".pageNum").remove();
			for (var i = index-1; i <index-1+5; i++) {
				var li = $("<li index="+i+" class='pageNum'>"+i+"</li>");
				$(".putPageNum").append(li);
			}
		}else{
			$(".pageNum").removeClass("on");
		}
		$(".paging").find('*[index='+(index-1)+']').addClass("on");
	}
	showHidePage(index-1);
}
//下一页
function nextPage(){
	var index = parseInt($(".paging").find(".on").attr("index"));
	if (index != pageAll) {
		if ($(".pageNum:last").hasClass("on")) {
			$(".pageNum").remove();
			for(var i = index + 1 ; i > index + 1-5 ; i--){
				var li = $("<li index="+i+" class='pageNum'>"+i+"</li>");
				$(".putPageNum").prepend(li);
			}
		}else{
			$(".pageNum").removeClass("on");
		}
		$(".paging").find('*[index='+(index+1)+']').addClass("on");
	}
	showHidePage(index+1);

}
//页码切换
function pageBtn(index){
	$(".pageNum").removeClass("on");
	$(".paging").find("*[index = "+index+"]").addClass("on");
	showHidePage(index);
}
//上一页、下一页显示隐藏
function showHidePage(index){
	if (index == 1) {
		$("#pagePrev").hide();
		$("#pageNext").show();
	}
	if(index >1 && index < pageAll){
		$("#pagePrev").show();
		$("#pageNext").show();
	}
	if(index == pageAll){
		$("#pagePrev").show();
		$("#pageNext").hide();
	}
	pagePosition();
}

//页面跳转
function turnToPage(){
	var selectOption = parseInt($('#sel option:selected').val());  
	var firstNumIndex = parseInt($(".pageNum:first").attr("index"));
	var lastNumIndex = parseInt($(".pageNum:last").attr("index"));
	if(selectOption>lastNumIndex){
		$(".pageNum").remove();
		for (var i = selectOption; i > selectOption - 5; i--) {
			var li = $("<li index="+i+" class='pageNum'>"+i+"</li>");
			$(".putPageNum").prepend(li);
		}
		$(".paging").find('*[index='+selectOption+']').addClass("on");
	}else if(selectOption < firstNumIndex){
		$(".pageNum").remove();
		for (var i = selectOption; i < selectOption + 5; i++) {
			var li = $("<li index="+i+" class='pageNum'>"+i+"</li>");
			$(".putPageNum").append(li);
		}
		$(".paging").find('*[index='+selectOption+']').addClass("on");
	}
	pageBtn(selectOption);
}
//分页位置
function pagePosition(){
	var pageWidthHalf = parseInt($("#paging").width()/2);
	$("#paging").css({"margin-left":-pageWidthHalf+'px'})
}