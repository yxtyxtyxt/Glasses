function Slide(){
	this.timer=null;
	//获取属性
	this.getStyle=function(DOM,attr){
		if(DOM.currentStyle){
			return DOM.currentStyle[attr];
		}else{
			return getComputedStyle(DOM,false)[attr];
		}
	}
	//运动框架
	this.move=function(DOM,attr,target,num){
		clearInterval(DOM.timer)
		var _self=this;
		DOM.timer=setInterval(function(){
			if(attr=='opacity'){
				var cur=Math.round(parseFloat(_self.getStyle(DOM,attr))*100)
			}else{
				var cur=parseInt(_self.getStyle(DOM,attr));
			}
			//console.log(attr);
			//alert(cur)
			//console.log(cur)
			var speed=(target-cur)/num;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(cur==target){
				clearInterval(DOM.timer)
			}else{
				if(attr=='opacity'){
					DOM.style.filter='alpha(opacity:'+(cur+speed)+')'
					DOM.style.opacity=(cur+speed)/100
				}else{
					DOM.style[attr]=cur+speed+'px';
				}
			}
		},30)
	}
	
	//加载轮播图结构  实现轮播
	this.initContent=function(data){
		var _html1="";
		for(var i=0;i<data["images"].length;i++){
			if(i==0){
				_html1+='<li class="clearfix" style="z-index:1"><a href="#"><img src="images/'+data["images"][i]+'.jpg" alt=""></a></li>';
			}else{
				_html1+='<li class="clearfix"><a href="#"><img src="'+data["images"][i]+'.jpg" alt=""></a></li>';
			}
		}
		_html1+="<div class=\"dot_box\">";
		for(var i=0;i<data["images"].length;i++){
			_html1+="<span>"+(i+1)+"</span>";
		}
		_html1+="</div>"
		_html1+="<span class=\"prev\"></span><span class=\"next\"></span>";
		$("#banner_ul").html(_html1);
		var index=0;
		var zIndex=2;
		var _self=this;
		var oUl1=$("#banner_ul");//banner图ul
		var aLi=$("#banner_ul li");
		var btnSpan=$("#banner_ul>span");
		var prev=$(".prev");
		var next=$(".next");
		var aSpan1=$("#banner .dot_box span");
		var oBanner_box=$("#banner")
		var colorBg=["#1a0e1c","#2c80d6","#a1d8f7","#1c8efe","#18062e"]
		//下一张
		//banner背景初始化
		oBanner_box.css("background",colorBg[index])
		//dot初始化
		aSpan1[index].className="active";
		//下一张
		function rightCut(){
			if(index==aLi.length-1){
				index=0;
			}else{
				index++;
			}
			Cut();	
		}
		//上一张
		function leftCut(){
			if(index==0){
				index=aLi.length-1;
			}else{
				index--;
			}
			Cut();
		}

		//自动轮播
		_self.timer=setInterval(rightCut,3000);
		oUl1.mouseover(function(){
			clearInterval(_self.timer)
			prev[0].style.display="block";
			next[0].style.display="block";
		});
		oUl1.mouseout(function(){
			_self.timer=setInterval(rightCut,3000);
			prev[0].style.display="none";
			next[0].style.display="none";
		})
		prev[0].onmouseover=next[0].onmouseover=function(){
			btnSpan.css("opacity","1")
		}
		prev[0].onmouseout=next[0].onmouseout=function(){
			btnSpan.css("opacity","0.6")
		}
		prev.click(leftCut);
		next.click(rightCut);
		//图片运动
		function Cut(){	
			for(var i=0;i<aSpan1.length;i++){
				aSpan1[i].className="";
			}
			aSpan1[index].className="active";
			aLi[index].style.zIndex=zIndex++;
			aLi[index].style.opacity=0;
			oBanner_box.css("background",colorBg[index])
			_self.move(aLi[index],"opacity",100,10);	
		}
		//dot滑入事件
		for(var i=0;i<aSpan1.length;i++){
			aSpan1[i].index=i;
			aSpan1[i].onmouseover=function(){
				index=this.index;
				Cut();
			}
		}
	}
	//ajax获取数据
	this.initData=function(url){
		var _self=this;
		$.post(url,function(data){
			_self.initContent(data);
		},"json")
	}
	//图片margin-right运动
	this.imgMove=function(DOM){
		var _self=this;
		var aImg=$(DOM);
		aImg.mouseover(function(){
			_self.move(this,"margin-right",12,10)
		})
		aImg.mouseout(function(){
			_self.move(this,"margin-right",0,10)
		})
	}
}


//ajax加载数据并操作DOM元素
function Initjson(){
	//加载html页面
	this.loadHtml=function(url,id){
		$.post(url,function load(data,textStatus){
			if(textStatus=="success"){
				var DOM=$("#"+id);
				DOM.html(data);
				//console.log(data);
			}
		},"html")
	}
	//每日活动ajax
	this.getJson1=function(url,Class){
		$.post(url,function load(data,textStatus){//jq中ajax的写法
			if(textStatus=="success"){
				this.data=window.eval(data);
				var daily_box=$(".daily_box")
				var oUl=document.createElement("ul");
				oUl.className=Class;
				var _html=""
				for(var i=0;i<this.data.length;i++){
					_html+='<li><a href="#"><img src="'+this.data[i]["imgurl"]+'" alt=""></a><a href="#">'+this.data[i]["proname"]+'</a><span>￥'+this.data[i]["price"]+'</span></li>'
				}
				$(oUl).html(_html)
				daily_box.append(oUl);
				var _banner=new Slide();
			    _banner.imgMove(".daily_box img");
			    function Domhover(){
					var btn1=$("#seckill");
					var btn2=$("#worth_buy");
					var daily_con1=$(".daily_con1")
					var daily_con2=$(".daily_con2")
					btn1.mouseover(function(){
						btn1.css("background-position","left top");
						btn2.css("background-position","left -91px");
						daily_con1.css("display","block");
						daily_con2.css("display","none");
					})
					btn2.mouseover(function(){
						btn1.css("background-position","left -182px")
						btn2.css("background-position","left -273px")
						daily_con2.css("display","block");
						daily_con1.css("display","none");
					})
				}
				Domhover();
			}
		},"json")
	}

	//楼层右侧ajax
	this.initProContent=function(url1,url2,id){
		$.post(url1,function load(data,textStatus){//jq中ajax的写法
			if(textStatus=="success"){
				this.data=window.eval(data);
				//console.log("#"+id1)
				var floor_right=$("#"+id);
				//console.log(floor_right)
				var _html="";
				for(var i=0;i<this.data.length;i++){
					_html+='<li><a class="a_img" href="#"><img src="'+this.data[i]["imgurl"]+'" alt=""></a><div class="pro_content"><p class="price">￥'+this.data[i]["price"]+'.00</p><a class="a_pro" href="#">'+this.data[i]["proname"]+'</a><span>'+this.data[i]["active"]+'</span></div></li>';
				}
				floor_right.html(_html);
				var _pro=new Slide();
			    _pro.imgMove("#"+id+" li img");
				$.post(url2,function load(data,textStatus){
					if(textStatus=="success"){
						this.data=window.eval(data);
						//console.log(1);
						var img_box=document.createElement("div");
						img_box.className="img_box2 box_com";
						var _html2="";
						_html2+='<ul id="img_play2"><li><a href="#"><img src="'+this.data[0]["imgurl"][0]+'" alt=""></a></li><li><a href="#"><img src="'+this.data[0]["imgurl"][1]+'" alt=""></a></li></ul><div id="dot_box" class="dot_box"><span></span><span></span></div>';
						img_box.innerHTML=_html2;
						floor_right[0].insertBefore(img_box,floor_right[0].children[6]);
						var index=0;
						var zIndex=2;
						var _self=this;
						var timer=null;
						var aLi=$("#"+id+" #img_play2 li");
						var oUl=$("#"+id+" #img_play2");
						var aSpan=$("#"+id+" .img_box2 #dot_box span");
						//console.log(aSpan);
						//console.log(aLi)
						//dot初始化
						aSpan[index].className="active";
						oUl.css("width",aLi[0].offsetWidth*aLi.length+'px');
						//console.log(oUl.css("width"))
						timer=setInterval(rightCut,3000);
						$(img_box).mouseover(function(){
							clearInterval(timer)
						});
						$(img_box).mouseout(function(){
							timer=setInterval(rightCut,3000);
						})
						function rightCut(){
							if(index==aLi.length-1){
								index=0;
							}else{
								index++;
							}
							CutImg();	
						}
						function leftCut(){
							if(index==0){
								index=aLi.length-1;
							}else{
								index--;
							}
							CutImg();
						}
						function CutImg(){
							for(var i=0;i<aSpan.length;i++){
								aSpan[i].className="";
							}
							aSpan[index].className="active";
							var _move1=new Slide();
							_move1.move(oUl[0],"left",-aLi[0].offsetWidth*index,4);
						}
						for(var i=0;i<aSpan.length;i++){
							aSpan[i].index=i;
							aSpan[i].onmouseover=function(){
								index=this.index;
								CutImg();
							}
						}
					}
				},"json")
			}
		},"json")
	}
	//楼层左侧轮播图
	this.initRankTop=function(url,id,Class){
		$.post(url,function load(data,textStatus){
			if(textStatus=="success"){
				this.data=window.eval(data);
				var floor_left=$("#"+id);
				var img_box=document.createElement("div");
				img_box.className=Class;
				var _html="";
				_html+='<ul id="img_play1">';
				for(var i=0;i<this.data.length;i++){
					_html+='<li><a href="#"><img src="'+this.data[i]["imgurl"]+'" alt=""></a></li>';
				}
				_html+='</ul><div id="dot_box" class="dot_box">';
				for(var i=0;i<this.data.length;i++){
					_html+='<span></span>';
				}
				_html+='</div>';
				img_box.innerHTML=_html;
				floor_left[0].insertBefore(img_box,floor_left[0].children[0]);
				var index=0;
				var zIndex=2;
				var _self=this;
				var timer=null;
				var aLi=$("#"+id+" #img_play1 li");
				var oUl=$("#"+id+" #img_play1");
				var aSpan=$("#"+id+" #dot_box span");
				//console.log(aSpan);
				//console.log(aLi)
				//dot初始化
				aSpan[index].className="active";
				oUl.css("width",aLi[0].offsetWidth*aLi.length+'px');
				//console.log(oUl.css("width"))
				timer=setInterval(rightCut,3000);
				$(img_box).mouseover(function(){
					clearInterval(timer)
				});
				$(img_box).mouseout(function(){
					timer=setInterval(rightCut,3000);
				})
				function rightCut(){
					if(index==aLi.length-1){
						index=0;
					}else{
						index++;
					}
					CutImg();	
				}
				function leftCut(){
					if(index==0){
						index=aLi.length-1;
					}else{
						index--;
					}
					CutImg();
				}
				function CutImg(){
					for(var i=0;i<aSpan.length;i++){
						aSpan[i].className="";
					}
					aSpan[index].className="active";
					var _move=new Slide();
					_move.move(oUl[0],"left",-aLi[0].offsetWidth*index,4)
				}
				for(var i=0;i<aSpan.length;i++){
					aSpan[i].index=i;
					aSpan[i].onmouseover=function(){
						index=this.index;
						CutImg();
					}
				}
			}
		},"json")
	}
	//楼层左侧排行榜
	this.initRank=function(url,id){
		$.post(url,function load(data,textStatus){
			if(textStatus=="success"){
				this.data=window.eval(data);
				var pro_rank=$("#"+id);
				var _html="";
				for(var i=0;i<data.length;i++){
					_html+='<li><a class="a_img" href="#"><img src="'+data[i]["imgurl"]+'" alt=""></a><div class="li_right"><a href="#">'+data[i]["proname"]+'</a><p><a href="#">￥'+data[i]["nowprice"]+'<span>￥'+data[i]["beforeprice"]+'</span></a></p><a class="level" href="#"></a></div><i class="best'+(i+1)+'"></i></li>';
				}
				pro_rank.html(_html);
			}
		},"json")
	}
	//最新活动推荐ajax
	this.initActiveNew=function(url,id){
		$.post(url,function load(data,textStatus){
			if(textStatus=="success"){
				this.data=window.eval(data);
				var acitve_p=$("#"+id);
				var _html="";
				for(var i=0;i<data.length;i++){
					_html+='<a href="#">'+data[i]["content"]+'</>';
				}
				acitve_p.html(_html);
				function Domhover(){
					var btn1=$("#sales_promotion");
					var btn2=$("#recent_news");
					var promotion=$("#promotion")
					var news=$("#news")
					//console.log(promotion);
					btn1.css({"background":"#fff","border-bottom":0,"color":"#ff6600"});
					btn1.mouseover(function(){
						btn1.css({"background":"#fff","border-bottom":0,"color":"#ff6600"});
						btn2.css({"background":"#f4f4f4","border-bottom":"1px solid #e9e9e9","color":"#666"});
						promotion.css("display","block");
						news.css("display","none");
					})
					btn2.mouseover(function(){
						btn1.css({"background":"#f4f4f4","border-bottom":"1px solid #e9e9e9","color":"#666"})
						btn2.css({"background":"#fff","border-bottom":0,"color":"#ff6600"})
						promotion.css("display","none");
						news.css("display","block");
					})
				}
				Domhover();
			}
		},"json")
	}
	//last答疑
	this.initProblem=function(url,id){
		$.post(url,function load(data,textStatus){
			if(textStatus=="success"){
				this.data=window.eval(data);
				//console.log(this.data)
				var acitve_p=$("#"+id);
				var _html="";
				for(var i=0;i<this.data.length;i++){
					_html+='<a href="#">'+this.data[i]["con"]+'</>';
				}
				acitve_p.html(_html);
				function Domhover(){
					var btn1=$(".baike");
					var btn2=$(".problem");
					var baike=$("#"+id)
					var problem=$("#problem")
					//console.log(promotion);
					btn1.mouseover(function(){
						btn1.css({"background":"#fff","color":"#666"});
						btn2.css({"background":"#94c51b","color":"#fff"});
						baike.css("display","block");
						problem.css("display","none");
					})
					btn2.mouseover(function(){
						btn1.css({"background":"#94c51b","color":"#fff"})
						btn2.css({"background":"#fff","color":"#666"})
						baike.css("display","none");
						problem.css("display","block");
					})
				}
				Domhover();
			}
		},"json")
	}
	//4F/5F产品展示
	this.initProduct=function(url,id){
		$.post(url,function load(data,textStatus){
			if(textStatus=="success"){
				this.data=window.eval(data);
				var pro_list=$("#"+id);
				var _html="";
				for(var i=0;i<data.length;i++){
					_html+='<li><a href="#"><img src="'+this.data[i]["imgurl"]+'" alt=""></a><a class="gift" href="#">'+this.data[i]["gift"]+'</a><a class="proname" href="#">'+this.data[i]["proname"]+'</a><a class="price" href="#">￥'+this.data[i]["price"]+'</a></li>';
				}
				pro_list.html(_html);
				var _pro=new Slide();
			    _pro.imgMove("#"+id+" li img");
			}
		},"json")
	}
}



$(function(){
  
	function Domhover(class1,class2){
		var btn1=$(".shop_com");
		var btn2=$(".shop_map");
		var _shopCon=$("."+class1);
		var _shopMap=$("."+class2);
		var _all_shop=$(".xintiandi_info");
		var _all_map=$(".xintiandi_map");
		//console.log(btn1);
		//console.log(_shopCon)
		btn1.mouseover(function(){
			btn1.css("background-position","0 top");
			btn2.css("background-position","0 -136px");
			_all_shop.css("display","none");
			_all_map.css("display","none");
			_shopCon.css("display","block");
			_shopMap.css("display","none");
			//console.log(1);
		})
		btn2.mouseover(function(){
			btn1.css("background-position","0 -272px")
			btn2.css("background-position","0 -408px")
			_shopMap.css("display","block");
			_shopCon.css("display","none");
		})
	}
	function hoverShop(class1,class2){
		var allShopBtn=$("#shop_nav li")
		var _shopCon=$("."+class1);
		var _shopMap=$("."+class2);
		var _all_shop=$(".xintiandi_info");
		var _all_map=$(".xintiandi_map");
		allShopBtn.mouseover(function(){
			_all_shop.css("display","none");
			_all_map.css("display","none");
			_shopCon.css("display","block");
			_shopMap.css("display","none");
			Domhover(class1,class2);
		})
		
	}
	hoverShop("_shopCon1","_shopMap1")
	Domhover("_shopCon1","_shopMap1");


	var weixinbtn=$(".last_main4 .weixin");
	var weibobtn=$(".last_main4 .weibo");
	var weixin_img=$(".img_box .img1");
	var weibo_img=$(".img_box .img2");
	weixinbtn.mouseover(function(){
		weixinbtn.css("background","url(images/weixin1.jpg) no-repeat center");
		weibobtn.css("background","url(images/weibo1.jpg) no-repeat center");
		weixin_img.css("display","block");
		weibo_img.css("display","none");
	})
	weibobtn.mouseover(function(){
		weixinbtn.css("background","url(images/weixin2.jpg) no-repeat center");
		weibobtn.css("background","url(images/weibo2.jpg) no-repeat center");
		weixin_img.css("display","none");
		weibo_img.css("display","block");
	})


	


	//ajax加载二级菜单
	$.post("data/nav.json",function(data){
		var oUl=$("#banner .banner_con .nav_list");
		var _html="";
		for(var i=0;i<data.length;i++){
			_html+="<li class=\"list_item\"><i class=\"i_img"+(i+1)+"\"></i><a href=\"#\" target=\"_blank\">"+data[i]["name"]+"</a><span></span><div class=\"list_item_line\"></div><div class=\"child_list\"><ul class=\"child_list_left\">";
			for(var j=0;j<data[i]["category"].length;j++){
				_html+="<li class=\"child_list_dt\">"+data[i]["category"][j]["name"]+"<b>></b></li><li class=\"child_list_dd\">";
				for(var k=0;k<data[i]["category"][j]["nameCon"].length;k++){
					_html+="|<a href=\"#\" target=\"_blank\">"+data[i]["category"][j]["nameCon"][k]+"</a>";
				}
				_html+="</li>";
			}
			_html+="</ul><ul class=\"child_list_right\"><li class=\"child_list_right_top\"><a href=\"#\" target=\"_blank\"><img src=\"images/"+data[i]["img1"]+"\" alt=\"\"></a></li><li><a href=\"#\" target=\"_blank\"><img src=\"images/"+data[i]["img2"]+"\" alt=\"\"></a></li></ul></div></li>";
		}
		oUl.html(_html);
	},"json")


})

