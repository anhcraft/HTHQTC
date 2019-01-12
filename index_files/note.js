function note() {	
	var name = document.getElementById("name").innerHTML;

	document.getElementById("myNewPage").innerHTML = '<div id="myNewPage"><div id="tab_bar1"><div id="name_account"><div id="account_id">Chào bạn' + ' ' + ' ' + ' ' + name + '</div></div><div id="myaccount"><a href="javascript:void(0);" class="myname" onclick="myaccount();">&nbsp;</a></div></div><div id="level_game1"><button id="button_level1" onclick="start_1();">Vòng 1</button><button id="button_level2" onclick="starts_2();">Vòng 2</button><button id="button_level3" onclick="starts_3();">Vòng 3</button><button id="button_level4" onclick="starts_4();">Vòng 4</button></div><div id="popup" style="z-index:999999999999999 !important; position: fixed;  background: none !important;"></div><div id="notefull"><div id="toolsnote"><a id="caraution" href="javascript:void(0);" style="color:#fff !important;" onclick="exitthenote();">Exit</a><div id="commentspopup"></div></div><div allowtransparency="false" id="newnote"><div id="toolsmoredile"><div id="turndilebox"><div id="buttonboxdile"><div id="zoneboxed" onclick="open_moretools();"><p id="textdilebox">Công Cụ</p></div></div><div id="toolsbardile" style="display:none;"><div id="dile01" onclick="dile_new();"><a href="javascript:void(0)">Tạo mới</a></div><div id="dile02" onclick="dile_open();"><a href="javascript:void(0)">Mở tệp</a></div><div id="dile03" onclick="dile_save();"><a href="javascript:void(0)">Lưu tệp</a></div><div id="dile04" onclick="exitthenote();"><a href="javascript:void(0)">Đóng Note</a></div><div id="dile05" onclick="dile_print();"><a href="javascript:void(0)">In thành</a></div><div id="dile06" onclick="dile_encode();"><a href="javascript:void(0)">Mã hóa</a></div><div id="dile07" title="Dữ liệu bạn nhập sẽ lưu ở đây." onclick="dile_opendata();"><a href="javascript:void(0)">Lấy dữ liệu</a></div><div id="dile08" onclick="exporto();"><a href="javascript:void(0)">Xuất trang</a></div><div id="dile09" onclick="dile_write_editor();"><a href="javascript:void(0)">Công cụ viết</a></div><div id="dile10" onclick="dile_code_editor();"><a href="javascript:void(0)">Công cụ chỉnh mã</a></div><div id="dile11"><div id="111" onclick="stgo();" style=" padding: 10px;display: -webkit-inline-box;margin-right: 40px;transform: rotate(270deg);">---&gt;</div><div id="112" onclick="sdgo();" style=" padding: 10px;display: -webkit-inline-box; transform: rotate(90deg);">---&gt;</div></div></div></div></div><div oncopy="return true;" onpaste="return true;" oncut="return true;" spellcheck="false" dir="ltr" contenteditable="true" placeholder="Nhập vào đây..." id="notetable" onkeypress="savedifinerocer();" contextmenu="rightmousenote();" translate="no"></div></div></div><div id="tools1"><img src="./index_files/img_tools.png" id="button_toolse" onclick="tools();"></div></div>';     
	
	// create comment
	var c = document.createComment("css of note");
    document.body.appendChild(c);
	
	// create element: style
	var btn = document.createElement("STYLE");
    var t = document.createTextNode("");
    btn.appendChild(t);
    document.body.appendChild(btn);
	
	// create attributes of style
	var css = document.getElementsByTagName("STYLE")[0];   
    var att = document.createAttribute("id"); 
    att.value = "notecss";
    css.setAttributeNode(att); 
	
	
	// create comment
	var cs = document.createComment("javascript of note");
    document.body.appendChild(cs);
	
	// create element: script
	var btns = document.createElement("SCRIPT");
    var ts = document.createTextNode("");
    btns.appendChild(ts);
    document.body.appendChild(btns);
	
	// create attributes of script
	var cssd = document.body.getElementsByTagName("SCRIPT")[0];   
    var attd = document.createAttribute("id"); 
    attd.value = "js";
    cssd.setAttributeNode(attd); 
}

function sdgo() {
	document.getElementById('newnote').scrollTo(0, 20000);
}	

function stgo() {
	document.getElementById('newnote').scrollTo(0, -20000);
}

function dile_opendata(){
	var rs = document.getElementById("utf8exe").innerHTML;
	document.getElementById("notetable").innerHTML = rs;
}

function exporto() {	
	var y = document.getElementById("notetable");
    var x = y.getElementsByTagName("IMG")[0].getAttribute("src"); 
	
	document.getElementById("popup").innerHTML = '<div title="Chỉ đọc các file văn bản và hình ảnh" style="width: 200px; height: 300px; border: 2px dotted #fff; font-family:cursive; padding: 38px;margin-left: -200px;margin-top: 100px;background-color: #000;color: #fff;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;margin-top: -20px;" title="Chỉ đọc các file văn bản và hình ảnh">Mở - Open</p><button id="exports"><a href="' + x + '" download>Xuất sang định dạng ảnh</a></button><button style="margin-left: 180px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 25px;" onclick="exitexport();" title="Chỉ đọc các file văn bản và hình ảnh">OK</button></div>';	
}

function exitexport() {
	document.getElementById("popup").innerHTML = '';
}

function exitthenote() {
	var txt;
    var r = confirm(" Bạn có muốn thoát ? \n Dữ liệu data của bạn sẽ bị mất !");
    
	if (r == true) {
		document.getElementById("utf8exe").innerHTML = '';
		var name = document.getElementById("name").innerHTML;
		document.getElementById("myNewPage").innerHTML = '<div id="tab_bar"><div id="name_account"><div id="account_id">Chào bạn' + ' ' + ' ' + ' ' + name + '</div></div><div id="myaccount"><a href="javascript:void(0);" class="myname" onclick="myaccount();">&nbsp;</a></div></div><div id="level_game"><button id="button_level1" onclick="start_1();">Vòng 1</button><button id="button_level2" onclick="starts_2();">Vòng 2</button><button id="button_level3" onclick="starts_3();">Vòng 3</button><button id="button_level4" onclick="starts_4();">Vòng 4</button></div><div id="popup"></div><div id="tools"><img src="./index_files/img_tools.png" id="button_tools" onclick="tools();" /></div>';
	}
}

function savedifinerocer() {
	var rog = document.getElementById("notetable").innerHTML;
    document.getElementById("utf8exe").innerHTML = rog;
}
		
// open tool box
function open_moretools() {
	document.getElementById("toolsbardile").style.display = "block";
	document.getElementById("buttonboxdile").innerHTML = '<div id="zoneboxed" onclick="mozonare();"><p id="textdilebox">Cộng Cụ</p></div>';
}

// <- ->
function mozonare() {
	document.getElementById("buttonboxdile").innerHTML = '<div id="zoneboxed" onclick="open_moretools();"><p id="textdilebox">Cộng Cụ</p></div>';
	document.getElementById("toolsbardile").style.display = "none";
}

function dile_new() {
	document.getElementById("notetable").innerHTML = '';
}

function dile_open() {
	document.getElementById("popup").innerHTML = '<div title="Chỉ đọc các file văn bản và hình ảnh" style="width: 200px; height: 300px; border: 2px dotted #fff; font-family:cursive; padding: 38px;margin-left: -200px;margin-top: 100px;background-color: #000;color: #fff;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;margin-top: -20px;" title="Chỉ đọc các file văn bản và hình ảnh">Mở - Open</p><textarea id="textopen" placeholder="Ghi mã vào đây:"></textarea><div id="textconodio" title="Chỉ đọc các file văn bản và hình ảnh">Upload File :<input title="Chỉ đọc các file văn bản và hình ảnh" type="file" id="fileInput" style="margin-left: -15px;font-family: cursive;" /></div><button style="margin-left: 180px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 25px;" onclick="oknotecomed();" title="Chỉ đọc các file văn bản và hình ảnh">OK</button></div>';

// check and read images or text files
// Code reader edited into text files and images, code spread from http://adf.ly/1J3m7s	
	var fileInput = document.getElementById("fileInput");
	var fileDisplayArea = document.getElementById("notetable");

	fileInput.addEventListener('change', function(e) {
		var file = fileInput.files[0];
		var textType = /text.*/;
		var imageType = /image.*/;

		if (file.type.match(textType)) {
			var reader = new FileReader();

			reader.onload = function(e) {
				fileDisplayArea.innerText = reader.result;
			}

			reader.readAsText(file);	
		} 
		
		if (file.type.match(imageType)) {
			var reader = new FileReader();

			reader.onload = function(e) {
				fileDisplayArea.innerHTML = "";
					
				var img = new Image();
				img.src = reader.result;

				fileDisplayArea.appendChild(img);
			}

			reader.readAsDataURL(file);			
		}	
	});
}

function oknotecomed() {
	var code = document.getElementById("textopen").value;
	
	if(code === "") {
		document.getElementById("popup").innerHTML = '';
	}

	else {	
	    document.getElementById("notetable").innerHTML = code;
		document.getElementById("popup").innerHTML = '';
	}
}

function oknotecomeds() {
	document.getElementById("popup").innerHTML = '';
}

function dile_save() {
	document.getElementById("popup").innerHTML = '<div style="width: 200px; height: 300px; border: 2px dotted #fff; font-family:cursive; padding: 38px;margin-left: -200px;margin-top: 100px;background-color: #000;color: #fff;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;margin-top: -20px;">Lưu - Save</p><button id="herdiongoesder" onclick="getcodedile();">Lấy mã</button><textarea id="textsaved" placeholder=""></textarea><button style="margin-left: 180px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 25px;" onclick="oknotecomeds();">OK</button></div>';
}

function getcodedile() {
	var code = document.getElementById("notetable").innerHTML;
	document.getElementById("textsaved").value = code;
}

function dile_print() {
    window.print();
}

function dile_encode() {
	document.getElementById("popup").innerHTML = '<div style="width: 200px; height: 300px; border: 2px dotted #fff; font-family:cursive; padding: 38px;margin-left: -200px;margin-top: 100px;background-color: #000;color: #fff;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;margin-top: -20px;">Mã hóa - Encode</p><div id="setselect"><input type="radio" id="tcm" name="encode" value="TCM" checked>TCM<br /><input type="radio" name="encode" id="uri" value="URI">URI</div><button style="margin-left: 180px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 25px;" onclick="oknotecomedse();">OK</button></div>';
}

function oknotecomedse() {
	var ce = document.getElementById("tcm").checked;
	
	if(ce === false) {
		var roge = document.getElementById("notetable");
		var top = roge.innerHTML;
		var res = encodeURI(top);
		document.getElementById("notetable").innerHTML = res;
		document.getElementById("popup").innerHTML = '';
	}
	
	if(ce === true) {
		alert('No data about this encoder !');
		document.getElementById("popup").innerHTML = '';
	}
}

function dile_back() {
	document.getElementById("toolsbardile").innerHTML = '<div id="dile01" onclick="dile_new();"><a href="javascript:void(0)">Tạo mới</a></div><div id="dile02" onclick="dile_open();"><a href="javascript:void(0)">Mở tệp</a></div><div id="dile03" onclick="dile_save();"><a href="javascript:void(0)">Lưu tệp</a></div><div id="dile04" onclick="exitthenote();"><a href="javascript:void(0)">Đóng Note</a></div><div id="dile05" onclick="dile_print();"><a href="javascript:void(0)">In thành</a></div><div id="dile06" onclick="dile_encode();"><a href="javascript:void(0)">Mã hóa</a></div><div id="dile07" title="Dữ liệu bạn nhập sẽ lưu ở đây." onclick="dile_opendata();"><a href="javascript:void(0)">Lấy dữ liệu</a></div><div id="dile08" onclick="exporto();"><a href="javascript:void(0)">Xuất trang</a></div><div id="dile09" onclick="dile_write_editor();"><a href="javascript:void(0)">Công cụ viết</a></div><div id="dile10" onclick="dile_code_editor();"><a href="javascript:void(0)">Công cụ chỉnh mã</a></div><div id="dile11"><div id="111" onclick="stgo();" style="  padding: 10px;display: -webkit-inline-box;margin-right: 40px;transform: rotate(270deg);">---&gt;</div><div id="112" onclick="sdgo();" style="  padding: 10px;display: -webkit-inline-box; transform: rotate(90deg);">---&gt;</div></div>';	
}

function dile_code_editor() {
	document.getElementById("toolsbardile").innerHTML = '<div id="dile_a0" onclick="dile_back();"><a href="javascript:void(0);"><-- Quay lại</a></div><div id="dile_a1" onclick="dile_html_editor();"><a href="javascript:void(0);">HTML Editor</a></div><div id="dile_a2" onclick="dile_css_editor();"><a href="javascript:void(0);">CSS Editor</a></div><div id="dile_a3" onclick="dile_js_editor();"><a href="javascript:void(0);">JS Editor</a></div><div id="dile_a4" onclick="dile_run_code();"><a href="javascript:void(0);">Thử code</a></div>';	
}

function dile_write_editor() {
	document.getElementById("toolsbardile").innerHTML = '<div id="s" onclick="dile_back();"><a href="javascript:void(0);"><-- Quay lại</a></div><div id="s1" onclick="dile_s1();"><a href="javascript:void(0);">Tô đậm</a></div><div id="s2" onclick="dile_s2();"><a href="javascript:void(0);">In nghiêng</a></div><div id="s3" onclick="dile_s3();"><a href="javascript:void(0);">Gạch dưới</a></div><div id="s" onclick="dile_s4();"><a href="javascript:void(0);">Phông chữ</a></div><div id="s" onclick="dile_s5();"><a href="javascript:void(0);">Cỡ chữ</a></div><div id="s" onclick="dile_s6();"><a href="javascript:void(0);">Màu chữ</a></div><div id="s" onclick="dile_s7();"><a href="javascript:void(0);">Tô chữ</a></div><div id="s" onclick="dile_s8();"><a href="javascript:void(0);">Hàng số</a></div><div id="s" onclick="dile_s9();"><a href="javascript:void(0);">Hàng chấm tròn</a></div><div id="s1" onclick="dile_s10();"><a href="javascript:void(0);">Qua trang --></a></div>';
}

function dile_s10() {
	document.getElementById("toolsbardile").innerHTML = '<div id="s" onclick="dile_write_editor();"><a href="javascript:void(0);"><-- Quay lại</a></div><div id="s" onclick="dile_s12();"><a href="javascript:void(0);">Canh lề</a></div><div id="s" onclick="dile_s13();"><a href="javascript:void(0);">Liên kết</a></div><div id="s" onclick="dile_s14();"><a href="javascript:void(0);">Thêm ảnh</a></div><div id="s" onclick="dile_s15();"><a href="javascript:void(0);">Thêm nhạc</a></div><div id="s" onclick="dile_s16();"><a href="javascript:void(0);">Thêm nút ấn</a></div><div id="s" onclick="dile_s17();"><a href="javascript:void(0);">Thêm video</a></div><div id="s" onclick="dile_s18();"><a href="javascript:void(0);">Hiệu ứng</a></div><div id="s" onclick="dile_s19();"><a href="javascript:void(0);">Thêm tập tin</a></div><div id="s" onclick="dile_s20();"><a href="javascript:void(0);">Biểu tượng vui</a></div>';
}

// dile_code_editor
function dile_html_editor() {
	document.getElementById("popup").innerHTML = '<div style="width: 200px; height: 300px; border: 2px dotted #fff; font-family:cursive; padding: 38px;margin-left: -200px;margin-top: 100px;background-color: #000;color: #fff;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;margin-top: -20px;">HTML Editor</p><textarea id="textcodehtml" placeholder=""></textarea><button style=" border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 5px;width: 200px;" onclick="savecodehtml();">Đóng và lưu</button></div>';

	var html = document.getElementById("notetable").innerHTML;
	document.getElementById("textcodehtml").value = html;
}

function savecodehtml() {
	var html = document.getElementById("textcodehtml").value;
	
	if(html === "") {
		document.getElementById("popup").innerHTML = '';
	}
	
	else {
		document.getElementById("notetable").innerHTML = html;
		document.getElementById("popup").innerHTML = '';		
	}
}

function dile_css_editor() {
	document.getElementById("popup").innerHTML = '<div style="width: 200px; height: 300px; border: 2px dotted #fff; font-family:cursive; padding: 38px;margin-left: -200px;margin-top: 100px;background-color: #000;color: #fff;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;margin-top: -20px;">CSS Editor</p><textarea id="textcodecss" placeholder=""></textarea><button style=" border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 5px;width: 200px;" onclick="savecodecss();">Đóng và lưu</button></div>';
	
	var css = document.getElementById("notecss").innerHTML;
	document.getElementById("textcodecss").value = css;	
}

function savecodecss() {
	var css = document.getElementById("textcodecss").value;
	
	if(css === "") {
		document.getElementById("popup").innerHTML = '';
	}
	
	else {
		document.getElementById("notecss").innerHTML = css;
		document.getElementById("popup").innerHTML = '';		
	}
}

function dile_js_editor() {
	document.getElementById("popup").innerHTML = '<div style="width: 200px; height: 300px; border: 2px dotted #fff; font-family:cursive; padding: 38px;margin-left: -200px;margin-top: 100px;background-color: #000;color: #fff;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;margin-top: -20px;">JS Editor</p><textarea id="textcodejs" placeholder=""></textarea><button style=" border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 5px;width: 200px;" onclick="savecodejs();">Đóng và lưu</button></div>';
	
	var js = document.getElementById("js").innerHTML;
	document.getElementById("textcodejs").value = js;	
}

function savecodejs() {
	var js = document.getElementById("textcodejs").value;
	
	if(js === "") {
		document.getElementById("popup").innerHTML = '';
	}
	
	else {
		document.getElementById("js").innerHTML = js;
		document.getElementById("popup").innerHTML = '';		
	}
}

function dile_run_code() {
	var html = document.getElementById("notetable").innerHTML;
	var css = document.getElementById("notecss").innerHTML;
	var js = document.getElementById("js").innerHTML;
	var height = screen.availHeight;
	var width = screen.width;
	
	var myWindowDemo = window.open("");
	myWindowDemo.document.write('<!DOCTYPE html><html><head><title>Bảng thử code</title><!-- This is a test window code --><meta charset="utf-8" /><meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1"/><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/><meta name="apple-mobile-web-app-capable" content="yes"/><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="robots" content="noodp,index,follow" /><meta name="description" content="Đây là một cửa sổ thử nghiệm." /><meta name="window" content="demo-popup" /><meta name="oncode" content="html5" /><meta name="version" content="2.3.6" /><style>' + css + '</style></head><body id="notetable">' + html + '<script>' + js + '</script></body></html>');
}

// END: dile_code_editor commentspopup