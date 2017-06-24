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
		window.location.href="SignIn.html";
	})	


	//列表二级菜单
	$("#all_pro,.banner_con").mouseover(function(){
		$(".banner_con").css("display","block")
	})
	$("#all_pro,.banner_con").mouseout(function(){
		$(".banner_con").css("display","none")
	})


	//tap切换
	$(".account_title").click(function(){
		$(".account_right1").css("display","block");
		$(".account_right2").css("display","none");
	})
	$(".change_pwd").click(function(){
		//console.log(1)
		$(".account_right1").css("display","none");
		$(".account_right2").css("display","block");	
	})



	var oldPwd=$("input[name=old_pwd]");
	var newPwd=$("input[name=new_pwd]");
	var reNewPwd=$("input[name=re_pwd]");
	var btn=$(".sure_btn")
	var tip1=$(".tip1");
	var tip2=$(".tip2");
	var tip3=$(".tip3");
	var errorTip=$(".error_tip");
	var closeTip=$(".tip_title i");


	var reg=/^[a-z0-9_-]{6,12}$/;
	var _dealcookie=new DealCookie();

	oldPwd.blur(function(){
		if(reg.test(oldPwd.val())==false){
			tip1.css("display","block");
			tip1.html("<i></i>密码长度6-12位！");
		}else{
			tip1.css("display","none");
		}
	})
	newPwd.blur(function(){
		if(oldPwd.val()=="" && newPwd.val()=="" || oldPwd.val()==newPwd.val()){
			tip2.css("display","block");
			tip2.html("<i></i>新密码不能与旧密码相同！");
		}else if(reg.test(newPwd.val())==false && oldPwd.val()!=newPwd.val() && newPwd.val()!=""){
			tip2.css("display","block");
			tip2.html("<i></i>密码长度6-12位！");
		}else{
			tip2.css("display","none");
		}
	})

	btn.click(function(){
		if(reNewPwd.val()!=newPwd.val()){
			tip1.css("display","block");
			tip1.html("<i></i>密码长度6-12位！");
		}else{
			tip1.css("display","none");
		}
		if(reg.test(oldPwd.val())==false){
			tip1.css("display","block");
			tip1.html("<i></i>密码长度6-12位！");
		}else{
			tip1.css("display","none");
		}
		if(oldPwd.val()=="" && newPwd.val()=="" || oldPwd.val()==newPwd.val()){
			tip2.css("display","block");
			tip2.html("<i></i>新密码不能与旧密码相同！");
		}else if(reg.test(newPwd.val())==false && oldPwd.val()!=newPwd.val() && newPwd.val()!=""){
			tip2.css("display","block");
			tip2.html("<i></i>密码长度6-12位！");
		}else{
			tip2.css("display","none");
		}
		if(oldPwd.val()!=_dealcookie.readCookie("pwd") && reg.test(oldPwd.val())==true && reg.test(newPwd.val())==true && oldPwd.val()!=newPwd.val() && newPwd.val()==reNewPwd.val()){
			errorTip.css("display","block");
		}else{
			_dealcookie.editCookie("pwd",newPwd.val(),"/",7);
			alert("密码修改成功，请重新登录！");
			window.location.href="SignIn.html"
		}

		closeTip.click(function(){
			errorTip.css("display","none");
		})
	})







})