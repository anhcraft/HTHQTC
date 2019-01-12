/*/
/ create by Hoc Tin Hoc Qua Tro Choi
	|| 	Welcome to file check post 3 ! 	||
 
	<< 
			Version: 0.3.4 
			Created by: [Author Software]
	>>

		Starting post 3 and test post 3.
		There will be a total of 10 questions with 10 questions test and test commands [?] content between the prior and current card.
*/

// bắt đầu vào bài 3
function start_3() {
    document.getElementById("myPage").innerHTML = '';

    document.getElementById("myNewPage").innerHTML = '<div id="floatingBarsG"><div class="blockG" id="rotateG_01"></div><div class="blockG" id="rotateG_02"></div><div class="blockG" id="rotateG_03"></div><div class="blockG" id="rotateG_04"></div><div class="blockG" id="rotateG_05"></div><div class="blockG" id="rotateG_06"></div><div class="blockG" id="rotateG_07"></<div class="blockG" id="rotateG_08"></div></div>';

    setTimeout(function() {
        playv31()
    }, 5000);
}

// 1
function playv31() {
    document.getElementById("myNewPage").innerHTML = '<div id="bg_game3"><div id="start_game3"><div id="text_none">&nbsp;</div><div id="game3"><div id="layoutable"><div id="startingv31"><p class="textstarting">case</p></div></div><div id="boxmore"><div id="txtcheck1"></div><div id="mytextv31"><input type="text" id="mytextd31" onkeydown="v3key1();" placeholder="Điền từ vào đây nha bạn !" /></div><div id="mytiev31">17</div></div></div></div></div>';

    times31 = setTimeout(function() {
        document.getElementById("v3ed").innerHTML = '<action id="31">0</action>';
        clearInterval(timev31);
        clearTimeout(times31);
        playv32();
    }, 17000);

    timev31 = setInterval(function() {
        var gera = document.getElementById("mytiev31").innerHTML;
        var turs = gera * 2 / 2;
        var merd = turs - 1;
        document.getElementById("mytiev31").innerHTML = merd;
    }, 1000);
}

function v3key1() {
    var key = window.event.keyCode;

    if (key == 13) {
        check_031();
    }
}

function check_031() {
    var text31 = document.getElementById("mytextd31").value;

    if (text31 === "case") {
        document.getElementById("v3ed").innerHTML = '<action id="31">10</action>';
        document.getElementById("txtcheck1").innerHTML = '<div class="icheck" style="color:green;">Chính xác</div>';
        clearInterval(timev31);
        clearTimeout(times31);
        playv32();
    } else {
        var point31b = conky31 + 0;
        document.getElementById("v3ed").innerHTML = '<action id="31">' + point31b + '</action>';
        document.getElementById("txtcheck1").innerHTML = '<div class="icheck" style="color:red;">Sai</div>';
        clearInterval(timev31);
        clearTimeout(times31);
        playv32();
    }
}

// 2
function playv32() {
    document.getElementById("bg_game3").innerHTML = '<div id="start_game3"><div id="text_none">&nbsp;</div><div id="game3"><div id="layoutable"><div id="startingv32"><p class="textstarting">phone</p></div></div><div id="boxmore"><div id="txtcheck2"></div><div id="mytextv32"><input type="text" id="mytextd32" onkeydown="v3key2();" placeholder="Điền từ vào đây nha bạn !" /></div><div id="mytiev32">16</div></div></div></div>';

    times32 = setTimeout(function() {
        document.getElementById("v3ed").innerHTML = '<action id="32">0</action>';
        clearInterval(timev32);
        clearTimeout(times32);
        playv33();
    }, 16000);

    timev32 = setInterval(function() {
        var gera = document.getElementById("mytiev32").innerHTML;
        var turs = gera * 2 / 2;
        var merd = turs - 1;
        document.getElementById("mytiev32").innerHTML = merd;
    }, 1000);
}

function v3key2() {
    var key = window.event.keyCode;

    if (key == 13) {
        check_032();
    }
}

function check_032() {
    var text32 = document.getElementById("mytextd32").value;
    var texted32s = document.getElementById("31").innerHTML;
    var conky = texted32s * 2 / 2;

    if (text32 === "phone") {
        var point32a = conky + 10;
        document.getElementById("v3ed").innerHTML = '<action id="32">' + point32a + '</action>';
        document.getElementById("txtcheck2").innerHTML = '<div class="icheck" style="color:green;">Chính xác</div>';
        clearInterval(timev32);
        clearTimeout(times32);
        playv33();
    } else {
        var point32b = conky32 + 0;
        document.getElementById("v3ed").innerHTML = '<action id="32">' + point32b + '</action>';
        document.getElementById("txtcheck2").innerHTML = '<div class="icheck" style="color:red;">Sai</div>';
        clearInterval(timev32);
        clearTimeout(times32);
        playv33();
    }
}

// 3
function playv33() {
    document.getElementById("myNewPage").innerHTML = '<div id="bg_game3"><div id="start_game3"><div id="text_none">&nbsp;</div><div id="game3"><div id="layoutable"><div id="startingv33"><p class="textstarting">Mouse</p></div></div><div id="boxmore"><div id="txtcheck3"></div><div id="mytextv33"><input type="text" id="mytextd33" onkeydown="v3key3();" placeholder="Điền từ vào đây nha bạn !" /></div><div id="mytiev33">14</div></div></div></div></div>';

    times33 = setTimeout(function() {
        document.getElementById("v3ed").innerHTML = '<action id="33">0</action>';
        clearInterval(timev33);
        clearTimeout(times33);
        playv34();
    }, 14000);

    timev33 = setInterval(function() {
        var gera = document.getElementById("mytiev33").innerHTML;
        var turs = gera * 2 / 2;
        var merd = turs - 1;
        document.getElementById("mytiev33").innerHTML = merd;
    }, 1000);
}

function v3key3() {
    var key = window.event.keyCode;

    if (key == 13) {
        check_033();
    }
}

function check_033() {
    var text33 = document.getElementById("mytextd33").value;
    var texted33s = document.getElementById("32").innerHTML;
    var conky3 = texted33s * 2 / 2;

    if (text33 === "Mouse") {
        var point33a = conky3 + 10;
        document.getElementById("v3ed").innerHTML = '<action id="33">' + point33a + '</action>';
        document.getElementById("txtcheck3").innerHTML = '<div class="icheck" style="color:green;">Chính xác</div>';
        clearInterval(timev33);
        clearTimeout(times33);
        playv34();
    } else {
        var point33b = conky3 + 0;
        document.getElementById("v3ed").innerHTML = '<action id="33">' + point33b + '</action>';
        document.getElementById("txtcheck3").innerHTML = '<div class="icheck" style="color:red;">Sai</div>';
        clearInterval(timev33);
        clearTimeout(times33);
        playv34();
    }
}

// 4
function playv34() {
    document.getElementById("myNewPage").innerHTML = '<div id="bg_game3"><div id="start_game3"><div id="text_none">&nbsp;</div><div id="game3"><div id="layoutable"><div id="startingv34"><p class="textstarting">SCreen</p></div></div><div id="boxmore"><div id="txtcheck4"></div><div id="mytextv34"><input type="text" id="mytextd34" onkeydown="v3key4();" placeholder="Điền từ vào đây nha bạn !" /></div><div id="mytiev34">14</div></div></div></div></div>';

    times34 = setTimeout(function() {
        document.getElementById("v3ed").innerHTML = '<action id="34">0</action>';
        clearInterval(timev34);
        clearTimeout(times34);
        playv35();
    }, 14000);

    timev34 = setInterval(function() {
        var gera = document.getElementById("mytiev34").innerHTML;
        var turs = gera * 2 / 2;
        var merd = turs - 1;
        document.getElementById("mytiev34").innerHTML = merd;
    }, 1000);
}

function v3key4() {
    var key = window.event.keyCode;

    if (key == 13) {
        check_034();
    }
}

function check_034() {
    var text34 = document.getElementById("mytextd34").value;
    var texted34s = document.getElementById("33").innerHTML;
    var conky4 = texted34s * 2 / 2;

    if (text34 === "SCreen") {
        var point34a = conky4 + 10;
        document.getElementById("v3ed").innerHTML = '<action id="34">' + point34a + '</action>';
        document.getElementById("txtcheck4").innerHTML = '<div class="icheck" style="color:green;">Chính xác</div>';
        clearInterval(timev34);
        clearTimeout(times34);
        playv35();
    } else {
        var point34b = conky4 + 0;
        document.getElementById("v3ed").innerHTML = '<action id="34">' + point34b + '</action>';
        document.getElementById("txtcheck4").innerHTML = '<div class="icheck" style="color:red;">Sai</div>';
        clearInterval(timev34);
        clearTimeout(times34);
        playv35();
    }
}

// 5
function playv35() {
    document.getElementById("myNewPage").innerHTML = '<div id="bg_game3"><div id="start_game3"><div id="text_none">&nbsp;</div><div id="game3"><div id="layoutable"><div id="startingv35"><p class="textstarting">scaner</p></div></div><div id="boxmore"><div id="txtcheck5"></div><div id="mytextv35"><input type="text" id="mytextd35" onkeydown="v3key5();" placeholder="Điền từ vào đây nha bạn !" /></div><div id="mytiev35">12</div></div></div></div></div>';

    times35 = setTimeout(function() {
        document.getElementById("v3ed").innerHTML = '<action id="35">0</action>';
        clearInterval(timev35);
        clearTimeout(times35);
        playv36();
    }, 12000);

    timev35 = setInterval(function() {
        var gera = document.getElementById("mytiev35").innerHTML;
        var turs = gera * 2 / 2;
        var merd = turs - 1;
        document.getElementById("mytiev35").innerHTML = merd;
    }, 1000);
}

function v3key5() {
    var key = window.event.keyCode;

    if (key == 13) {
        check_035();
    }
}

function check_035() {
    var text35 = document.getElementById("mytextd35").value;
    var texted35s = document.getElementById("34").innerHTML;
    var conky5 = texted35s * 2 / 2;

    if (text35 === "scaner") {
        var point35a = conky5 + 10;
        document.getElementById("v3ed").innerHTML = '<action id="35">' + point35a + '</action>';
        document.getElementById("txtcheck5").innerHTML = '<div class="icheck" style="color:green;">Chính xác</div>';
        clearInterval(timev35);
        clearTimeout(times35);
        playv36();
    } else {
        var point35b = conky5 + 0;
        document.getElementById("v3ed").innerHTML = '<action id="35">' + point35b + '</action>';
        document.getElementById("txtcheck5").innerHTML = '<div class="icheck" style="color:red;">Sai</div>';
        clearInterval(timev35);
        clearTimeout(times35);
        playv36();
    }
}

// 6
function playv36() {
    document.getElementById("myNewPage").innerHTML = '<div id="bg_game3"><div id="start_game3"><div id="text_none">&nbsp;</div><div id="game3"><div id="layoutable"><div id="startingv36"><p class="textstarting">Printer</p></div></div><div id="boxmore"><div id="txtcheck6"></div><div id="mytextv36"><input type="text" id="mytextd36" onkeydown="v3key6();" placeholder="Điền từ vào đây nha bạn !" /></div><div id="mytiev36">11</div></div></div></div></div>';

    times36 = setTimeout(function() {
        document.getElementById("v3ed").innerHTML = '<action id="36">0</action>';
        clearInterval(timev36);
        clearTimeout(times36);
        playv37();
    }, 11000);

    timev36 = setInterval(function() {
        var gera = document.getElementById("mytiev36").innerHTML;
        var turs = gera * 2 / 2;
        var merd = turs - 1;
        document.getElementById("mytiev36").innerHTML = merd;
    }, 1000);
}

function v3key6() {
    var key = window.event.keyCode;

    if (key == 13) {
        check_036();
    }
}

function check_036() {
    var text36 = document.getElementById("mytextd36").value;
    var texted36s = document.getElementById("35").innerHTML;
    var conky6 = texted36s * 2 / 2;

    if (text36 === "Printer") {
        var point36a = conky6 + 10;
        document.getElementById("v3ed").innerHTML = '<action id="36">' + point36a + '</action>';
        document.getElementById("txtcheck6").innerHTML = '<div class="icheck" style="color:green;">Chính xác</div>';
        clearInterval(timev36);
        clearTimeout(times36);
        playv37();
    } else {
        var point36b = conky6 + 0;
        document.getElementById("v3ed").innerHTML = '<action id="36">' + point36b + '</action>';
        document.getElementById("txtcheck6").innerHTML = '<div class="icheck" style="color:red;">Sai</div>';
        clearInterval(timev36);
        clearTimeout(times36);
        playv37();
    }
}

// 7
function playv37() {
    document.getElementById("myNewPage").innerHTML = '<div id="bg_game3"><div id="start_game3"><div id="text_none">&nbsp;</div><div id="game3"><div id="layoutable"><div id="startingv37"><p class="textstarting">keyboard</p></div></div><div id="boxmore"><div id="txtcheck7"></div><div id="mytextv37"><input type="text" id="mytextd37" onkeydown="v3key7();" placeholder="Điền từ vào đây nha bạn !" /></div><div id="mytiev37">10</div></div></div></div></div>';

    times37 = setTimeout(function() {
        document.getElementById("v3ed").innerHTML = '<action id="37">0</action>';
        clearInterval(timev37);
        clearTimeout(times37);
        playv38();
    }, 10000);

    timev37 = setInterval(function() {
        var gera = document.getElementById("mytiev37").innerHTML;
        var turs = gera * 2 / 2;
        var vopt = 1;
        var merd = turs - 1;
        document.getElementById("mytiev37").innerHTML = merd;
    }, 1000);
}

function v3key7() {
    var key = window.event.keyCode;

    if (key == 13) {
        check_037();
    }
}

function check_037() {
    var text37 = document.getElementById("mytextd37").value;
    var texted37s = document.getElementById("36").innerHTML;
    var conky7 = texted37s * 2 / 2;

    if (text37 === "keyboard") {
        var point37a = conky7 + 10;
        document.getElementById("v3ed").innerHTML = '<action id="37">' + point37a + '</action>';
        document.getElementById("txtcheck7").innerHTML = '<div class="icheck" style="color:green;">Chính xác</div>';
        clearInterval(timev37);
        clearTimeout(times37);
        playv38();
    } else {
        var point37b = conky7 + 0;
        document.getElementById("v3ed").innerHTML = '<action id="37">' + point37b + '</action>';
        document.getElementById("txtcheck7").innerHTML = '<div class="icheck" style="color:red;">Sai</div>';
        clearInterval(timev37);
        clearTimeout(times37);
        playv38();
    }
}

// 8
function playv38() {
    document.getElementById("myNewPage").innerHTML = '<div id="bg_game3"><div id="start_game3"><div id="text_none">&nbsp;</div><div id="game3"><div id="layoutable"><div id="startingv38"><p class="textstarting">micrO</p></div></div><div id="boxmore"><div id="txtcheck8"></div><div id="mytextv38"><input type="text" id="mytextd38" onkeydown="v3key8();" placeholder="Điền từ vào đây nha bạn !" /></div><div id="mytiev38">9</div></div></div></div></div>';

    times38 = setTimeout(function() {
        document.getElementById("v3ed").innerHTML = '<action id="38">0</action>';
        clearInterval(timev38);
        clearTimeout(times38);
        playv39();
    }, 9000);

    timev38 = setInterval(function() {
        var gera = document.getElementById("mytiev38").innerHTML;
        var turs = gera * 2 / 2;
        var vopt = 1;
        var merd = turs - 1;
        document.getElementById("mytiev38").innerHTML = merd;
    }, 1000);
}

function v3key8() {
    var key = window.event.keyCode;

    if (key == 13) {
        check_038();
    }
}

function check_038() {
    var text38 = document.getElementById("mytextd38").value;
    var texted38s = document.getElementById("37").innerHTML;
    var conky8 = texted38s * 2 / 2;

    if (text38 === "micrO") {
        var point38a = conky8 + 10;
        document.getElementById("v3ed").innerHTML = '<action id="38">' + point38a + '</action>';
        document.getElementById("txtcheck8").innerHTML = '<div class="icheck" style="color:green;">Chính xác</div>';
        clearInterval(timev38);
        clearTimeout(times38);
        playv39();
    } else {
        var point38b = conky8 + 0;
        document.getElementById("v3ed").innerHTML = '<action id="38">' + point38b + '</action>';
        document.getElementById("txtcheck8").innerHTML = '<div class="icheck" style="color:red;">Sai</div>';
        clearInterval(timev38);
        clearTimeout(times38);
        playv39();
    }
}

// 9
function playv39() {
    document.getElementById("myNewPage").innerHTML = '<div id="bg_game3"><div id="start_game3"><div id="text_none">&nbsp;</div><div id="game3"><div id="layoutable"><div id="startingv39"><p class="textstarting">Modem</p></div></div><div id="boxmore"><div id="txtcheck9"></div><div id="mytextv39"><input type="text" id="mytextd39" onkeydown="v3key9();" placeholder="Điền từ vào đây nha bạn !" /></div><div id="mytiev39">8</div></div></div></div></div>';

    times39 = setTimeout(function() {
        document.getElementById("v3ed").innerHTML = '<action id="39">0</action>';
        clearInterval(timev39);
        clearTimeout(times39);
        playv310();
    }, 8000);

    timev39 = setInterval(function() {
        var gera = document.getElementById("mytiev39").innerHTML;
        var turs = gera * 2 / 2;
        var vopt = 1;
        var merd = turs - 1;
        document.getElementById("mytiev39").innerHTML = merd;
    }, 1000);
}

function v3key9() {
    var key = window.event.keyCode;

    if (key == 13) {
        check_039();
    }
}

function check_039() {
    var text39 = document.getElementById("mytextd39").value;
    var texted39s = document.getElementById("38").innerHTML;
    var conky9 = texted39s * 2 / 2;

    if (text39 === "Modem") {
        var point39a = conky9 + 10;
        document.getElementById("v3ed").innerHTML = '<action id="39">' + point39a + '</action>';
        document.getElementById("txtcheck9").innerHTML = '<div class="icheck" style="color:green;">Chính xác</div>';
        clearInterval(timev39);
        clearTimeout(times39);
        playv310();
    } else {
        var point39b = conky9 + 0;
        document.getElementById("v3ed").innerHTML = '<action id="39">' + point39b + '</action>';
        document.getElementById("txtcheck9").innerHTML = '<div class="icheck" style="color:red;">Sai</div>';
        clearInterval(timev39);
        clearTimeout(times39);
        playv310();
    }
}

// 10
function playv310() {
    document.getElementById("myNewPage").innerHTML = '<div id="bg_game3"><div id="start_game3"><div id="text_none">&nbsp;</div><div id="game3"><div id="layoutable"><div id="startingv310"><p class="textstarting">laptop</p></div></div><div id="boxmore"><div id="txtcheck10"></div><div id="mytextv310"><input type="text" id="mytextd310" onkeydown="v3key10();" placeholder="Điền từ vào đây nha bạn !" /></div><div id="mytiev310">7</div></div></div></div></div>';

    times310 = setTimeout(function() {
        document.getElementById("v3ed").innerHTML = '<action id="310">0</action>';
        clearInterval(timev310);
        clearTimeout(times310);
        endv3();
    }, 7000);

    timev310 = setInterval(function() {
        var gera = document.getElementById("mytiev310").innerHTML;
        var turs = gera * 2 / 2;
        var merd = turs - 1;
        document.getElementById("mytiev310").innerHTML = merd;
    }, 1000);
}

function v3key10() {
    var key = window.event.keyCode;

    if (key == 13) {
        check_0310();
    }
}

function check_0310() {
    var text310 = document.getElementById("mytextd310").value;
    var texted310s = document.getElementById("39").innerHTML;
    var conky10 = texted310s * 2 / 2;

    if (text310 === "laptop") {
        var point310a = conky10 + 10;
        document.getElementById("v3ed").innerHTML = '<action id="310">' + point310a + '</action>';
        document.getElementById("txtcheck10").innerHTML = '<div class="icheck" style="color:green;">Chính xác</div>';
        clearInterval(timev310);
        clearTimeout(times310);
        endv3();
    } else {
        var point310b = conky10 + 0;
        document.getElementById("v3ed").innerHTML = '<action id="310">' + point310b + '</action>';
        document.getElementById("txtcheck10").innerHTML = '<div class="icheck" style="color:red;">Sai</div>';
        clearInterval(timev310);
        clearTimeout(times310);
        endv3();
    }
}

function endv3() {
    var point3s = document.getElementById("310").innerHTML;
    var pointes3s = document.getElementById("vi2").innerHTML;
    var pointo3w = point3s * 2 / 2;
    var pointe3w = pointes3s * 2 / 2;
    var sorpoint3w = pointo3w + pointe3w;
    var name = document.getElementById("name").innerHTML;

    document.getElementById("point").innerHTML = '<action id="vi3s">' + sorpoint3w + '</action>';
    alert('Chúc mừng bạn đã hoàn thành bài thi. Bạn được' + ' ' + point3s + ' ' + 'điểm !');

    document.getElementById("myNewPage").innerHTML = '<div id="tab_bar"><div id="name_account"><div id="account_id">Chào bạn' + ' ' + ' ' + ' ' + name + '</div></div><div id="myaccount"><a href="javascript:void(0);" class="myname" onclick="myaccount();">&nbsp;</a></div></div><div id="level_game"><button id="button_level1" onclick="partx0101()">Vòng 1</button><button id="button_level2" onclick="partx0102();">Vòng 2</button><button id="button_level3" onclick="partx0103();">Vòng 3</button><button id="button_level4" onclick="start_4();">Vòng 4</button></div><div id="popup"></div><div id="tools"><img src="./index_files/img_tools.png" id="button_tools" onclick="tools();" /></div>';
}

function partx0101() {
    alert('Bạn đã thi vòng 1 !');
}

function partx0103() {
    alert('Bạn đã thi vòng 3 !');
}

function partx0102() {
    alert('Bạn đã thi vòng 2 !');
}
/* 

		End Post 3 and Post 3 test.
		There are a total of 10 questions with 10 questions test and test commands [?] content between the previous and current card.
		Note: xxx-xxx-xxx-8752
		
*/