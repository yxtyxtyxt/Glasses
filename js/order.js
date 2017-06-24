$(document).ready(function(){
	//修改支付/物流方式
	$(".distribution_pay_title span").click(function(){
		$(this).css("display","none");
		$(".now_pay_way").css("display","none");
		$(".now_distribution_way").css("display","none");
		$(".pay_way").css("display","block");
		$(".distribution_way").css("display","block");
		$(".save_info").css("display","block");
	})

	$(".pay_way li").click(function(){
		$(".pay_way li").removeClass();
		$(this).addClass("on");
		$(this).siblings().addClass("on_none");
		$(".now_pay_way").html($(this).find(".pay_line_way").html());
	})
	$(".distribution_way li").click(function(){
		$(".distribution_way li").removeClass();
		$(this).addClass("on");
		$(this).siblings().addClass("on_none");
		$(".now_distribution_way").html($(this).find(".suyun").html());
	})


	$(".save_info").click(function(){
		$(this).css("display","none");
		$(".pay_way").css("display","none");
		$(".distribution_way").css("display","none");
		$(".now_pay_way").css("display","block");
		$(".now_distribution_way").css("display","block");
		$(".distribution_pay_title span").css("display","block");
	})

	//修改地址
	$(".add_btn .address_bg").click(function(){
		$(".edit_address").css("display","block");
		$(".opacity_bg").css("display","block");
	})


	$(".address_title i").click(function(){
		$(this).parent().parent().css("display","none");
		$(".opacity_bg").css("display","none");
	})



	var consignee=$("input[name=consignee]");
	var phone=$("input[name=phone]");
	var detailed_address=$(".detailed_address textarea");
	var consignee_tip=$(".consignee_tip");
	var detailed_tip=$(".detailed_address_tip");
	var mobile_tip=$(".mobile_tip");
	var reg=/^((13\d)|(14\d)|(15\d)|(18\d)|(17\d))(\d{8})$/;

	consignee.blur(function(){
		if(consignee.val()==""){
		consignee_tip.css("display","inline-block");
		}else{
			consignee_tip.css("display","none");
		}
	})
	phone.blur(function(){
		if(phone.val()==""){
			mobile_tip.css("display","inline-block");
		}else if(phone.val()!=="" && reg.test(phone.val())==false){
			mobile_tip.html("请填写正确的手机号");
			mobile_tip.css("display","inline-block");
		}else{
			mobile_tip.html("请填写手机号码");
			mobile_tip.css("display","none");
		}
	})
	detailed_address.blur(function(){
		if(detailed_address.val()==""){
			detailed_tip.css("display","inline-block");
		}else{
			detailed_tip.css("display","none");
		}
	})

	//发票
	var _n=0;
	$(".invoice_title").click(
		function(){
			if(_n%2==0){
				$(this).find("i").addClass("on");
				$(".invoice_con").css("display","block")
			}else{
				$(this).find("i").removeClass("on");
				$(".invoice_con").css("display","none")
			}
			_n++;		
		}
	)
	//个人/公司
	$(".invoice_con .con2 i").click(function(){
		$(".invoice_con .con2 i").removeClass();
		$(this).addClass("invoice_radio_on");
		$(this).siblings().addClass("invoice_radio");
		if($(this)[0]==$(".invoice_con .con2 i")[0]){
			$(".con3 .radio_1").css("display","block");
			$(".con3 .radio_2").css("display","none");
		}else{
			$(".con3 .radio_1").css("display","none");
			$(".con3 .radio_2").css("display","block");
		}
	})
	//商品规格
	var _m=0;
	$(".con4 .pro_gg").click(function(){
		if(_m%2==0){
			$(this).next().slideDown("fast");
		}else{
			$(this).next().slideUp("fast");
		}
		_m++;
	})

	$(".con4 ul li").click(function(){
		$(".pro_gg").html("<i></i>"+$(this).html());
		$(this).parent().slideUp("fast");
		_m=0;
	})


	//积分
	var _k=0;
	$(".integral_title").click(function(){
		if(_k%2==0){
			$(this).find("i").addClass("on");
			$(this).next().css("display","block");
		}else{
			$(this).find("i").removeClass();
			$(this).next().css("display","none");
		}
		_k++;
	})


	//购物车订单
	var _dealcookie=new DealCookie();
	var _procookie=JSON.parse(_dealcookie.readCookie("carpro"));
	var _proNum=JSON.parse(_dealcookie.readCookie("cart"));
	//console.log(_proNum)
	// console.log(_procookie)
	var order_ul=$(".pro_list_con ul");
	for(var k in _proNum){
		//console.log(1)
		//加载第一个产品
		if(k==="1001"){
			if(_proNum[k]!=0){	
				var oLi=document.createElement("li");
				var _html="";
				_html+="<img src=\"../images/carImg/"+_procookie[k]["imgurl"]+".jpg\" alt=\"\"><div class=\"proname\">"+_procookie[k]["proname"]+"</div><div class=\"degree common\">光度:"+_procookie[k]["lightdegree"]+"</div><div class=\"nNum common\">1</div><div class=\"unit_price common\">￥<span>"+_procookie[k]["unit_price"]+"</span></div><div class=\"total_price common\">￥<span>99</span>.00</div>";
				oLi.innerHTML=_html;
				order_ul.append(oLi);
				//计算总价1
				var num1=JSON.parse(_dealcookie.readCookie("cart"))["1001"];
				$(".ipt1").val(num1);
				$(".total_price").find("span").html(_procookie[k]["unit_price"]*num1)
			}
		}
		//加载第二个产品
		if(k==="1002"){
			if(_proNum[k]!=0){
				var oLi=document.createElement("li");
				var _html="";
				_html+="<img src=\"../images/carImg/"+_procookie[k]["imgurl"]+".jpg\" alt=\"\"><div class=\"proname\">"+_procookie[k]["proname"]+"</div><div class=\"degree common\">光度:"+_procookie[k]["lightdegree"]+"</div><div class=\"nNum common\">1</div><div class=\"unit_price common\">￥<span>"+_procookie[k]["unit_price"]+"</span></div><div class=\"total_price common\">￥<span>99</span>.00</div>";
				oLi.innerHTML=_html;
				//console.log(oLi)
				order_ul.append(oLi);
				//计算总价2
				var num2=JSON.parse(_dealcookie.readCookie("cart"))["1002"];
				$(".ipt2").val(num2);
				$(".total_price").find("span").html(_procookie[k]["unit_price"]*num2);
			}
				
		}
	}

	// var addressArr=eval(_cookie.getCookie("address"));
	// console.log(addressArr)
	$(".save_info_btn").click(function(){
		if($("input[name=consignee]").val()=="" || $("#s_province").val()=="省份" || $("#s_city").val()=="地级市" || $("#s_county").val()=="市、县级市" || $(".detailed_address_con textarea").val()=="" || $("input[name=phone]").val()=="" || reg.test(phone.val())==false){
			alert("请您完善地址信息！");
		}else{
			var address_ul=$(".address_ul");
			var oLi=document.createElement("li");
			oLi.className="address_default";
			if($(".check_default i").attr("class")=="on"){
				$(".default_mark").css("display","none");
				oLi.innerHTML="<div class=\"user_info\"><div class=\"user_province\">"+$("#s_province").val()+"&nbsp;"+$("#s_city").val()+"</div><div class=\"user_name\">(<span>"+$("input[name=consignee]").val()+"</span> 收)</div></div><div class=\"user_line\"></div><div class=\"address_phone\"><div>"+$("#s_county").val()+$(".detailed_address_con textarea").val()+"</div><div>"+$("input[name=phone]").val()+"</div></div><i class=\"address_bg\"></i><i class=\"address_mark\"></i><div class=\"modify_address\">修改</div><div class=\"default_mark\">默认地址</div>";	
			}else{
				oLi.innerHTML="<div class=\"user_info\"><div class=\"user_province\">"+$("#s_province").val()+"&nbsp;"+$("#s_city").val()+"</div><div class=\"user_name\">(<span>"+$("input[name=consignee]").val()+"</span> 收)</div></div><div class=\"user_line\"></div><div class=\"address_phone\"><div>"+$("#s_county").val()+"&nbsp;"+$(".detailed_address_con textarea").val()+"</div><div>"+$("input[name=phone]").val()+"</div></div><i class=\"address_bg\"></i><i class=\"address_mark\"></i><div class=\"modify_address\">修改</div>";
				$(oLi).find(".default_mark").css("display","none");
			}

			
			// var arr=[];
			// arr.push($("input[name=consignee]").val());
			// arr.push($("#s_province").val());
			// arr.push($("#s_city").val());
			// arr.push($("#s_county").val());
			// arr.push($(".detailed_address_con textarea").val());
			// arr.push($("input[name=phone]").val());
			// var _str1="[";
			// for(var i=0;i<arr.length;i++){
			// 	_str1+="\""+arr[i]+"\""+",";
			// }
			// _str1.replace(/\,/g,"");
		
			// _str1+="]";
			
			// if(addressArr==null){
			// 	_cookie.setCookie("address","["+_str1+"]","/",7);
			// }else{
			// 	addressArr.push(_str1);
			// 	_cookie.setCookie("address","["+addressArr+"]","/",7);
			// }




			address_ul[0].insertBefore(oLi,address_ul[0].children[0]);
			$("input[name=consignee]").val("");
			$("#s_province").val("省份");
			$("#s_city").val("地级市");
			$("#s_county").val("市、县级市");
			$(".detailed_address_con textarea").val("");
			$("input[name=phone]").val("");
			$(".check_default i").removeClass();
			$(".address_mark").css("display","none")
			$(this).parent().css("display","none");
			$(".opacity_bg").css("display","none");
			$(".address_bg").css("background-position","-465px -172px");
			$(oLi).find(".address_bg").css("background-position","-465px -55px");
			$(oLi).find(".address_mark").css("display","block");

			$(".address_ul li:not(.add_btn)").click(function(){
				$(".address_ul li:not(.add_btn)").find(".address_bg").css("background-position","-465px -172px");
				$(".address_ul li:not(.add_btn)").find(".address_mark").css("display","none");
				$(".address_ul li:not(.add_btn)").find(".default_mark").css("display","none");
				$(this).find(".address_bg").css("background-position","-465px -55px");
				$(this).find(".address_mark").css("display","block");
				$(this).find(".default_mark").css("display","block");
			})


			
			
		}
	});


	//console.log(_cookie.getCookie("address"))


	//修改地址
	$(".modify_address").click(function(){
		$(".edit_address").css("display","block");
	})

	//是否设为默认地址
	var _a=0;
	$(".check_default i").click(function(){
		if(_a%2==0){
			$(this).addClass("on");
		}else{
			$(this).removeClass();
		}
		_a++;
	})







})