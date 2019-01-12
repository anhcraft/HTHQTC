function cmd() {
	var writerun = '<div style="width: 400px; height: 450px; border: 1px solid #000; font-family:cursive; padding: 38px;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;">Hộp CMD</p><br /><textarea onkeydown="keycodecmd();" value="" id="cmdrun" placeholder="Nhấn Shift để tiếp tục..."></textarea><button onclick="cmdcoded();" id="setcode">OK</button><button style="margin-left: 320px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 30px;" onclick="exitcmd();">Thoát</button></div></div>';
	
	document.getElementById("popup").innerHTML = writerun;
}

function exitcmd() {
	document.getElementById("popup").innerHTML = '<div style="width: 400px; height: 450px; border: 1px solid #000; font-family:cursive; padding: 38px;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;">Hộp lệnh</p><br /><input type="text" id="coderun" placeholder="Ghi lệnh vào đây..." /><button onclick="setcoded();" id="setcode">OK</button><button style="margin-left: 320px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 165px;" onclick="exitrun();">Thoát</button></div></div>';
}

function keycodecmd() {
     var key = window.event.keyCode;     

     if(key == 27 || key == 16 || key == 13) {
        cmdcode();
	}
}  

function cmdcode() {
    var codecmd = document.getElementById("cmdrun").value;
	 
	if(codecmd === "gravity") {
		gravity();
	} 
	
	if(codecmd === "note") {
		note();
    }
	
	if(codecmd === "search") {
		var urlgo = window.prompt('Tìm kiếm của Google :', '');
		window.open('https://www.google.com.vn/?q=' + urlgo + '#newwindow=1&q=' + urlgo);
	}
	
	if(codecmd === "searchcc") {
		var urlgocc = window.prompt('Tìm kiếm của Cốc Cốc :', '');
		window.open('http://coccoc.com/search#query=' + urlgocc);
	}
	
	if(codecmd === "today") {
		switch (new Date().getDay()) {
			case 0:
				day = "chủ nhật";
				break;
			case 1:
				day = "thứ hai";
				break;
			case 2:
				day = "thú ba";
				break;
			case 3:
				day = "thứ tư";
				break;
			case 4:
				day = "thứ năm";
				break;
			case 5:
				day = "thứ sáu";
				break;
			case  6:
				day = "thứ bảy";
				break;
		}
		alert('Hôm nay là ngày' + ' ' + day + '.');
	}
	
	if(codecmd === "ct#link") {
		var link1ct = window.prompt('Link bạn cần tạo :', '');
		var link2ct = window.prompt('Title link bạn cần tạo :', '');
		var link3ct = window.prompt('Text link bạn cần tạo :', '');
		var totlink = '<a href="' + link1ct + '" title="' + link2ct + '">' + link3ct + '</a>';
		window.alert('Đây là link của bạn : \n     \n' + totlink);		
	}
	
	if(codecmd === "ct#mscm") {
		var mscm = window.prompt('m :', '');
		var mscmtm = mscm*100;
		window.alert(mscm + ' ' + 'm =' + ' ' + mscmtm + ' ' + 'cm');			
	}
	
	if(codecmd === "ct#cmsm") {
		var cmsm = window.prompt('cm:', '');
		var cmsmtm = cmsm/100;
		window.alert(cmsm + ' ' + 'cm =' + ' ' + cmsmtm + ' ' + 'm');	
	}
	
	if(codecmd === "ct#ts_vi-en") {
		var tratext = window.prompt('Tôi muốn dịch sang tiếng Anh câu này :', '');
		window.open('https://translate.google.com.vn/#vi/en/' + tratext);
	}
	
	if(codecmd === "ct#ts_en-vi") {
		var tratext1 = window.prompt('Tôi muốn dịch sang tiếng Việt câu này :', '');
		window.open('https://translate.google.com.vn/#en/vi/' + tratext1);		
	}
	
	if(codecmd === "gmail") {
		window.open('https://mail.google.com/mail/');
	}
	
	if(codecmd === "gdocs") {
		window.open('https://www.google.com/docs/about/');		
	}
	
	if(codecmd === "gstore") {
		window.open('https://play.google.com/');		
	}
	
	if(codecmd === "gtrans") {
		window.open('https://translate.google.com.vn/');
	}
	
	if(codecmd === "search%youtube") {
		var urlvideo = window.prompt('Tìm kiếm Youtube', '');
		window.open('https://www.youtube.com/results?search_query=' + urlvideo);
	}
}

function gravity() {
	var writejgravity = '<div class="tablejGravity"><button class="sjGravity">Start</button><button onclick="ejGravity();">End</button></div>';
	document.getElementById("popup").innerHTML = writejgravity;
}