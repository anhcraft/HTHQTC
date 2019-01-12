$(document).ready(function() {
	$('button.sjGravity').live('click', function() { 
		$('body').jGravity({ 
			target: 'everything', // phần tử nào sẽ bị vỡ
			ignoreClass: 'moredile', //Không áp dụng với phần tử này
			weight: 15, // thời gian để các phần tử vỡ
			depth: 0.5, //Độ vỡ, 1 là tốt nhất
			drag: true // cho phép giữ và chuyển sang chỗ khác
		});	
	});
});	

$(document).ready(function() {
	$('button.sjGravity1').live('click', function() { 
		$('body').jGravity({ 
			target: 'everything', // phần tử nào sẽ bị vỡ
			ignoreClass: 'moredile', //Không áp dụng với phần tử này
			weight: 15, // thời gian để các phần tử vỡ
			depth: 0.25, //Độ vỡ, 1 là tốt nhất
			drag: true // cho phép giữ và chuyển sang chỗ khác
		});	
	});
});	

$(document).ready(function() {
	$('button.sjGravity3').live('click', function() { 
		$('body').jGravity({ 
			target: 'everything', // phần tử nào sẽ bị vỡ
			ignoreClass: 'moredile', //Không áp dụng với phần tử này
			weight: 15, // thời gian để các phần tử vỡ
			depth: 0.75, //Độ vỡ, 1 là tốt nhất
			drag: true // cho phép giữ và chuyển sang chỗ khác
		});	
	});
});

$(document).ready(function() {
	$('button.sjGravity4').live('click', function() { 
		$('body').jGravity({ 
			target: 'everything', // phần tử nào sẽ bị vỡ
			ignoreClass: 'moredile', //Không áp dụng với phần tử này
			weight: 15, // thời gian để các phần tử vỡ
			depth: 1, //Độ vỡ, 1 là tốt nhất
			drag: true // cho phép giữ và chuyển sang chỗ khác
		});	
	});
});	

function ejGravity() {
	document.getElementById("myNewPage").innerHTML = '<div id="tab_bar"><div id="name_account"><div id="account_id">Chào bạn   etetetet</div></div><div id="myaccount"><a href="javascript:void(0);" class="myname" onclick="myaccount();">&nbsp;</a></div></div><div id="level_game"><button id="button_level1" onclick="start_1();">Vòng 1</button><button id="button_level2" onclick="starts_2();">Vòng 2</button><button id="button_level3" onclick="starts_3();">Vòng 3</button><button id="button_level4" onclick="starts_4();">Vòng 4</button></div><div id="popup"><div style="width: 400px; height: 450px; border: 1px solid #000; font-family:cursive; padding: 38px;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;">Hộp CMD</p><br><textarea onkeydown="keycodecmd();" value="" id="cmdrun" placeholder="Nhấn Shift để tiếp tục..."></textarea><button onclick="cmdcoded();" id="setcode">OK</button><button style="margin-left: 320px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 30px;" onclick="exitcmd();">Thoát</button></div></div><div id="tools"><img src="./index_files/img_tools.png" id="button_tools" onclick="closed_tools();"></div>';	
}

function ejGravity1() {
	document.getElementById("myNewPage").innerHTML = '<div id="tab_bar"><div id="name_account"><div id="account_id">Chào bạn   etetetet</div></div><div id="myaccount"><a href="javascript:void(0);" class="myname" onclick="myaccount();">&nbsp;</a></div></div><div id="level_game"><button id="button_level1" onclick="start_1();">Vòng 1</button><button id="button_level2" onclick="starts_2();">Vòng 2</button><button id="button_level3" onclick="starts_3();">Vòng 3</button><button id="button_level4" onclick="starts_4();">Vòng 4</button></div><div id="popup"><div style="width: 400px; height: 450px; border: 1px solid #000; font-family:cursive; padding: 38px;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;">Hộp CMD</p><br><textarea onkeydown="keycodecmd();" value="" id="cmdrun" placeholder="Nhấn Shift để tiếp tục..."></textarea><button onclick="cmdcoded();" id="setcode">OK</button><button style="margin-left: 320px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 30px;" onclick="exitcmd();">Thoát</button></div></div><div id="tools"><img src="./index_files/img_tools.png" id="button_tools" onclick="closed_tools();"></div></div>';		
}

function ejGravity3() {
	document.getElementById("myNewPage").innerHTML = '<div id="myNewPage"><div id="tab_bar"><div id="name_account"><div id="account_id">Chào bạn   etetetet</div></div><div id="myaccount"><a href="javascript:void(0);" class="myname" onclick="myaccount();">&nbsp;</a></div></div><div id="level_game"><button id="button_level1" onclick="start_1();">Vòng 1</button><button id="button_level2" onclick="starts_2();">Vòng 2</button><button id="button_level3" onclick="starts_3();">Vòng 3</button><button id="button_level4" onclick="starts_4();">Vòng 4</button></div><div id="popup"><div style="width: 400px; height: 450px; border: 1px solid #000; font-family:cursive; padding: 38px;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;">Hộp CMD</p><br><textarea onkeydown="keycodecmd();" value="" id="cmdrun" placeholder="Nhấn Shift để tiếp tục..."></textarea><button onclick="cmdcoded();" id="setcode">OK</button><button style="margin-left: 320px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 30px;" onclick="exitcmd();">Thoát</button></div></div><div id="tools"><img src="./index_files/img_tools.png" id="button_tools" onclick="closed_tools();"></div>';		
}

function ejGravity4() {
	document.getElementById("myNewPage").innerHTML = '<div id="tab_bar"><div id="name_account"><div id="account_id">Chào bạn   etetetet</div></div><div id="myaccount"><a href="javascript:void(0);" class="myname" onclick="myaccount();">&nbsp;</a></div></div><div id="level_game"><button id="button_level1" onclick="start_1();">Vòng 1</button><button id="button_level2" onclick="starts_2();">Vòng 2</button><button id="button_level3" onclick="starts_3();">Vòng 3</button><button id="button_level4" onclick="starts_4();">Vòng 4</button></div><div id="popup"><div style="width: 400px; height: 450px; border: 1px solid #000; font-family:cursive; padding: 38px;"><p style="font-family: cursive; font-weight: 500; font-size: 30px;">Hộp CMD</p><br><textarea onkeydown="keycodecmd();" value="" id="cmdrun" placeholder="Nhấn Shift để tiếp tục..."></textarea><button onclick="cmdcoded();" id="setcode">OK</button><button style="margin-left: 320px; border-radius: 3px; background-color: #f00; color: #fff; font-size: small; font-weight: 700; padding: 5px 10px 5px 10px; font-family: cursive; border: #f00 solid 1px; margin-top: 30px;" onclick="exitcmd();">Thoát</button></div></div><div id="tools"><img src="./index_files/img_tools.png" id="button_tools" onclick="closed_tools();"></div>';		
}