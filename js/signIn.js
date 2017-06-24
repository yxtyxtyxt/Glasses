
$(function(){
	var user=$(".user");
	var password=$("input[type=password]");
	var Ver_Code_box=$(".Ver_Code_box");
	var Ver_Code=$(".Ver_Code");
	var Ver_Code_value=$(".Ver_Code_value");
	var userTip=$(".user_tip");
	var pwdTip=$(".pwd_tip");
	var Btn=$("input[type=button]");

	//生成验证码
	function fnCheck(){
		var str="";
		for(var i=0;i<4;i++){
			var arr=[];
			arr.push(parseInt(Math.random()*10));
			arr.push(String.fromCharCode(parseInt(Math.random()*26)+97));
			arr.push(String.fromCharCode(parseInt(Math.random()*26)+65));
			str+=arr[parseInt(Math.random()*3)];
		}
		Ver_Code_value.val(str);
	}
	fnCheck();
	Ver_Code_value.click(fnCheck);	

	var _dealcookie=new DealCookie();
	Btn.click(function(){
		if(_dealcookie.readCookie("user")==user.val() && _dealcookie.readCookie("pwd")==password.val() && Ver_Code.val()==Ver_Code_value.val()){
			alert("登陆成功，请点击确认！");
			window.location.href="../index.html";
		}else{
			if(user.val()==""){
				userTip.css("display","block");
				user.css("border","1px solid #ff6600");
				return;
			}else{
				userTip.css("display","none");
				user.css("border","1px solid #ccc");
			}
			if(password.val()==""){
				pwdTip.css("display","block");
				password.css("border","1px solid #ff6600");
			}else{
				pwdTip.css("display","none");
				password.css("border","1px solid #ccc");
			}
			if(user.val()!="" && password.val()!=""){
				Ver_Code_box.css("display","block")
			}
		}	
	})


	//用户登录
	// var user_login=$(".user_login");
	// var user_none=$(".user_none");
	// var wellcome=$(".wellcome span");
	// var leaveBtn=$(".leave span");
	// var _dealcookie=new DealCookie();
	// if(_dealcookie.readCookie("user")){
	// 	user_login.css("display","none");
	// 	user_none.css("display","block");
	// 	wellcome.html(_dealcookie.readCookie("user"))
	// }else{
	// 	user_login.css("display","block");
	// 	user_none.css("display","none");
	// }
	// leaveBtn.click(function(){
	// 	//_cookie.removeCookie("user");
	// 	//window.location.reload();
	// 	user_login.css("display","block");
	// 	user_none.css("display","none");
	// })
})