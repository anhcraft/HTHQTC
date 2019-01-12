function named() {// create by Hoc Tin Hoc Qua Tro Choi
	var name=document.getElementById("name_id").value;
	var mdth=name.length;
	
	if (name == "") {
		alert('Bạn cần điền tên của bạn !');
	}
	
	else if (mdth < 1) {
		alert('Tên bạn phải trên 1 kí tự !');
	}
	
	else if (mdth > 50) {
		alert('Tên bạn chỉ được dưới 50 kí tự !');
	}
	
	else {		
		var ms = document.getElementById("name_id").value;
		document.getElementById("myname").innerHTML = '<action id="name">' + ms + '</action>';
		document.getElementById("myNewPage").open(playmenu());
	}
}

function playmenu() {
	var name = document.getElementById("name").innerHTML;
	document.getElementById("myNewPage").innerHTML = '<div id="tab_bar"><div id="name_account"><div id="account_id">Chào bạn' + ' ' + ' ' + ' ' + name + '</div></div><div id="myaccount"><a href="javascript:void(0);" class="myname" onclick="myaccount();">&nbsp;</a></div></div><div id="level_game"><button id="button_level1" onclick="start_1();">Vòng 1</button><button id="button_level2" onclick="starts_2();">Vòng 2</button><button id="button_level3" onclick="starts_3();">Vòng 3</button><button id="button_level4" onclick="starts_4();">Vòng 4</button></div><div id="popup"></div><div id="tools"><img src="./index_files/img_tools.png" id="button_tools" onclick="tools();" /></div>';
}

function starts_2() {
	alert('Bạn chưa hoàn thành vòng 1 !');
}	

function starts_3() {
	alert('Bạn chưa hoàn thành vòng 2 !');
}	

function starts_4() {
	alert('Bạn chưa hoàn thành vòng 3 !');
}

var myWindow;

function tools() {
	var writetools = '<div style="width: 400px; height: 450px; border: 1px solid #000; font-family:cursive; padding: 38px;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;">Thông Tin</p><br /><label style="display: -webkit-inline-box;  display: -moz-inline-box;">Ngôn ngữ</label><div id="myBrowsersLang" style="display: -webkit-inline-box;  display: -moz-inline-box;"></div><br /><label style="display: -webkit-inline-box;  display: -moz-inline-box;">Hệ Thống</label><div id="myBrowsers" style="display: -webkit-inline-box;   display: -moz-inline-box; margin-top: 10px;"></div><br /><label style="display: -webkit-inline-box;  display: -moz-inline-box;">Độ rõ</label><div title="MAX: 1000" style="  margin-top: 10px; margin-left: 50px;  display: -moz-inline-box; display: -webkit-inline-box;"><input title="MAX: 1000" type="range" style="margin-left: 78px;" id="myRange" onmousemove="opacitytools();" value="1000"></div><button id="run" onclick="run();">Hộp lệnh</button><button style="margin-left: 320px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 48px;" onclick="iwants();">Đồng ý</button></div>';
	document.getElementById("popup").innerHTML = writetools;
	document.getElementById("tools").innerHTML = '<img src="./index_files/img_tools.png" id="button_tools" onclick="closed_tools();" />';
	document.getElementById("myBrowsers").innerHTML = '<div title="' + 'Trình duyệt' + ' ' + browserName() + ',' + ' ' + 'phiên bản thứ' + ' ' + browserVersion() + '" style="margin-left: 100px;">' + browserName() + ' ' + 'v' + browserVersion() + '</div>';
    document.getElementById("myBrowsersLang").innerHTML = '<div style="margin-left: 100px;">' + browserLang() + '</div>';
}

function iwants() {
	document.getElementById("popup").innerHTML = '';
	document.getElementById("tools").innerHTML = '<img src="./index_files/img_tools.png" id="button_tools" onclick="tools();" />';
}	

function opacitytools() {
	var opacityvalue = document.getElementById("myRange").value;
	var opacitystyle = opacityvalue/100;
	
	document.getElementById("myBody").style.opacity = opacitystyle;
}

function browserName(){
   var Browser = navigator.userAgent;
   if (Browser.indexOf('MSIE') >= 0){
    Browser = 'MSIE';
   }
   else if (Browser.indexOf('Firefox') >= 0){
    Browser = 'Firefox';
   }
   else if (Browser.indexOf('Chrome') >= 0){
    Browser = 'Chrome';
   }
   else if (Browser.indexOf('Safari') >= 0){
    Browser = 'Safari';
   }
   else if (Browser.indexOf('Opera') >= 0){
      Browser = 'Opera';
   }
   else{
    Browser = 'UNKNOWN';
   }
   return Browser;
}

function browserLang(){
   var BrowserLanguage = navigator.language; 
   if (BrowersLanguage = "vi"){
    BrowserLang = 'Tiếng Việt';
   }  
   else if (BrowersLanguage = "en"){
    BrowserLang = 'Tiếng Anh';
   }   
   else{
    BrowserLang = 'UNKNOWN';
   }
   return BrowserLang;
}

function browserVersion(){
   var index;
   var version = 0;
   var name = browserName();
   var info = navigator.userAgent;
   index = info.indexOf(name) + name.length + 1;
   version = parseFloat(info.substring(index,index + 3));
   return version;
}