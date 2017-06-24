$(function(){
	var _dealcookie=new DealCookie();
	var _procookie=JSON.parse(_dealcookie.readCookie("carpro"));
	var _proNum=JSON.parse(_dealcookie.readCookie("cart"));
	console.log(_proNum)
	//console.log(_proNum)
	// console.log(_procookie)
	var car_ul=$(".car_pro_con");
	for(var k in _proNum){
		//console.log(1)

		//加载第一个产品
		if(k==="1001"){

			if(_proNum[k]!=0){	
				var oLi=document.createElement("li");
				var _html="";
				//console.log(k)
				oLi.className="clearfix";
				oLi.id="pro1";
				_html+="<a href=\"#\"><img src=\"../images/carImg/"+_procookie[k]["imgurl"]+".jpg\" alt=\"\"></a><p><a href=\"#\">"+_procookie[k]["proname"]+"</a></p><div class=\"change_parameter\"><span>光度:"+_procookie[k]["lightdegree"]+"</span><b>修改</b><i></i></div><div class=\"change_num\"><div class=\"subtraction common\">-</div><input class=\"ipt ipt1\" type=\"text\" value=\""+_proNum[k]+"\"/><div class=\"plus common\">+</div></div><div class=\"unit_price\">￥"+_procookie[k]["unit_price"]+"<div class=\"youhui\">促销优惠<i class=\"sanjiao\"></i><div class=\"youhui_con\"><i></i><p>赠品牌润眼液15ML</p><br/><i></i><p>100积分抵扣1元，最高抵扣10元</p></div></div></div><div class=\"total_price total_price1\">￥<span>185</span>.00</div><div class=\"operation\"><a href=\"#\">加入收藏夹</a><p class=\"p1\">删除</p></div>";
				oLi.innerHTML=_html;
				car_ul.append(oLi);
				//计算总价1
				var num1=JSON.parse(_dealcookie.readCookie("cart"))["1001"];
				$(".ipt1").val(num1);
				$(".total_price1").find("span").html(_procookie[k]["unit_price"]*num1)
			}
			//删除产品1
			$(".operation .p1").click(function(){
				//console.log(1)
				$(this).parent().parent().remove();
				//删除产品1后计算总价
				$(".gj_jg span,.settlement_left span").html(parseInt($(".total_price2").find("span").html()));
				var _str="{";
				_str+="\"1001\":0,\"1002\":"+parseInt(JSON.parse(_dealcookie.readCookie("cart"))["1002"]);
				_str+="}"
				_dealcookie.editCookie("cart",_str,"/",7);
				window.location.reload(true);
				//console.log(_str)
			})
		
		}
		//加载第二个产品
		if(k==="1002"){
			//console.log(_proNum[k])
			if(_proNum[k]!=0){
				//console.log(k)
				var oLi=document.createElement("li");
				var _html="";
				oLi.className="clearfix";
				oLi.id="pro2";
				_html+="<a href=\"#\"><img src=\"../images/carImg/"+_procookie[k]["imgurl"]+".jpg\" alt=\"\"></a><p><a href=\"#\">"+_procookie[k]["proname"]+"</a></p><div class=\"change_parameter\"><span>光度:"+_procookie[k]["lightdegree"]+"</span><b>修改</b><i></i></div><div class=\"change_num\"><div class=\"subtraction common\">-</div><input class=\"ipt ipt2\" type=\"text\" value=\""+_proNum[k]+"\"/><div class=\"plus common\">+</div></div><div class=\"unit_price\">￥"+_procookie[k]["unit_price"]+"<div class=\"youhui\">促销优惠<i class=\"sanjiao\"></i><div class=\"youhui_con\"><i></i><p>赠品牌润眼液15ML</p><br/><i></i><p>100积分抵扣1元，最高抵扣10元</p></div></div></div><div class=\"total_price total_price2\">￥<span>169</span>.00</div><div class=\"operation\"><a href=\"#\">加入收藏夹</a><p class=\"p2\">删除</p></div>";
				oLi.innerHTML=_html;
				//console.log(oLi)
				car_ul.append(oLi);
				//计算总价2
				var num2=JSON.parse(_dealcookie.readCookie("cart"))["1002"];
				$(".ipt2").val(num2);
				$(".total_price2").find("span").html(_procookie[k]["unit_price"]*num2);
			}
			//删除产品2
			$(".operation .p2").click(function(){
				
				$(this).parent().parent().remove();
				//删除产品2计算总价
				$(".gj_jg span,.settlement_left span").html(parseInt($(".total_price1").find("span").html()));
				var _str="{";
				_str+="\"1001\":"+parseInt(JSON.parse(_dealcookie.readCookie("cart"))["1001"])+",\"1002\":0";
				_str+="}"
				//console.log(_str)
				_dealcookie.editCookie("cart",_str,"/",7);
				window.location.reload(true);
			})		
		}
		// $(".operation p").click(function(){
		// 	$(this).parent().parent().remove();
		// })
	}

	//计算总价
	function totalPrice(){
		if(_proNum["1001"]==0 && _proNum["1002"]!=0){
			$(".gj_jg span,.settlement_left span").html(parseInt($(".total_price2").find("span").html()));
		}else if(_proNum["1002"]==0 && _proNum["1001"]!=0){
			$(".gj_jg span,.settlement_left span").html(parseInt($(".total_price1").find("span").html()));
		}else if(_proNum["1002"]==0 && _proNum["1001"]==0){
			$(".gj_jg span,.settlement_left span").html("0.00")
		}else{
			$(".gj_jg span,.settlement_left span").html(parseInt($(".total_price1").find("span").html())+parseInt($(".total_price2").find("span").html()));
		}
	}
	totalPrice();


	$(".top_car .a_car span").html(_proNum["1001"]+_proNum["1002"]);



	//进入订单页
	$(".settlement_btn").click(function(){
		window.location.href="order.html";
	})


	//商品数量
	$(".gj_num span").html(parseInt($("ipt1").val())+parseInt($("ipt2").val()));


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




	var _num1=$(".ipt1").val();
	var _num2=$(".ipt2").val();
	//数量++
	$(".plus").click(function(){
		
		var _str="{";
		if($(this).parent().parent()[0].id=="pro1"){
			_num1++;
			if(document.getElementById("pro2")){
				_str+="\"1001\":"+_num1+",\"1002\":"+$(".ipt2").val();
			}else{
				_str+="\"1001\":"+_num1+",\"1002\":0";
			}
			
			$(this).parent().find(".ipt").val(parseInt(_num1));
			$(this).parent().parent().find(".total_price").find("span").html(_procookie["1001"]["unit_price"]*_num1);
		}else{
			_num2++;
			if(document.getElementById("pro1")){
				_str+="\"1001\":"+$(".ipt1").val()+",\"1002\":"+_num2;
			}else{
				_str+="\"1001\":0,\"1002\":"+_num2;	
			}
			
			$(this).parent().find(".ipt").val(parseInt(_num2));
			$(this).parent().parent().find(".total_price").find("span").html(_procookie["1002"]["unit_price"]*_num2);
		}
		_str+="}";
		_dealcookie.editCookie("cart",_str,"/",7);
		totalPrice();
	})


	//数量--
	$(".subtraction").click(function(){

		var _str="{";
		if($(this).parent().parent()[0].id=="pro1"){
			if(_num1<1){
				_num1=1;
			}else{
				_num1--;
			}
			if(document.getElementById("pro2")){
				_str+="\"1001\":"+_num1+",\"1002\":"+$(".ipt2").val();
			}else{
				_str+="\"1001\":"+_num1+",\"1002\":0";
			}
			$(this).parent().find(".ipt").val(parseInt(_num1));
			$(this).parent().parent().find(".total_price").find("span").html(_procookie[k]["unit_price"]*_num1);
		}else{
			if(_num2<=1){
				_num2=1;
			}else{
				_num2--;
			}
			if(document.getElementById("pro1")){
				_str+="\"1001\":"+$(".ipt1").val()+",\"1002\":"+_num2;
			}else{
				_str+="\"1001\":0,\"1002\":"+_num2;
			}
			$(this).parent().find(".ipt").val(parseInt(_num2));
			$(this).parent().parent().find(".total_price").find("span").html(_procookie[k]["unit_price"]*_num2);
		}
		_str+="}";
		_dealcookie.editCookie("cart",_str,"/",7);
		totalPrice();
	})

	

	//商品数量
	console.log()
	if(document.getElementById("pro1") && document.getElementById("pro2")){
		$(".gj_num span").html=parseInt($(".ipt1").val())+parseInt($(".ipt1").val());
	}else if(document.getElementById("pro1")){
		$(".gj_num span").html=parseInt($(".ipt1").val());
	}
	




	$(".change_parameter").hover(
	function(){
		$(this).css("border","1px dotted #ff6600");
		$(this).find("b").css("display","block");
		$(this).find("i").css("display","block");
	},
	function(){
		$(this).css("border","1px dotted #fff");
		$(this).find("b").css("display","none");
		$(this).find("i").css("display","none");
	})
	$(".youhui").hover(
		function(){
			$(this).find(".sanjiao").css("background-position","-29px -995px");
			$(this).find(".youhui_con").css("display","block");
		},
		function(){
			$(this).find(".sanjiao").css("background-position","-20px -995px");
			$(this).find(".youhui_con").css("display","none");
		}
	)
})