function dlcx(obj, obj1) {
    var $DlCode = document.getElementById(obj).value;
      var RegNumber = /^[0-9]*[1-9][0-9]*$/;
                var flag = false;

               document.getElementById(obj1).innerHTML = "";


                if ($DlCode.length == 0) {

                    document.getElementById(obj1).innerHTML ="哥们，这个得输入点字符";

                    document.getElementById(obj).focus();

                    return false;

                }
            
				 $.ajaxSetup({ scriptCharset: "gbk" , contentType: "application/json; charset=utf8"});
				 
                document.getElementById(obj1).innerHTML ="正在查询......";

                $(this).attr("disabled", true);

                var $strurl="" ;


                        $.getJSON(

                    "http://vip.mlfangwei.com/xt/views/dailishangzhengshuchaxun?weixin="+$DlCode+"&dianhua="+$DlCode,

                    function(data) {
if(data[0]!=null){
                        document.getElementById(obj1).innerHTML =data[0].zhengshu;
}else{
	 document.getElementById(obj1).innerHTML ="您查询的代理商不存在";
}
                        setTimeout(btnEnabled, 2000);

                    });

            function btnEnabled() {

                $(this).attr("disabled", false);

            }
}
