/*/
/ create by Hoc Tin Hoc Qua Tro Choi
	|| 	Welcome to file check post 2 ! 	||
 
	<< 
			Version: 0.3.4 
			Created by: [Author Software]
	>>

		Starting post 2 and test post 2.
		There will be a total of 5 questions with 5 questions test and test commands 30 content between the prior and current card.
*/

// bắt đầu vào bài 2
function start_2() {
    document.getElementById("myPage").innerHTML = '';

    document.getElementById("myNewPage").innerHTML = '<div id="ballsWaveG"><div id="ballsWaveG_1" class="ballsWaveG"></div><div id="ballsWaveG_2" class="ballsWaveG"></div><div id="ballsWaveG_3" class="ballsWaveG"></div><div id="ballsWaveG_4" class="ballsWaveG"></div><div id="ballsWaveG_5" class="ballsWaveG"></div><div id="ballsWaveG_6" class="ballsWaveG"></div><div id="ballsWaveG_7" class="ballsWaveG"></div><div id="ballsWaveG_8" class="ballsWaveG"></div></div>';

    setTimeout(function() {
        play_game21()
    }, 5000);
}

function play_game21() {
    document.getElementById("myNewPage").innerHTML = '<div id="myplay2"><div id="mytextnone">&nbsp;</div><div id="mytitle2">Chọn câu đúng cho phù hợp:</div><div id="mytime2">150</div><div id="nodelv2"><div id="nodelfax"><div class="hellomytextv2"><p class="newtitle2">1/ CPU có tên đầy đủ tiếng Anh là ?</p><div class="checkedv2"><input type="radio" id="020101" name="v" value="v020101">Central Pro Unit<br /><input type="radio" id="020102" name="v" value="v020102">CentralProcessing Unit<br /><input type="radio" id="020103" name="v" value="v020103">Central Print United<br /><input type="radio" id="020104" name="v" value="v020104">Central Pro United</div></div><div class="hellomytextv2"><p class="newtitle2">2/ Chiếc máy tính điện tử đầu tiên có tên gọi là gì ?</p><div class="checkedv2"><input type="radio" id="020201" name="s" value="s020201">ENIAC<br /><input type="radio" id="020202" name="s" value="s020202">EIAC<br /><input type="radio" id="020203" name="s" value="s020203">INIAC<br /><input type="radio" id="020204" name="s" value="s020204">INEAC</div></div><div id="nodelv2"><div class="hellomytextv2"><p class="newtitle2">3/ Tổ hợp phím nào dùng để mở hộp chạy (run) ?</p><div class="checkedv2"><input type="radio" id="020301" name="o" value="o020301">Windows + Alt<br /><input type="radio" id="020302" name="o" value="o020302">Windows + C<br /><input type="radio" id="020303" name="o" value="o020303">Alt + F12<br /><input type="radio" id="020304" name="o" value="o020304">Windows + R</div></div></div><div id="nodelv2"><div class="hellomytextv2"><p class="newtitle2">4/ Khi sử dụng trình duyệt, muốn load lại một trang web ta dùng phím nào ?</p><div class="checkedv2"><input type="radio" id="020401" name="q" value="q020401">F11<br /><input type="radio" id="020402" name="q" value="q020402">F7<br /><input type="radio" id="020403" name="q" value="q020403">F1<br /><input type="radio" id="020404" name="q" value="q020404">F5</div></div></div><div id="nodelv2"><div class="hellomytextv2"><p class="newtitle2">5/ Để xóa một kí tự ở bên phải, ta sẽ dùng phím nào ?</p><div class="checkedv2"><input type="radio" id="020501" name="e" value="e020501">Delete<br /><input type="radio" id="020502" name="e" value="e020502">Backscape<br /><input type="radio" id="020503" name="e" value="e020503">Pause Break<br /><input type="radio" id="020504" name="e" value="e020504">PrtSc SysRq</div></div></div><div id="nodelv2"><div class="hellomytextv2"><p class="newtitle2">6/ Máy tính điện tử đầu tiên ra đời năm nào ?</p><div class="checkedv2"><input type="radio" id="020601" name="y" value="y020601">1985<br /><input type="radio" id="020602" name="y" value="y020602">1945<br /><input type="radio" id="020603" name="y" value="y020603">1925<br /><input type="radio" id="020604" name="y" value="y020604">1965</div></div><div id="nodelv2"><div class="hellomytextv2"><p class="newtitle2">7/ Để chơi nhạc trong Logo, em sử dụng câu lệnh gì?</p><div class="checkedv2"><input type="radio" id="020701" name="u" value="u020701">Sound<br /><input type="radio" id="020702" name="u" value="u020702">Music<br /><input type="radio" id="020703" name="u" value="u020703">Play<br /><input type="radio" id="020704" name="u" value="u020704">Song</div></div></div><div id="nodelv2"><div class="hellomytextv2"><p class="newtitle2">8/ Phần mở rộng mặc định của Word là ? </p><div class="checkedv2"><input type="radio" id="020801" name="j" value="j020801">.xls<br /><input type="radio" id="020802" name="j" value="j020802">.fpd<br /><input type="radio" id="020803" name="j" value="j020803">.doc<br /><input type="radio" id="020804" name="j" value="j020804">.word</div></div></div><div id="nodelv2"><div class="hellomytextv2"><p class="newtitle2">9/ Trong phần mềm Paint, để vẽ được đường cong phải mất mấy thao tác ?</p><div class="checkedv2"><input type="radio" id="020901" name="f" value="f020901">3<br /><input type="radio" id="020902" name="f" value="f020902">2<br /><input type="radio" id="020903" name="f" value="f020903">1<br /><input type="radio" id="020904" name="f" value="f020904">4</div></div></div><div id="nodelv2"><div class="hellomytextv2"><p class="newtitle2">10/ Phần mềm nào dưới đây không hỗ trợ gõ tiếng Việt ?</p><div class="checkedv2"><input type="radio" id="021001" name="d" value="d021001">Paint<br /><input type="radio" id="021002" name="d" value="d021002">PowerPoint<br /><input type="radio" id="021003" name="d" value="d021003">Access<br /><input type="radio" id="021004" name="d" value="d021004">ABC</div></div></div><div id="nodelv2"><div class="hellomytextv2"><p class="newtitle2">11/ “Phím tắt” còn có tên gọi khác là gì ?</p><div class="checkedv2"><input type="radio" id="021101" name="k" value="k021101">Phím nhanh<br /><input type="radio" id="021102" name="k" value="k021102">Phím cóc<br /><input type="radio" id="021103" name="k" value="k021103">Phím lười<br /><input type="radio" id="021104" name="k" value="k021104">Phím nóng</div></div></div><div id="nodelv2"><div class="hellomytextv2"><p class="newtitle2">12/ Theo SGK ‘Cùng học tin học 2’ vùng màn hình làm việc của Logo, gọi là gì?</p><div class="checkedv2"><input type="radio" id="021201" name="b" value="b021201">Sân chơi<br /><input type="radio" id="021202" name="b" value="b021202">Sân khấu<br /><input type="radio" id="021203" name="b" value="b021203">Sân làm việc<br /><input type="radio" id="021204" name="b" value="b021204">Sân screen</div></div></div><div id="nodelv2"><div class="hellomytextv2"><p class="newtitle2">13/ Ta có thể đặt tên cho ... của một tập tin trong Windows</p><div class="checkedv2"><input type="radio" id="02001" name="p" value="p021301">kí hiệu<br /><input type="radio" id="021302" name="p" value="p021302">thứ tự<br /><input type="radio" id="021303" name="p" value="p021303">phần mở rộng<br /><input type="radio" id="021304" name="p" value="p021304">sắp xếp</div></div></div><div id="nodelv2"><div class="hellomytextv2"><p class="newtitle2">14/ RAM là tên viết tắt của...</p><div class="checkedv2"><input type="radio" id="021401" name="ke" value="ke021401">Rorser Access Morss<br /><input type="radio" id="021402" name="ke" value="ke021402">Random Amores Morss<br /><input type="radio" id="021403" name="ke" value="ke021403">Random Access Memory<br /><input type="radio" id="021404" name="ke" value="ke021404">Random Access Messes</div></div></div><div id="nodelv2"><div class="hellomytextv2"><p class="newtitle2">15/ Đâu là phần mềm đọc tệp .PNG ?</p><div class="checkedv2"><input type="radio" id="021501" name="m" value="m021501">MS Word<br /><input type="radio" id="021502" name="m" value="m021502">MS PNG Reader<br /><input type="radio" id="021503" name="m" value="m021503">Paint<br /><input type="radio" id="021504" name="m" value="m021504">XM Photo</div></div></div><div id="completev2"><button onclick="checkv2();">Nộp Bài</button></div></div></div></div></div>';

    timev2 = setTimeout(function() {
        alert('Hết thời gian, bạn được 0 điểm \n Bạn sẽ không được lưu điểm bài này !');
        clearInterval(intertimev2);
        clearTimeout(timev2);
        endv2();
    }, 150000); // (1)

    intertimev2 = setInterval(function() {
        var s = document.getElementById("mytime2").innerHTML;
        var v = s * 2 / 2;
        var k = v - 1;
        document.getElementById("mytime2").innerHTML = k;
    }, 1000);
}

function checkv2() {
    var x1;
    x1 = document.getElementById("020102").checked;

    if (x1 === true) {
        document.getElementById("v2").innerHTML = '<action id="v201">10</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        x2();
    } else {
        document.getElementById("v2").innerHTML = '<action id="v201">0</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        x2();
    }
}

function x2() {
    var x2;
    var x2p;
    x2 = document.getElementById("020201").checked;
    x2p = document.getElementById("v201").innerHTML;

    if (x2 === true) {
        var x2n = x2p * 2 / 2 + 10;
        document.getElementById("v2").innerHTML = '<action id="v202">' + x2n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        q2();
    } else {
        var x2n = x2p * 2 / 2 + 0;
        document.getElementById("v2").innerHTML = '<action id="v202">' + x2n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        q2();
    }
}

function q2() {
    var x3;
    var x3p;
    x3 = document.getElementById("020304").checked;
    x3p = document.getElementById("v202").innerHTML;

    if (x3 === true) {
        var x3n = x3p * 2 / 2 + 10;
        document.getElementById("v2").innerHTML = '<action id="v203">' + x3n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        w2();
    } else {
        var x3n = x3p * 2 / 2 + 0;
        document.getElementById("v2").innerHTML = '<action id="v203">' + x3n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        w2();
    }
}

function w2() {
    var x4;
    var x4p;
    x4p = document.getElementById("v203").innerHTML;
    x4 = document.getElementById("020404").checked;

    if (x4 === true) {
        var x4n = x4p * 2 / 2 + 10;
        document.getElementById("v2").innerHTML = '<action id="v204">' + x4n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        e2();
    } else {
        var x4n = x4p * 2 / 2 + 0;
        document.getElementById("v2").innerHTML = '<action id="v204">' + x4n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        e2();
    }
}

function e2() {
    var x5;
    var x5p;
    x5 = document.getElementById("020501").checked;
    x5p = document.getElementById("v204").innerHTML;

    if (x5 === true) {
        var x5n = x5p * 2 / 2 + 10;
        document.getElementById("v2").innerHTML = '<action id="v205">' + x5n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        r2();
    } else {
        var x5n = x5p * 2 / 2 + 0;
        document.getElementById("v2").innerHTML = '<action id="v205">' + x5n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        r2();
    }
}

function r2() {
    var x6;
    var x6p;
    x6 = document.getElementById("020602").checked;
    x6p = document.getElementById("v205").innerHTML;

    if (x6 === true) {
        var x6n = x6p * 2 / 2 + 10;
        document.getElementById("v2").innerHTML = '<action id="v206">' + x6n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        t2();
    } else {
        var x6n = x6p * 2 / 2 + 0;
        document.getElementById("v2").innerHTML = '<action id="v206">' + x6n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        t2();
    }
}

function t2() {
    var x7;
    var x7p;
    x7 = document.getElementById("020701").checked;
    x7p = document.getElementById("v206").innerHTML;

    if (x7 === true) {
        var x7n = x7p * 2 / 2 + 10;
        document.getElementById("v2").innerHTML = '<action id="v207">' + x7n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        y2();
    } else {
        var x7n = x7p * 2 / 2 + 0;
        document.getElementById("v2").innerHTML = '<action id="v207">' + x7n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        y2();
    }
}

function y2() {
    var x;
    var x8p;
    x8 = document.getElementById("020803").checked;
    x8p = document.getElementById("v207").innerHTML;

    if (x8 === true) {
        var x8n = x8p * 2 / 2 + 10;
        document.getElementById("v2").innerHTML = '<action id="v208">' + x8n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        u2();
    } else {
        var x8n = x8p * 2 / 2 + 0;
        document.getElementById("v2").innerHTML = '<action id="v208">' + x8n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        u2();
    }
}

function u2() {
    var x9;
    var x9p;
    x9 = document.getElementById("020902").checked;
    x9p = document.getElementById("v208").innerHTML;

    if (x9 === true) {
        var x9n = x9p * 2 / 2 + 10;
        document.getElementById("v2").innerHTML = '<action id="v209">' + x9n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        i2();
    } else {
        var x9n = x9p * 2 / 2 + 0;
        document.getElementById("v2").innerHTML = '<action id="v209">' + x9n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        i2();
    }
}

function i2() {
    var x10;
    var x10p;
    x10 = document.getElementById("021004").checked;
    x10p = document.getElementById("v209").innerHTML;

    if (x10 === true) {
        var x10n = x10p * 2 / 2 + 10;
        document.getElementById("v2").innerHTML = '<action id="v210">' + x10n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        o2();
    } else {
        var x10n = x10p * 2 / 2 + 0;
        document.getElementById("v2").innerHTML = '<action id="v210">' + x10n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        o2();
    }
}

function o2() {
    var x11;
    var x11p;
    x11 = document.getElementById("021104").checked;
    x11p = document.getElementById("v210").innerHTML;

    if (x11 === true) {
        var x11n = x11p * 2 / 2 + 10;
        document.getElementById("v2").innerHTML = '<action id="v211">' + x11n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        p2();
    } else {
        var x11n = x11p * 2 / 2 + 0;
        document.getElementById("v2").innerHTML = '<action id="v211">' + x11n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        p2();
    }
}

function p2() {
    var x12;
    var x12p;
    x12 = document.getElementById("021201").checked;
    x12p = document.getElementById("v211").innerHTML;

    if (x12 === true) {
        var x12n = x12p * 2 / 2 + 10;
        document.getElementById("v2").innerHTML = '<action id="v212">' + x12n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        a2();
    } else {
        var x12n = x12p * 2 / 2 + 0;
        document.getElementById("v2").innerHTML = '<action id="v212">' + x12n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        a2();
    }
}

function a2() {
    var x13;
    var x13p;
    x13 = document.getElementById("021303").checked;
    x13p = document.getElementById("v212").innerHTML;

    if (x13 === true) {
        var x13n = x13p * 2 / 2 + 10;
        document.getElementById("v2").innerHTML = '<action id="v213">' + x13n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        b2();
    } else {
        var x13n = x13p * 2 / 2 + 0;
        document.getElementById("v2").innerHTML = '<action id="v213">' + x13n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        b2();
    }
}

function b2() {
    var x14;
    var x14p;
    x14 = document.getElementById("021403").checked;
    x14p = document.getElementById("v213").innerHTML;

    if (x14 === true) {
        var x14n = x14p * 2 / 2 + 10;
        document.getElementById("v2").innerHTML = '<action id="v214">' + x14n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        c2();
    } else {
        var x14n = x14p * 2 / 2 + 0;
        document.getElementById("v2").innerHTML = '<action id="v214">' + x14n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        c2();
    }
}

function c2() {
    var x15;
    var x15p;
    x15 = document.getElementById("021503").checked;
    x15p = document.getElementById("v214").innerHTML;

    if (x15 === true) {
        var x15n = x15p * 2 / 2 + 10;
        document.getElementById("v2").innerHTML = '<action id="v215">' + x15n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        endv2();
    } else {
        var x15n = x15p * 2 / 2 + 0;
        document.getElementById("v2").innerHTML = '<action id="v215">' + x15n + '</action>';
        clearInterval(intertimev2);
        clearTimeout(timev2);
        endv2();
    }
}

function endv2() {
    var point = document.getElementById("v215").innerHTML;
    var pointes = document.getElementById("01").innerHTML;
    var pointo = point * 2 / 2;
    var pointe = pointes * 2 / 2;
    var sorpoint = pointo + pointe;
    var name = document.getElementById("name").innerHTML;

    document.getElementById("point").innerHTML = '<action id="vi2">' + sorpoint + '</action>';
    alert('Chúc mừng bạn đã hoàn thành bài thi. Bạn được' + ' ' + point + ' ' + 'điểm !');
    document.getElementById("myNewPage").innerHTML = '<div id="tab_bar"><div id="name_account"><div id="account_id">Chào bạn' + ' ' + ' ' + ' ' + name + '</div></div><div id="myaccount"><a href="javascript:void(0);" class="myname" onclick="myaccount();">&nbsp;</a></div></div><div id="level_game"><button id="button_level1" onclick="part0101()">Vòng 1</button><button id="button_level2" onclick="partd0102();">Vòng 2</button><button id="button_level3" onclick="start_3();">Vòng 3</button><button id="button_level4" onclick="partd0104();">Vòng 4</button></div><div id="popup"></div><div id="tools"><img src="./index_files/img_tools.png" id="button_tools" onclick="tools();" /></div>';
}

function partd0101() {
    alert('Bạn đã thi vòng 1 !');
}

function partd0104() {
    alert('Bạn chưa thi vòng 3 !');
}

function partd0102() {
    alert('Bạn đã thi vòng 2 !');
}
/* 

		End Post 2 and Post 2 test.
		There are a total of 15 questions with 10 questions test and test commands 30 content between the previous and current card.
		Note: xxx-xxx-xxx-2486
		
*/