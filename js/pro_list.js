$(function(){
	$.post("../data/mtpro_list.json",function load(data,textStatus){
		if(textStatus=="success"){
			this.data=window.eval(data);
			var listMain=$("#main");
			var _html="";
			_html+="<div class=\"list_top main_con\"><ul class=\"clearfix\">";
			for(var i=0;i<data["con1"]["imgurl"].length;i++){
				if(i%3==2){
					_html+="<li class=\"clearMargin\"><a href=\"#\"><img src=\""+data["con1"]["imgurl"][i]+"\" alt=\"\"></a></li>";
				}else{
					_html+="<li><a href=\"#\"><img src=\""+data["con1"]["imgurl"][i]+"\" alt=\"\"></a></li>";
				}
			}
			_html+="</ul></div><div class=\"distribution_title main_con\"></div><ul class=\"distribution_pro main_con clearfix\">";
			for(var i=0;i<data["con2"].length;i++){
				_html+="<li><a href=\"#\"><img src=\""+data["con2"][i]["imgurl"]+"\" alt=\"\"></a><span>"+data["con2"][i]["active"]+"</span><p>"+data["con2"][i]["proname"]+"</p><b>￥<span>"+data["con2"][i]["price"]+"</span></b></li>";
			}
			_html+="</ul><div class=\"popular_title main_con\"></div><ul class=\"popular_pro main_con clearfix\">";
			for(var i=0;i<data["con3"].length;i++){
				_html+="<li><a href=\"#\"><img src=\""+data["con3"][i]["imgurl"]+"\" alt=\"\"></a><p>"+data["con3"][i]["proname"]+"</p><span>"+data["con3"][i]["active"]+"</span><b>￥"+data["con3"][i]["price"]+"</b></li>";
			}
			_html+="</ul></div>";
			listMain.html(_html);
			var _dealcookie=new DealCookie();
			$(".distribution_pro li").click(function(){
				_dealcookie.editCookie("product",data["con2"][$(this).index()]["pro_k"],"/",7);
				//console.log(_dealcookie.readCookie("cart"))
				if(_cookie.getCookie("cart")===null){
					_dealcookie.editCookie("cart","{\"1001\":\"0\",\"1002\":\"0\"}","/",7);
					//console.log(1)
				}
				if(_cookie.getCookie("carpro")===null){
					_dealcookie.editCookie("carpro","{\"1001\":{\"imgurl\":\"pro1\",\"proname\":\"强生define美瞳妍妍日抛彩色隐形眼镜30片装-棕色\",\"lightdegree\":\"-1.50\",\"unit_price\":\"185.00\"},\"1002\":{\"imgurl\":\"pro2\",\"proname\":\"安瞳Mandol彩色隐形眼镜日抛30片装- 粉色\",\"lightdegree\":\"-3.50\",\"unit_price\":\"169.00\"}}","/",7);	
				}
				window.open("details.html");
			})
			console.log(_dealcookie.readCookie("cart"))

		}
	},"json")


	//列表二级菜单
	$("#all_pro,.banner_con").mouseover(function(){
		$(".banner_con").css("display","block")
	})
	$("#all_pro,.banner_con").mouseout(function(){
		$(".banner_con").css("display","none")
	})

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
		window.location.href="SignIn.html";
	})


	//购物车数量
	var _dealcookie=new DealCookie();
	if(_cookie.getCookie("cart")!=null){
		var _proNum=JSON.parse(_dealcookie.readCookie("cart"));
		//console.log(_proNum["1001"]+_proNum["1002"])
		$(".top_car .a_car span,.car_btn span").html(parseInt(_proNum["1001"])+parseInt(_proNum["1002"]));
	}

	
	$(".car_btn,.top_car .a_car").click(function(){
		if(_cookie.getCookie("user")==null && _cookie.getCookie("pwd")==null){
			alert("请注册！");
			window.open("register.html");
		}else{
			window.open("pro_car.html");
		}
	})
})

