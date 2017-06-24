//库
var _cookie = {
	setCookie:function(key,value,path,days){
		var dDate=new Date();
		dDate.setDate(dDate.getDate()+days);
		document.cookie=key+"="+value+"; path="+path+"; expires="+dDate;
	},
	getCookie:function(key){
		var aCookie=document.cookie.split("; ");
		for(var i=0;i<aCookie.length;i++){
			var aCook=aCookie[i].split("=");
			if(aCook[0]==key){
				return aCook[1];
			}
		}
		return null;
	},
	removeCookie:function(key){
		_cookie.setCookie(key,"",-1);
	}
}