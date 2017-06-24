$(function(){
	function Content(){
		this.s=0;//表示图片的开始索引值
		this.o=20;//表示图片的结束索引值
		this.size=20;//每一页显示多少条数据
		this.total=0;//总共有多少页


		this.bindEvent=function(){
			_self=this;
			$(".btn_box a").click(function(){
				_self.s=(parseInt($(this).html()-1)*_self.size);
				_self.o=_self.s+_self.size;
				var _btn=$(".btn_box a");
				_btn.removeClass();
				$(this).addClass("active");
				
				//console.log($(this).index())
				// if($(this).index()==0){
				// 	$(".btn_box")[0].style.left=0;
				// }else if($(this).index()>$(".btn_box a").length-5){
				// 	$(".btn_box")[0].style.left=-($(".btn_box a")[0].offsetWidth+4)*($(this).index()-4)+"px";
				// }else{
				// 	$(".btn_box")[0].style.left=-($(".btn_box a")[0].offsetWidth+4)*($(this).index())+"px";
				// }
				//console.log($(".btn_box")[0].style.width);


				if(parseInt($(this).html())==5){
					$(".btn_box")[0].style.left=-2*($(".btn_box a")[0].offsetWidth+4)+"px";
				}
				if(parseInt($(this).html())==3){
					$(".btn_box")[0].style.left=0;
				}


				// //点击最后一个按钮
				// if(_btn[_btn.length-1]===this){
				// 	if($(this).html()<_self.total){
				// 		for(var i=0;i<_btn.length;i++){
				// 			_btn[i].innerHTML=parseInt($(this).html()-2+i);
				// 		}
				// 	}	
				// }
				// //点击第一个按钮
				// if(_btn[0]===this){
				// 	var _value=$(this).html();
				// 	if(_value>1){
				// 		for(var i=0;i<_btn.length;i++){
				// 			_btn[i].innerHTML=parseInt(_value-2+i);
				// 		}
				// 	}	
				// }


				$.post("../data/pro_list1.json",function(data){
					_self.loadImg(data,_self.s,_self.o);
				},"json")
			})
		}

		this.initButton=function(){
			var _btn="<div class=\"btn_box\">";
			for(var i=this.s;i<=this.o && i<=this.total;i++){
				_btn+="<a href=\"#top\">"+(i+1)+"</a>";
			}
			_btn+="</div>"
			$(".root_a").html(_btn);
			$(".btn_box a")[0].className="active";
			$(".btn_box")[0].style.width=parseInt($(".btn_box a").length)*($(".btn_box a")[0].offsetWidth+4)+"px";
			this.bindEvent();
		}
		this.loadImg=function(data,_s,_o){
			var _html="";
			for(var i=_s;i<_o;i++){
				_html+="<li><a href=\"#\"><img src=\"../images/prolist1/"+data[i]["imgurl"]+".jpg\" alt=\"\"></a><div class=\"pro_price\"><span class=\"now_price\"><b>￥</b>"+data[i]["proprice"]+"</span><span class=\"Promotion_price\"><i></i><b>"+data[i]["active"]+"</b></span></div><div class=\"pro_name\"><a href=\"#\">"+data[i]["proname"]+"</a></div><div class=\"sale_point\">"+data[i]["sale_point"]+"</div><div class=\"hot_level\"><i></i><span>有<b>"+data[i]["pinglun"]+"</b>条评论</span></div><div class=\"left_top\"><i class=\"hot\">热销</i><i class=\"by\">包邮</i></div><div class=\"sale_btn clearfix\"><span class=\"sale_btn_con\"><i></i>加入购物车</span><a href=\"#\"><span><i></i>收藏</span></a></div></li>";
			}
			$(".pro_list").html(_html);
			for(var i=0;i<20;i++){
				if(data[i]["active"]==""){
					$(".pro_list").children().eq(i).find(".Promotion_price").css("display","none");
				}
				if(data[i]["hot"]==""){			
					$(".pro_list").children().eq(i).find(".left_top .hot").css("display","none");
				}
				if(data[i]["by"]==""){
					$(".pro_list").children().eq(i).find(".left_top .by").css("display","none");
				}
			}
		}
		this.initData=function(){
			var _self=this;
			$.post("../data/pro_list1.json",function(data){
				_self.loadImg(data,0,_self.size);
				_self.total=Math.ceil(data.length/_self.size);
				_self.initButton();
			},"json")
		}
	}
	$(function(){
		var a=new Content();
		a.initData();
	})




	//列表二级菜单
	$("#all_pro,.banner_con").mouseover(function(){
		$(".banner_con").css("display","block")
	})
	$("#all_pro,.banner_con").mouseout(function(){
		$(".banner_con").css("display","none")
	})
})