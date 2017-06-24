	
$(function(){
	//进入个人中心
	$(".myAccount").click(function(){
		if(_cookie.getCookie("user")==null || _cookie.getCookie("pwd")==null){
			alert("请注册！");
			window.open("register.html");
		}else{
			window.open("usercenter.html");
		}
	})
})

	