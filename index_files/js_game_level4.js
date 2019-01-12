/*/
/ create by Hoc Tin Hoc Qua Tro Choi
	|| 	Welcome to file check post 4 ! 	||
 
	<< 
			Version: 0.3.4 
			Created by: [Author Software]
	>>

		Starting post 3 and test post 4.
		There will be a total of 15 questions with 15 questions test and test commands [?] content between the prior and current card.
*/

// bắt đầu vào bài 4
function start_4() {
    document.getElementById("myPage").innerHTML = '';

    document.getElementById("myNewPage").innerHTML = '<div id="loadingProgressG"><div id="loadingProgressG_1" class="loadingProgressG"></div></div><div id="loadtext">Loading...</div>';

    setTimeout(function() {
        playv4()
    }, 5000);
}

// 1
function playv4() {
    document.getElementById("myNewPage").innerHTML = '<div id="readyv4"><div id="v4body"><div id="mytextlogev4">Ô CHỮ VUI VẺ</div><div id="timev4">180</div><div id="vm1"><div class="mycomstar">1</div><div class="vms1"><input type="text" onblur="vms1();" maxlength="1" id="vms0101" /><input type="text" onblur="vms1();" maxlength="1" id="vms0102" /><input type="text" onblur="vms1();" maxlength="1" id="vms0103" /></div></div><div id="vm2"><div class="mycomstar">2</div><div class="vms2"><input type="text" onblur="vms2();" maxlength="1" id="vms0201" /><input type="text" onblur="vms2();" maxlength="1" id="vms0202" /><input type="text" onblur="vms2();" maxlength="1" id="vms0203" /><input type="text" onblur="vms2();" maxlength="1" id="vms0204" /><input type="text" onblur="vms2();" maxlength="1" id="vms0205" /><input type="text" onblur="vms2();" maxlength="1" id="vms0206" /></div></div><div id="vm3"><div class="mycomstar">3</div><div class="vms1"><input type="text" onblur="vms3();" maxlength="1" id="vms0301" /><input type="text" onblur="vms3();" maxlength="1" id="vms0302" /><input type="text" onblur="vms3();" maxlength="1" id="vms0303" /><input type="text" onblur="vms3();" maxlength="1" id="vms0304" /><input type="text" onblur="vms3();" maxlength="1" id="vms0305" /><input type="text" onblur="vms3();" maxlength="1" id="vms0306" /></div></div><div id="vm4"><div class="mycomstar">4</div><div class="vms1"><input type="text" onblur="vms4();" maxlength="1" id="vms0401" /><input type="text" onblur="vms4();" maxlength="1" id="vms0402" /><input type="text" onblur="vms4();" maxlength="1" id="vms0403" /><input type="text" onblur="vms4();" maxlength="1" id="vms0404" /><input type="text" onblur="vms4();" maxlength="1" id="vms0405" /><input type="text" onblur="vms4();" maxlength="1" id="vms0406" /><input type="text" onblur="vms4();" maxlength="1" id="vms0407" /></div></div><div id="vm5"><div class="mycomstar">5</div><div class="vms1"><input type="text" onblur="vms5();" maxlength="1" id="vms0501" /><input type="text" onblur="vms5();" maxlength="1" id="vms0502" /><input type="text" onblur="vms5();" maxlength="1" id="vms0503" /></div></div><div id="answerv4"><p>1. Nhấn chuột phải, chọn New -> Folder là cách ... một thư mục </p><p>2. CPU còn được gọi theo tên tiếng Việt là ...</p><p>3. Dòng lệnh là loại của thông tin ...</p><p>4. Phim nóng còn được gọi là ...</p><p>5. Máy tính có mấy bộ phận quan trọng</p></div><div id="submitv4"><button id="butv4" onclick="checkv411();">Hoàn Thành</div></div></div></div>';

    timev4 = setTimeout(function() {
        alert('Hết thời gian, bạn được 0 điểm \n Bạn sẽ không được lưu điểm bài này !');
        clearInterval(timecv4);
        clearTimeout(timev4);
        endv4();
    }, 180000); // (1)

    timecv4 = setInterval(function() {
        var e = document.getElementById("timev4").innerHTML;
        var r = e * 2 / 2;
        var a = r - 1;
        document.getElementById("timev4").innerHTML = a;
    }, 1000);
}

function checkv411() {
    var s411s = document.getElementById("vms0101").value;

    if (s411s === "T" || s411s === "t") {
        var e411e = 10;
        document.getElementById("v4").innerHTML = '<action id="411">' + e411e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv412();
    } else {
        var et411et = 0;
        document.getElementById("v4").innerHTML = '<action id="411">' + et411et + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv412();
    }
}

function checkv412() {
    var s412s = document.getElementById("vms0102").value;
    var s412sed = document.getElementById("411").innerHTML;
    var s412se = s412sed * 2 / 2;

    if (s412s === "Ạ" || s412s === "ạ") {
        var e412e = 10 + s412se;
        document.getElementById("v4").innerHTML = '<action id="412">' + e412e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv413();
    } else {
        var et412et = 0 + s412se;
        document.getElementById("v4").innerHTML = '<action id="412">' + et412et + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv413();
    }
}

function checkv413() {
    var s413s = document.getElementById("vms0103").value;
    var s413sed = document.getElementById("412").innerHTML;
    var s413se = s413sed * 2 / 2;

    if (s413s === "O" || s413s === "o") {
        var e413e = 10 + s413se;
        document.getElementById("v4").innerHTML = '<action id="413">' + e413e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv421();
    } else {
        var et413et = 0 + s413se;
        document.getElementById("v4").innerHTML = '<action id="413">' + et413et + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv421();
    }
}

function checkv421() {
    var s421s = document.getElementById("vms0201").value;
    var s421sed = document.getElementById("413").innerHTML;
    var s421se = s421sed * 2 / 2;

    if (s421s === "B" || s421s === "b") {
        var e421e = 10 + s421se;
        document.getElementById("v4").innerHTML = '<action id="421">' + e421e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv422();
    } else {
        var et421et = 0 + s421se;
        document.getElementById("v4").innerHTML = '<action id="421">' + et421et + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv422();
    }
}

function checkv422() {
    var s422s = document.getElementById("vms0202").value;
    var s422sed = document.getElementById("421").innerHTML;
    var s422se = s422sed * 2 / 2;

    if (s422s === "Ộ" || s422s === "ộ") {
        var e422e = 10 + s422se;
        document.getElementById("v4").innerHTML = '<action id="422">' + e422e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv423();
    } else {
        var et422et = 0 + s422se;
        document.getElementById("v4").innerHTML = '<action id="422">' + et422et + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv423();
    }
}

function checkv423() {
    var s423s = document.getElementById("vms0203").value;
    var s423sed = document.getElementById("422").innerHTML;
    var s423se = s423sed * 2 / 2;

    if (s423s === "X" || s423s === "x") {
        var e423e = 10 + s423se;
        document.getElementById("v4").innerHTML = '<action id="423">' + e423e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv424();
    } else {
        var et423et = 0 + s423se;
        document.getElementById("v4").innerHTML = '<action id="423">' + et423et + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv424();
    }
}

function checkv424() {
    var s424s = document.getElementById("vms0204").value;
    var s424sed = document.getElementById("423").innerHTML;
    var s424se = s424sed * 2 / 2;

    if (s424s === "Ử" || s424s === "ử") {
        var e424e = 10 + s424se;
        document.getElementById("v4").innerHTML = '<action id="424">' + e424e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv425();
    } else {
        var et424et = 0 + s424se;
        document.getElementById("v4").innerHTML = '<action id="424">' + et424et + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv425();
    }
}

function checkv425() {
    var s425s = document.getElementById("vms0205").value;
    var s425sed = document.getElementById("424").innerHTML;
    var s425se = s425sed * 2 / 2;

    if (s425s === "L" || s425s === "l") {
        var e425e = 10 + s425se;
        document.getElementById("v4").innerHTML = '<action id="425">' + e425e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv426();
    } else {
        var et425et = 0 + s425se;
        document.getElementById("v4").innerHTML = '<action id="425">' + et425et + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv426();
    }
}

function checkv426() {
    var s426s = document.getElementById("vms0206").value;
    var s426sed = document.getElementById("425").innerHTML;
    var s426se = s426sed * 2 / 2;

    if (s426s === "í" || s426s === "Í" || s426s === "y" || s426s === "Y") {
        var e426e = 10 + s426se;
        document.getElementById("v4").innerHTML = '<action id="426">' + e426e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv431();
    } else {
        var et426et = 0 + s426se;
        document.getElementById("v4").innerHTML = '<action id="426">' + et426et + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv431();
    }
}

function checkv431() {
    var s431s = document.getElementById("vms0301").value;
    var s431sed = document.getElementById("426").innerHTML;
    var s431se = s431sed * 2 / 2;

    if (s431s === "V" || s431s === "v") {
        var e431e = 10 + s431se;
        document.getElementById("v4").innerHTML = '<action id="431">' + e431e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv432();
    } else {
        var et431et = 0 + s431se;
        document.getElementById("v4").innerHTML = '<action id="431">' + e431et + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv432();
    }
}

function checkv432() {
    var s432s = document.getElementById("vms0302").value;
    var s432sed = document.getElementById("431").innerHTML;
    var s432se = s432sed * 2 / 2;

    if (s432s === "Ă" || s432s === "ă") {
        var e432e = 10 + s432se;
        document.getElementById("v4").innerHTML = '<action id="432">' + e432e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv434();
    } else {
        var et432et = 0 + s432se;
        document.getElementById("v4").innerHTML = '<action id="432">' + e432et + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv434();
    }
}

function checkv434() {
    var s434s = document.getElementById("vms0303").value;
    var s434sed = document.getElementById("432").innerHTML;
    var s434se = s434sed * 2 / 2;
    if (s434s === "N" || s434s === "n") {
        var e434e = 10 + s434se;
        document.getElementById("v4").innerHTML = '<action id="434">' + e434e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv435();
    } else {
        var et434et = 0 + s434se;
        document.getElementById("v4").innerHTML = '<action id="434"> ' + e434e + ' </action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv435();
    }
}

function checkv435() {
    var s435s = document.getElementById("vms0304").value;
    var s435sed = document.getElementById("434").innerHTML;
    var s435se = s435sed * 2 / 2;
    if (s435s === "B" || s435s === "b") {
        var e435e = 10 + s435se;
        document.getElementById("v4").innerHTML = '<action id="435">' + e435e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv436();
    } else {
        var et435et = 0 + s435se;
        document.getElementById("v4").innerHTML = '<action id="435"> ' + e435e + ' </action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv436();
    }
}

function checkv436() {
    var s436s = document.getElementById("vms0305").value;
    var s436sed = document.getElementById("435").innerHTML;
    var s436se = s436sed * 2 / 2;
    if (s436s === "Ả" || s436s === "ả") {
        var e436e = 10 + s436se;
        document.getElementById("v4").innerHTML = '<action id="436">' + e436e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv437();
    } else {
        var et436et = 0 + s436se;
        document.getElementById("v4").innerHTML = '<action id="436"> ' + e436e + ' </action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv437();
    }
}

function checkv437() {
    var s437s = document.getElementById("vms0306").value;
    var s437sed = document.getElementById("436").innerHTML;
    var s437se = s437sed * 2 / 2;
    if (s437s === "N" || s437s === "n") {
        var e437e = 10 + s437se;
        document.getElementById("v4").innerHTML = '<action id="437">' + e437e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv441();
    } else {
        var et437et = 0 + s437se;
        document.getElementById("v4").innerHTML = '<action id="437"> ' + e437e + ' </action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv441();
    }
}

function checkv441() {
    var s441s = document.getElementById("vms0401").value;
    var s441sed = document.getElementById("437").innerHTML;
    var s441se = s441sed * 2 / 2;
    if (s441s === "P" || s441s === "p") {
        var e441e = 10 + s441se;
        document.getElementById("v4").innerHTML = '<action id="441">' + e441e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv442();
    } else {
        var et441et = 0 + s441se;
        document.getElementById("v4").innerHTML = '<action id="441"> ' + e441e + ' </action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv442();
    }
}

function checkv442() {
    var s442s = document.getElementById("vms0402").value;
    var s442sed = document.getElementById("441").innerHTML;
    var s442se = s442sed * 2 / 2;
    if (s442s === "H" || s442s === "h") {
        var e442e = 10 + s442se;
        document.getElementById("v4").innerHTML = '<action id="442">' + e442e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv443();
    } else {
        var et442et = 0 + s442se;
        document.getElementById("v4").innerHTML = '<action id="442"> ' + e442e + ' </action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv443();
    }
}

function checkv443() {
    var s443s = document.getElementById("vms0403").value;
    var s443sed = document.getElementById("442").innerHTML;
    var s443se = s443sed * 2 / 2;
    if (s443s === "Í" || s443s === "í") {
        var e443e = 10 + s443se;
        document.getElementById("v4").innerHTML = '<action id="443">' + e443e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv444();
    } else {
        var et443et = 0 + s443se;
        document.getElementById("v4").innerHTML = '<action id="443"> ' + e443e + ' </action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv444();
    }
}

function checkv444() {
    var s444s = document.getElementById("vms0404").value;
    var s444sed = document.getElementById("443").innerHTML;
    var s444se = s444sed * 2 / 2;
    if (s444s === "M" || s444s === "m") {
        var e444e = 10 + s444se;
        document.getElementById("v4").innerHTML = '<action id="444">' + e444e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv445();
    } else {
        var et444et = 0 + s444se;
        document.getElementById("v4").innerHTML = '<action id="444"> ' + e444e + ' </action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv445();
    }
}

function checkv445() {
    var s445s = document.getElementById("vms0405").value;
    var s445sed = document.getElementById("444").innerHTML;
    var s445se = s445sed * 2 / 2;
    if (s445s === "T" || s445s === "t") {
        var e445e = 10 + s445se;
        document.getElementById("v4").innerHTML = '<action id="445">' + e445e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv446();
    } else {
        var et445et = 0 + s445se;
        document.getElementById("v4").innerHTML = '<action id="445"> ' + e445e + ' </action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv446();
    }
}

function checkv446() {
    var s446s = document.getElementById("vms0406").value;
    var s446sed = document.getElementById("445").innerHTML;
    var s446se = s446sed * 2 / 2;
    if (s446s === "Ắ" || s446s === "ắ") {
        var e446e = 10 + s446se;
        document.getElementById("v4").innerHTML = '<action id="446">' + e446e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv447();
    } else {
        var et446et = 0 + s446se;
        document.getElementById("v4").innerHTML = '<action id="446"> ' + e446e + ' </action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv447();
    }
}

function checkv447() {
    var s447s = document.getElementById("vms0407").value;
    var s447sed = document.getElementById("446").innerHTML;
    var s447se = s447sed * 2 / 2;
    if (s447s === "T" || s447s === "t") {
        var e447e = 10 + s447se;
        document.getElementById("v4").innerHTML = '<action id="447">' + e447e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv451();
    } else {
        var et447et = 0 + s447se;
        document.getElementById("v4").innerHTML = '<action id="447"> ' + e447e + ' </action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv451();
    }
}

function checkv451() {
    var s451s = document.getElementById("vms0501").value;
    var s451sed = document.getElementById("447").innerHTML;
    var s451se = s451sed * 2 / 2;
    if (s451s === "B" || s451s === "b") {
        var e451e = 10 + s451se;
        document.getElementById("v4").innerHTML = '<action id="451">' + e451e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv452();
    } else {
        var et451et = 0 + s451se;
        document.getElementById("v4").innerHTML = '<action id="451"> ' + e451e + ' </action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv452();
    }
}

function checkv452() {
    var s452s = document.getElementById("vms0502").value;
    var s452sed = document.getElementById("451").innerHTML;
    var s452se = s452sed * 2 / 2;
    if (s452s === "Ố" || s452s === "ố") {
        var e452e = 10 + s452se;
        document.getElementById("v4").innerHTML = '<action id="452">' + e452e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv453();
    } else {
        var et452et = 0 + s452se;
        document.getElementById("v4").innerHTML = '<action id="452"> ' + e452e + ' </action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        checkv453();
    }
}

function checkv453() {
    var s453s = document.getElementById("vms0503").value;
    var s453sed = document.getElementById("452").innerHTML;
    var s453se = s453sed * 2 / 2;
    if (s453s === "N" || s453s === "n") {
        var e453e = 10 + s453se;
        document.getElementById("v4").innerHTML = '<action id="453">' + e453e + '</action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        endv4();
    } else {
        var et453et = 0 + s453se;
        document.getElementById("v4").innerHTML = '<action id="453"> ' + e453e + ' </action>';
        clearInterval(timecv4);
        clearTimeout(timev4);
        endv4();
    }
}

function endv4() {
    var pointes4 = document.getElementById("453").innerHTML;
    var pointes41 = document.getElementById("vi3s").innerHTML;
    var p41 = pointes4 * 2 / 2;
    var p42 = pointes41 * 2 / 2;
    var pointotal = p41 + p42;

    document.getElementById("point").innerHTML = '<action id="vi4s">' + pointotal + '</action>';
    alert('Chúc mừng bạn đã hoàn thành bài thi. Bạn được' + ' ' + pointes4 + ' ' + 'điểm !');

    complete();
}