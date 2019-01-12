function run() {
	var writerun = '<div style="width: 400px; height: 450px; border: 1px solid #000; font-family:cursive; padding: 38px;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;">Hộp lệnh</p><br /><input type="text" onkeydown="keycoderun();" id="coderun" placeholder="Ghi lệnh vào đây..." /><button onclick="setcoded();" id="setcode">OK</button><button style="margin-left: 320px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 165px;" onclick="exitrun();">Thoát</button></div></div>';
	
	document.getElementById("popup").innerHTML = writerun;
}

function exitrun() {
    var writetools = '<div style="width: 400px; height: 450px; border: 1px solid #000; font-family:cursive; padding: 38px;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;">Thông Tin</p><br /><label style="display: -webkit-inline-box;  display: -moz-inline-box;">Ngôn ngữ</label><div id="myBrowsersLang" style="display: -webkit-inline-box;  display: -moz-inline-box;"></div><br /><label style="display: -webkit-inline-box;  display: -moz-inline-box;">Hệ Thống</label><div id="myBrowsers" style="display: -webkit-inline-box;   display: -moz-inline-box; margin-top: 10px;"></div><br /><label style="display: -webkit-inline-box;  display: -moz-inline-box;">Độ rõ</label><div title="MAX: 1000" style="  margin-top: 10px; margin-left: 50px;  display: -moz-inline-box; display: -webkit-inline-box;"><input title="MAX: 1000" type="range" style="margin-left: 78px;" id="myRange" onmousemove="opacitytools();" value="1000"></div><button id="run" onclick="run();">Hộp lệnh</button><button style="margin-left: 320px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 48px;" onclick="iwants();">Đồng ý</button></div>';
	document.getElementById("popup").innerHTML = writetools;
	document.getElementById("myBrowsers").innerHTML = '<div title="' + 'Trình duyệt' + ' ' + browserName() + ',' + ' ' + 'phiên bản thứ' + ' ' + browserVersion() + '" style="margin-left: 100px;">' + browserName() + ' ' + 'v' + browserVersion() + '</div>';
    document.getElementById("myBrowsersLang").innerHTML = '<div style="margin-left: 100px;">' + browserLang() + '</div>';
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

function keycoderun() {
     var key = window.event.keyCode;     

     if(key == 13 || key == 27 || key == 16) {
        setcoded();
	}
}  

function setcoded() {
	var scode = document.getElementById("coderun").value;
	
	if(scode === "//cmd") {
		cmd();
	}
	
	if(scode === "//note") {
		note();
	}

    if(scode === "//help") {
		 window.open('http://phanmemtinhoctre.weebly.com/tr7907-giuacutep');
	}
	
	if(scode === "//link") {
		var linked = window.prompt('Tôi muốn đến trang này :', 'http://');
		alert('OK ! Ban sẽ được chuyển đến trang' + ' ' + linked + ' ' + 'trong vài giây nữa...');
	    setTimeout(function(){ window.open(linked);	}, 2000);
	}
	
	if(scode === "//googlevn") {
	    window.open('htttp://google.com.vn/');	
	}
	
	if(scode === "//google") {
		window.open('http://google.run');
	}
	
	if(scode === "//website") {
        window.open('http://phanmemtinhoctre.weebly.com/');
	}
	
	if(scode === "//calculator") {
        window.open('https://goo.gl/PMhs8L');
	}
	
	if(scode === "//exit") {
		var r = confirm("Bạn có muốn thoát trang này không ?");
		
		if(r === true) {
			window.close();
		}
	}
	
	if(scode === "//key") {
		key();
	}
	
	if(scode === "//talk"){
		var talk1 = window.prompt('Xin chào bạn, tôi là Quản trị viên trò chơi này, còn tên bạn là gì ?', '');
		
		if(talk1 === "Admin" || talk1 === "quản trị viên" || talk1 === "Quản trị viên" || talk1 === "admin") {
			var talk2a = window.prompt('Ồ, bạn cũng là một quản trị viên như tôi, vậy bạn làm việc ở đâu thế ?', '');
			
			if(talk2a === "Tôi không biết" || talk2a === "tôi không biết") {
				alert('Cảm ơn bạn' + ' ' + talk1 + ' ' + 'đã đến với cuộc trò chuyện này. Tạm biệt bạn !');
			}
			
			else {
				alert('Cảm ơn bạn' + ' ' + talk1 + ' ' + 'đã đến với cuộc trò chuyện này. Tạm biệt bạn !');				
			}
		}
		
		else {
			var talk2b = window.prompt('Ồ, chào bạn' + ' ' + talk1 + ' ' + ', bạn có phải là một học sinh không ?', '');
			
			if(talk2b === "phải") {
					alert('Cảm ơn bạn' + ' ' + talk1 + ' ' + 'đã đến với cuộc trò chuyện này. Tạm biệt bạn !');			
			}
			
			else{
				alert('Cảm ơn bạn' + ' ' + talk1 + ' ' + 'đã đến với cuộc trò chuyện này. Tạm biệt bạn !');
			}
		}
	}
	
	if(scode === "//open.mp3") {
		window.open('http://mp3.zing.vn/');
	}
	
	if(scode === "//open.mp4") {
		window.open('http://youtube.com/');
	}
	
	if(scode === "//open.svg") {
		window.open('http://www.drawsvg.org/');
	}
	
	if(scode === "//figcom") {
		figcom();
	}
	
	if(scode === "//facebook") {
		window.open('https://facebook.com/');	
	}
	
	if(scode === "//uplade") {
		uplade();
	}

	if(scode === "_gravity") {
		gravity();
	}
	
	if(scode === "_gravity_1/4") {
		gravity1();
	}
	
	if(scode === "_gravity_3/4") {
		gravity3();
	}
	
	if(scode === "_gravity_super") {
		gravity4();
	}
	
	if(scode === "_360s") {
		s360();
	}
	
	if(scode === "_180s") {
		s180();
	}
	
	if(scode === "_#360s") {
		s360s();
	}
	
	if(scode === "_#180s") {
		s180s();
	}
}

function gravity1() {
	var writejgravity1 = '<div class="tablejGravity"><button class="sjGravity1">Start</button><button onclick="ejGravity1();">End</button></div>';
	document.getElementById("popup").innerHTML = writejgravity1;	
}

function gravity3() {
	var writejgravity3 = '<div class="tablejGravity"><button class="sjGravity3">Start</button><button onclick="ejGravity3();">End</button></div>';
	document.getElementById("popup").innerHTML = writejgravity3;	
}

function gravity4() {
	var writejgravity4 = '<div class="tablejGravity"><button class="sjGravity4">Start</button><button onclick="ejGravity4();">End</button></div>';
	document.getElementById("popup").innerHTML = writejgravity4;	
}

function s180() {
    // Code for Chrome, Safari, Opera
    document.getElementById("myBody").style.WebkitTransform = "rotate(180deg)"; 
    // Code for IE9
    document.getElementById("myBody").style.msTransform = "rotate(180deg)"; 
    // Standard syntax
    document.getElementById("myBody").style.transform = "rotate(180deg)"; 
}

function s360() {
	// Code for Chrome, Safari, Opera
    document.getElementById("myBody").style.WebkitTransform = "rotate(360deg)"; 
    // Code for IE9
    document.getElementById("myBody").style.msTransform = "rotate(360deg)"; 
    // Standard syntax
    document.getElementById("myBody").style.transform = "rotate(360deg)"; 
}

function s180s() {
	document.getElementById("myBody").style.WebkitAnimation = "ms180 4s 1"; // Code for Chrome, Safari and Opera
    document.getElementById("myBody").style.animation = "ms180 4s 1";
}

function s360s() {
	document.getElementById("myBody").style.WebkitAnimation = "ms360 4s 1"; // Code for Chrome, Safari and Opera
    document.getElementById("myBody").style.animation = "ms360 4s 1";	
}

function uplade() {
	var writeruny = '<div style="width: 400px; height: 450px; border: 1px solid #000; font-family:cursive; padding: 28px;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;">Bộ xử lý hệ thống >> Uplade</p><p style="margin-top: -25px;">Sao chép code sau và gửi cho <a href="http://goo.gl/nj0Dhc">hệ thống</a>.</p><p style="font-size: 12px;">$uplade (e)=version { %[ new version = 5.8.1; new check = true &amp;&amp; == 5.8.1; new get - new newversion { checkversion = true; checksystem = true; checkapparatus = true; checkmanage = true; namestatus = MZ-xxx; ^^%( ID == {9674-5581-0029-6320}; )%^^ } new set &amp;&amp; cookies { load.server(); @#server: local 1:no; local 2:no; local 3:no; local 4:no; @#   return true; get.element(this);	} new level; new figure; new set; new time; load.newUplade(); ]% $({ condition: this; load.newUplade(); })$ return true; }</p><button style="margin-left: 320px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 16px;" onclick="exite();">Thoát</button></div></div>';
	
	document.getElementById("popup").innerHTML = writeruny;
}

function exite() {
		var writeruns = '<div style="width: 400px; height: 450px; border: 1px solid #000; font-family:cursive; padding: 38px;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;">Hộp lệnh</p><br /><input type="text" onkeydown="keycoderun();" id="coderun" placeholder="Ghi lệnh vào đây..." /><button onclick="setcoded();" id="setcode">OK</button><button style="margin-left: 320px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 165px;" onclick="exitrun();">Thoát</button></div></div>';
	
	   document.getElementById("popup").innerHTML = writeruns;
}

function figcom() {
	var writerunyes = '<div style="width: 400px; height: 450px; border: 1px solid #000; font-family:cursive; padding: 28px;"><p style="font-family: cursive; font-weight: 500; font-size: 25px;">Bộ xử lý hệ thống >> Thông Tin</p><p>ID: 9674-5581-0029-6320</p><p>Phiên bản: 5.8.1</p><p>Load server: false</p><p>Chưa&nbsp;<a href="javascript:void(0);" style="color:red;" onclick="key();">kích hoạt</a></p><button style="margin-left: 320px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 16px;" onclick="exite();">Thoát</button></div></div>';
	
	document.getElementById("popup").innerHTML = writerunyes;
}

function key() {
	var writerunsop = '<div style="width: 400px; height: 450px; border: 1px solid #000; font-family:cursive; padding: 18px 38px 120px 38px;"><p style="font-family: cursive; font-weight: 500; font-size: 20px;">Bộ xử lý hệ thống &gt;&gt; Kích hoạt</p><iframe src="https://docs.google.com/forms/d/1gGMz2zkxAawBASj5CUOmilA-Uvgw_hjN2XION7aYPDk/viewform?embedded=true" width="420" height="400" frameborder="0" marginheight="0" marginwidth="0">Đang tải...</iframe><button style="margin-left: 320px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 16px;" onclick="exite();">Thoát</button></div>';
	
	document.getElementById("popup").innerHTML = writerunsop;
}