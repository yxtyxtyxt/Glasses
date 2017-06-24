$(function(){
	//用户登录
	var user_login=$(".user_login");
	var user_none=$(".user_none");
	var wellcome=$(".wellcome span");
	var leaveBtn=$(".leave span");
	var _dealcookie=new DealCookie();
	if(_dealcookie.readCookie("user")){
		user_login.css("display","none");
		user_none.css("display","block");
		wellcome.html(_dealcookie.readCookie("user"))
	}else{
		user_login.css("display","block");
		user_none.css("display","none");
	}
	leaveBtn.click(function(){
		//_cookie.removeCookie("user");
		//window.location.reload();
		// user_login.css("display","block");
		// user_none.css("display","none");
		window.location.href="html/SignIn.html";
	})	

	var _dealcookie=new DealCookie();
	//购物车数量
	if(_cookie.getCookie("cart")!=null){
		var _proNum=JSON.parse(_dealcookie.readCookie("cart"));
		//console.log(_proNum["1001"]+_proNum["1002"])
		$(".top_car .a_car span,.car_btn span").html(parseInt(_proNum["1001"])+parseInt(_proNum["1002"]));
	}


	$(".car_btn,.top_car .a_car").click(function(){
		if(_cookie.getCookie("user")==null && _cookie.getCookie("pwd")==null){
			alert("请注册！");
			window.open("html/register.html");
		}else{
			window.open("html/pro_car.html");
		}
	})


	//进入个人中心
	$(".myAccount").click(function(){
		if(_cookie.getCookie("user")==null || _cookie.getCookie("pwd")==null){
			alert("请注册！");
			window.open("html/register.html");
		}else{
			window.open("html/usercenter.html");
		}
	})
})

