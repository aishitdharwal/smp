$(document).ready(function(){
	$(".open").click(function(){
		$(".menu").css("bottom","0");
		$(".col").css("bottom","0");
		$(".menu_list li").fadeIn();
	});
	$(".Close").click(function(){
		$(".menu").css("bottom","80vh");
		$(".menu_list li").fadeOut();
	});
	$(".feedback_close").click(function(){
		$(".feedback").css("display","none");
	});
});