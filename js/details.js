$(function(){
	$.post("../data/pro.json",function load(data,textStatus){
		if(textStatus=="success"){
			var Main=$("#main");
			var _html="";
			var _dealcookie=new DealCookie();
			//console.log(data)
			//console.log(typeof _dealcookie.readCookie("product"))
			for(var k in data){
				//console.log(data[k]["message"]);
				if(k===String(_dealcookie.readCookie("product"))){
					_html="<div class=\"local main_con\"><span></span>当前位置><a href=\"../index.html\">可得眼镜网></a><a href=\"../index.html\">彩色隐形眼镜></a><a href=\"#\">"+data[k]["message"]["type"]+"</a></div><div class=\"content main_con\"><div class=\"pro_Exhibition\"><ul id=\"small_img_box\"><li><img src=\"../images/mtImg/pro_a"+data[k]["message"]["norImgurl"]+".jpg\" alt=\"\"></li><span></span></ul><div class=\"s_img\">";
					for(var i=0;i<data[k]["message"]["sImgurl"].length;i++){
						if(i==0){
							_html+="<span class=\"active\"><img src=\"../images/mtImg/pro_a"+data[k]["message"]["sImgurl"][i]+".jpg\" alt=\"\"/></span>";
						}else{
							_html+="<span><img src=\"../images/mtImg/pro_a"+data[k]["message"]["sImgurl"][i]+".jpg\" alt=\"\"/></span>";
						}
					}
					_html+="<i class=\"i_prev\"></i><i class=\"i_next\"></i></div><div class=\"share\"><i class=\"i1\"></i><a href=\"javascirpt:\">分享</a><a href=\"#\" class=\"a1 common\">微博</a><a href=\"#\" class=\"a2 common\">空间</a><a href=\"javascirpt:\" class=\"a3 common\">微信</a><i class=\"i2\"></i><a href=\"#\">收藏商品（已被12434人收藏）</a></div><div class=\"Magnifier_box\" id=\"Magnifier_box\"><img id=\"big_img\" src=\"../images/mtImg/fangda"+data[k]["message"]["bImgurl"]+".jpg\" alt=\"\"/></div></div><div class=\"detailed_con\"><div class=\"detailed_con_top\"><span>"+data[k]["message"]["proname"]+"</span><p>"+data[k]["message"]["active"]+"</p></div><div class=\"detailed_price\"><span class=\"kede_con_title title_6\">可得价：</span><span class=\"Price\">￥"+data[k]["message"]["price"]+"</span><div class=\"jt_box\"><i></i></div><del>￥"+data[k]["message"]["Original_price"]+"</del><span class=\"kede_con_title\">立即节省： </span><span class=\"kede_price_save\">￥200.00</span><span class=\"kede_con_title\">赠送积分： </span><span class=\"kede_price_save\">198积分</span></div><div class=\"Promotion\"><div class=\"Promotion_title\">促销信息：</div><div class=\"Promotion_con\"><p><b>赠品</b><img src=\"http:\/\/pic.keede.com/main/77d4931c-4579-4a6d-91af-0ce0b4cfe1d0-130-130.jpg\" alt=\"\"><span>赠品牌润眼液15ml </span><i> ×1</i></p><p><b>赠品</b><img src=\"http:\/\/pic.keede.com/main/20f9372a-ca35-4660-9131-133500e657e5-130-130.jpg\" alt=\"\"><span>赠品牌润眼液15ml </span><i> ×1</i></p><p><b>赠品</b><img src=\"http:\/\/pic.keede.com/main/77d4931c-4579-4a6d-91af-0ce0b4cfe1d0-130-130.jpg\" alt=\"\"><span>赠品牌润眼液15ml </span><i> ×1</i></p><p><b>赠品</b><img src=\"http:\/\/pic.keede.com/main/20f9372a-ca35-4660-9131-133500e657e5-130-130.jpg\" alt=\"\"><span>赠品牌润眼液15ml </span><i> ×1</i></p></div></div><div class=\"Stock\"><p class=\"pro_number\">商品编号：</p><span class=\"state\">CC154026</span><p class=\"pro_number\">库存状况：</p><span class=\"state\">有库存</span></div><div class=\"line\"></div><div class=\"color_change\"><span>颜色选择：</span><div class=\"color_box\">";
					for(var i=0;i<data[k]["message"]["colorImg"].length;i++){
						_html+="<a href=\"#\"><img src=\"../images/mtImg/a"+data[k]["message"]["colorImg"][i]+".jpg\" alt=\"\"></a>";
					}
					_html+="</div></div><div class=\"parameter\"><span>属性选择</span><div class=\"parameter_con\"><div class=\"parameter_con_top common\"><div class=\"right_eye\">右眼R</div><div class=\"light_title\">光度：</div><div class=\"light_con\"><input type=\"text\" value=\"请选择\" readonly=\"readonly\"/><ul><li>请选择</li><li>0.00</li><li>-1.00</li><li>-1.25</li><li>-1.50</li><li>-1.75</li><li>-2.00</li><li>-2.25</li><li>-2.50</li><li>-2.75</li><li>-3.00</li><li>-3.25</li><li>-3.50</li><li>-3.75</li><li>-4.00</li><li>-4.25</li><li>-4.50</li><li>-4.75</li><li>-5.00</li><li>-5.25</li><li>-5.50</li><li>-5.75</li><li>-6.00</li><li>-6.50</li><li>-7.00</li><li>-7.50</li><li>-8.00</li><li>-8.50</li><li>-9.00</li></ul><i></i></div><div class=\"_number\">数量：</div><div class=\"subtraction common_btn\">-</div><input class=\"pro_number\" type=\"text\" value=\"1\"/><div class=\"plus common_btn\">+</div></div><div class=\"parameter_con_bottom common\"><div class=\"right_eye\">左眼R</div><div class=\"light_title\">光度：</div><div class=\"light_con\"><input type=\"text\" value=\"请选择\" readonly=\"readonly\"/><ul><li>请选择</li><li>0.00</li><li>-1.00</li><li>-1.25</li><li>-1.50</li><li>-1.75</li><li>-2.00</li><li>-2.25</li><li>-2.50</li><li>-2.75</li><li>-3.00</li><li>-3.25</li><li>-3.50</li><li>-3.75</li><li>-4.00</li><li>-4.25</li><li>-4.50</li><li>-4.75</li><li>-5.00</li><li>-5.25</li><li>-5.50</li><li>-5.75</li><li>-6.00</li><li>-6.50</li><li>-7.00</li><li>-7.50</li><li>-8.00</li><li>-8.50</li><li>-9.00</li></ul><i></i></div><div class=\"_number\">数量：</div><div class=\"subtraction common_btn\">-</div><input class=\"pro_number\" type=\"text\" value=\"1\"/><div class=\"plus common_btn\">+</div></div><div class=\"details_inventory\"><b>隐形眼镜度数换算表</b><i></i></div></div></div><div class=\"details_btn\"><div class=\"details_btn1 common\">立即购买</div><div class=\"details_btn2 common\">加入购物车</div></div><div class=\"details_service\"><div class=\"service_title\">服务承诺：</div><div class=\"service_text\"><i class=\"i1\"></i>正品保证</div><div class=\"service_text\"><i class=\"i2\"></i>货到付款</div><div class=\"service_text\"><i class=\"i3\"></i>30天随心退换</div><div class=\"service_text\"><i class=\"i4\"></i>满80免运费</div></div></div><img class=\"app_qc\" src=\"\" alt=\"\"></div><!-- 套装 --><div class=\"details_emboitement_box main_con clearfix\"><h6>自由搭配</h6><div class=\"emboitement_box main_con clearfix\"><div class=\"details_main goodscom\"><img src=\"../images/mtImg/dapei1.jpg\" alt=\"\"/><div class=\"proname\">"+data[k]["message"]["proname"]+"</div><p>￥"+data[k]["message"]["price"]+"<span>￥"+data[k]["message"]["Original_price"]+"</span></p></div><div class=\"emboitement_plus\"><i></i></div><div class=\"emboitement\"><div class=\"emboitement_item goodscom\"><a href=\"#\"><img src=\"http:\/\/pic.keede.com/main/935eb555-4913-4b65-9e04-b7af14a4349c-130-130.jpg\" alt=\"\"/></a><div class=\"proname\"><i></i><span>Visine优能眼部清洗液洗眼液250m...</span></div><p>￥21.00<span>￥36.00</span></p></div><div class=\"emboitement_plus\"><i></i></div><div class=\"emboitement_item goodscom\"><a href=\"#\"><img src=\"http:\/\/pic.keede.com/main/09dfbd94-b800-4ffc-ad20-4b286bf04f87-130-130.jpg\" alt=\"\"/></a><div class=\"proname\"><i></i><span>kiss me 奇士美浓密卷翘防水睫毛膏</span></div><p>￥78.00<span>￥128.00</span></p></div></div><div class=\"details_settlement\"><div class=\"details_equal\"><i></i></div><div class=\"details_mess\"><div class=\"details_change\">已选数量：<span>1</span>件</div><div class=\"details_sale_btn\">立即购买</div></div></div></div></div><div class=\"goodsmessage main_con clearfix\"><div class=\"goods_con_left\"><ul class=\"pro_nav\"><li>透明隐形眼镜</li><li>彩色隐形眼镜</li><li>护理用品</li><li>近视眼镜</li><li>太阳眼镜</li><li>功能眼镜</li><li>美妆个护</li></ul><div class=\"pro_record\"><h6>您的浏览记录</h6><ul><li><a href=\"#\"><img src=\"http:\/\/pic.keede.com/main/86ba70d8-e18d-4656-b490-c8335b1d835d-60-60.jpg\" alt=\"\"></a><div class=\"right\"><a href=\"#\">强生define美瞳妍妍日抛彩色隐形眼镜30片</a><p>￥198.00</p></div></li><li><a href=\"#\"><img src=\"http:\/\/pic.keede.com/main/86ba70d8-e18d-4656-b490-c8335b1d835d-60-60.jpg\" alt=\"\"></a><div class=\"right\"><a href=\"#\">强生define美瞳妍妍日抛彩色隐形眼镜30片</a><p>￥198.00</p></div></li><li><a href=\"#\"><img src=\"http:\/\/pic.keede.com/main/86ba70d8-e18d-4656-b490-c8335b1d835d-60-60.jpg\" alt=\"\"></a><div class=\"right\"><a href=\"#\">强生define美瞳妍妍日抛彩色隐形眼镜30片</a><p>￥198.00</p></div></li></ul><h6 class=\"_bottom\">清除浏览记录</h6></div></div><div class=\"goods_con_right clearfix\"><div class=\"details_tab\"><span class=\"tab1\">商品信息<i></i></span><span>商品评论（132387）<i></i></span><span>佩戴指南<i></i></span><span>售后保证<i></i></span><div class=\"details_shoppingbtn\"><i></i>加入购物车</div><div class=\"details_tab_btn\"><b>手机购买</b><i class=\"phone\"></i><i class=\"arrows\"></i><img src=\"http:\/\/code.keede.com/qrcode_115.jpg?data=http%3a%2f%2fm.keede.com%2fqiangshengpinpai143.html\" alt=\"\"><p>手机扫码，更方便</p></div></div><div class=\"pro_img_zs clearfix\">";
					for(var i=0;i<data[k]["message"]["pro_imgurl"].length;i++){
						_html+="<img src=\"../images/mtImg/qs1_0"+data[k]["message"]["pro_imgurl"][i]+".jpg\" alt=\"\"/>";
					}
					_html+="</div><div class=\"complaints clearfix\"><img src=\"../images/mtImg/shouhou.jpg\" alt=\"\"></div><div class=\"comment_total\">累计评论<span>132387</span>	</div><div class=\"comment_title clearfix\"><div class=\"sorce\"><p class=\"p1\">综合得分</p><p class=\"p2\">4.0</p><p class=\"p3\">(满分5分)</p><p class=\"p4\"><i></i>共<span>132387</span>条评论</p></div><div class=\"sorce_distribution\"><div class=\"level1 common\"><i></i><div class=\"bai\"><div class=\"wu\"></div></div><b>91.1%</b></div><div class=\"level2 common\"><i></i><div class=\"bai\"><div class=\"si\"></div></div><b>6.1%</b></div><div class=\"level3 common\"><i></i><div class=\"bai\"><div class=\"san\"></div></div><b>1.7%</b></div><div class=\"level4 common\"><i></i><div class=\"bai\"><div class=\"er\"></div></div><b>0.4%</b></div><div class=\"level5 common\"><i></i><div class=\"bai\"><div class=\"yi\"></div></div><b>0.7%</b></div></div><div class=\"fabiao\"><div class=\"fabiao_left_btn\"><i></i>发表评论</div><div class=\"fabiao_right_btn\"><i></i>发表咨询</div><p>对已购买的商品发起评论和晒单皆可获得相应的积分。</br>积分可以在商城兑换相应商品<a href=\"#\">立即查看>></a></p></div></div></div></div>";
					Main.html(_html);
					//列表二级菜单
					$("#all_pro,.banner_con").mouseover(function(){
						$(".banner_con").css("display","block")
					})
					$("#all_pro,.banner_con").mouseout(function(){
						$(".banner_con").css("display","none")
					})

					//评论切换
					$(".details_tab span").click(function(){
						$(".details_tab span").removeClass();
						$(this).addClass("tab1");
					})

					$(window).scroll(function(){
						var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
						if(scrollTop>1070){
							$("#all_pro").css({position:"fixed",top:"0",left:"50%",marginLeft:"-595px",zIndex:"999"});
							$(".banner_con").css({position:"fixed",top:"35px",left:"50%",marginLeft:"-595px",zIndex:"999"});
							$(".details_tab").css({position:"fixed",top:"0",left:"50%",marginLeft:"-374px",zIndex:"999"});
							$(".details_shoppingbtn").css("display","block");
						}else{
							$("#all_pro").css({position:"static",marginLeft:"0"});
							$(".banner_con").css({position:"absolute"});
							$(".details_tab").css({position:"static",marginLeft:"0"});
							$(".details_shoppingbtn").css("display","none");
						}
					})
					//光度选择
					$(".light_con input,.light_con i").click(function(){
						$(this).parent().find("ul").animate({height:"180px"},1000);
						$(this).parent().find("ul").css("display","block");
						
					})
					$(".light_con ul li").click(function(){
						$(".light_con ul li").css("border","1px solid #ccc");
						$(this).css("border","1px solid #ff6600");
						//console.log($(this).parent().parent())
						$(this).parent().parent().find("input").val($(this).html());
						$(this).parent().css("display","none");
					})
					// $("light_con").not().click(function(){
					// 	$(".light_con ul").css("display","none");
					// })


					//放大镜图片切换
					var aSpan=$(".s_img span");
					var nor_img=$("#small_img_box").find("img");
					var big_img=$("#big_img");
					for(var i=0;i<aSpan.length;i++){
						aSpan[i].index=i;
						aSpan[i].onmouseover=function(){
							var num=eval(data[_dealcookie.readCookie("product")]["message"]["sImgurl"][this.index]);
							//console.log(k)
							aSpan.removeClass();
							$(this).addClass("active");
							nor_img.attr("src","../images/mtImg/pro_a"+num+".jpg");
							big_img.attr("src","../images/mtImg/fangda"+num+".jpg")
						}
					}

					function Magnifier(){
						this.small_box=document.getElementById("small_img_box");
						//console.log(this.small_box)
						this._position=this.small_box.children[1];
						this.big_img=document.getElementById("big_img");
						this.big_img_box=document.getElementById("Magnifier_box");
						this.x=0;//鼠标坐标
						this.y=0;
						var _self=this;
						this.fangda=function(x,y){
							this.big_img.style.left=-2.5*x+"px";
							this.big_img.style.top=-2.5*y+"px";
						}
						this.small_box.onmouseover=function(){
							_self._position.style.display="block";
							_self.big_img_box.style.display="block";
						}
						this.small_box.onmouseout=function(){
							_self._position.style.display="none";
							_self.big_img_box.style.display="none";
						}
						this.small_box.onmousemove=function(e){
							e=e || window.event;
							_self.x=e.clientX;
							_self.y=e.clientY;
							var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
							//console.log($(".content")[0].offsetTop)
							//console.log(_self.small_box.offsetLeft)
							var left=_self.x-_self._position.offsetWidth/2-$(".content")[0].offsetLeft;
							var top=_self.y-_self._position.offsetHeight/2-$(".content")[0].offsetTop+scrollTop;
							if(left<0){
								left=0;
							}else if(left>_self.small_box.offsetWidth-_self._position.offsetWidth){
								left=_self.small_box.offsetWidth-_self._position.offsetWidth;
							}
							if(top<0){
								top=0;
							}else if(top>_self.small_box.offsetHeight-_self._position.offsetHeight){
								top=_self.small_box.offsetHeight-_self._position.offsetHeight;
							}
							_self._position.style.left=left+"px";
							_self._position.style.top=top+"px";
							_self.fangda(parseInt(_self._position.style.left),parseInt(_self._position.style.top))
						}
					}
					var _magnifier=new Magnifier();



					//var _data=_dealcookie.readCookie("cart");
					//购物车++
					var _proId=_dealcookie.readCookie("product");

					
					var num=parseInt(JSON.parse(_dealcookie.readCookie("cart"))["1001"])+parseInt(JSON.parse(_dealcookie.readCookie("cart"))["1002"]);
					console.log(num);
					// window.focus=function(){
					// 	n=_dealcookie.readCookie("cart")[_proId];
					// 	num=_dealcookie.readCookie("cart")["1001"]+_dealcookie.readCookie("cart")["1002"];
					// 	_dealcookie.editCookie("cart",_dealcookie.plus(_dealcookie.readCookie("cart"),_proId,num),"/",7);
					// 	$(".car_btn").find("span").html(num);
					// }
					var _num=$(".plus").parent().find(".pro_number").val();


					$(".plus").parent().find(".pro_number")[0].onchange=function(){
						
						_num=$(".plus").parent().find(".pro_number").val();
						console.log(_num)
						var _reg=/^[1-9]{1}\d*$/g;
						//console.log(_reg.test(_num))
						if(_reg.test(_num)==false){
		                    _reg.lastIndex=0;
		                    console.log(/^0\d+$/.test(_num))
		                    if(/^0\d+$/.test(_num)==true){
		                        _num=_num.replace(/^0/,"");
		                        $(".plus").parent().find(".pro_number").val(_num);
		                    }else{
		                        _num=1;
		                        $(".plus").parent().find(".pro_number").val(_num);
		                    }
		                }
	            	}
	            	//console.log($(".plus").parent().find(".pro_number"))


					//刷新页面时初始化
	            	$(".car_btn").find("span").html(num);
					
					
					// window.onfocus=function(){
					// 	var num=parseInt(JSON.parse(_dealcookie.readCookie("cart"))["1001"])+parseInt(JSON.parse(_dealcookie.readCookie("cart"))["1002"]);
					// 	$(".car_btn").find("span").html(num);
					// }
					
					
					//数量++
					$(".plus").click(function(){
						_num++;
						$(this).parent().find(".pro_number").val(parseInt(_num));
					})

					//数量--
					$(".subtraction").click(function(){
						if(_num<=1){
							_num=1;
						}else{
							_num--;
						}
						$(this).parent().find(".pro_number").val(_num);
					})


					//console.log(_str);


					$(".details_btn1,.details_btn2").click(function(){
						_num=parseInt($(".plus").parent().find(".pro_number").val());
						var _str="{";
						if(_proId==="1001"){
							_str+="\"1001\":"+(_num+(parseInt($(".car_btn").find("span").html())-parseInt(JSON.parse(_dealcookie.readCookie("cart"))["1002"])))+",\"1002\":"+parseInt(JSON.parse(_dealcookie.readCookie("cart"))["1002"]);
						}else if(_proId==="1002"){
							_str+="\"1001\":"+parseInt(JSON.parse(_dealcookie.readCookie("cart"))["1001"])+",\"1002\":"+(_num+(parseInt($(".car_btn").find("span").html())-parseInt(JSON.parse(_dealcookie.readCookie("cart"))["1001"])));  
						}

						_str+="}";

						$(".car_btn").find("span").html(_num+parseInt($(".car_btn").find("span").html()));


						_dealcookie.editCookie("cart",_str,"/",7);	
					})

					$(".car_btn,.top_car .a_car").click(function(){
						if(_cookie.getCookie("user")==null && _cookie.getCookie("pwd")==null){
							alert("请注册！");
							window.open("register.html");
						}else{
							window.open("pro_car.html");
						}
					})
					//console.log(_dealcookie.readCookie("cart"));

				}
				
			}	
		}
	},"json")


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





	

})

