$(function(){
	function loadPro(url,id){
		$.post("../data/"+url+".json",function load(data,textStatus){
			if(textStatus=="success"){
				this.data=window.eval(data);
				var oUl=$("#"+id);
				var _html="";
				for(var i=0;i<data.length;i++){
					_html+="<li><a href=\"#\" target=\"blank\"><div><img alt=\"美宝莲好气色轻唇膏\" src=\"../images/active/"+data[i]["imgurl"]+".jpg\"></div><div class=\"hot_pro\">"+data[i]["proname"]+"<p>"+data[i]["active"]+"</p></div><div class=\"hot_jg\"><div class=\"jg_left\"><img src=\"../images/active/logo1.png\">￥<b>"+data[i]["price"]+"</b></div><div class=\"jg_right\">立即购买</div></div></a></li>";
				}
				oUl.html(_html);
			}
		},"json")
	}
	loadPro("active1","ul1");
	loadPro("active2","ul2");
	loadPro("active3","ul3");
	loadPro("active4","ul4");
	loadPro("active5","ul5");
	loadPro("active6","ul6");




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




    $(window).scroll(function(){
        if($(window).scrollTop()>400){
        	//$(".suspension_right").css("display","block")
            $(".suspension_right").fadeIn("slow");
            $(".suspension_left").fadeIn("slow");
        }else{
        	//$(".suspension_right").css("display","none")
            $(".suspension_right").fadeOut("slow");
            $(".suspension_left").fadeOut("slow");
        }
    });





    countDown("2016/11/12 00:00:00","#timebox");
    function countDown(time,id) {
        var day_elem=$(id).find('.day');
        var hour_elem=$(id).find('.hour');
        var minute_elem=$(id).find('.minute');
        var second_elem=$(id).find('.second');
        var end_time=new Date(time).getTime(),//月份是实际月份-1
           sys_second=(end_time-new Date().getTime())/1000;
        var timer=setInterval(function(){
            if(sys_second>1) {
                sys_second-=1;
                var day=Math.floor(sys_second/3600/24);
                var hour=Math.floor(sys_second/3600%24);
                var minute=Math.floor(sys_second/60%60);
                var second=Math.floor(sys_second%60);
                $(day_elem).text(day);//计算天
                $(hour_elem).text(hour<10?"0"+hour:hour);//计算小时
                $(minute_elem).text(minute<10?"0"+minute:minute);//计算分钟
                $(second_elem).text(second<10?"0"+second:second);//计算秒杀
            }else{
                clearInterval(timer);
            }
        },1000);
    }
   

	
	//列表二级菜单
	$("#all_pro,.banner_con").mouseover(function(){
		$(".banner_con").css("display","block")
	})
	$("#all_pro,.banner_con").mouseout(function(){
		$(".banner_con").css("display","none")
	})
})
	