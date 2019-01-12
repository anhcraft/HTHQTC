/*/
/ create by Hoc Tin Hoc Qua Tro Choi
	|| 	Welcome to file check post 1 ! 	||
 
	<< 
			Version: 0.3.4 
			Created by: [Author Software]
	>>

		Starting post 1 and test post 1.
		There will be a total of 10 questions with 10 questions test and test commands 110 content between the prior and current card.
*/

// bắt đầu vào bài 1
function start_1() {
    document.getElementById("myPage").innerHTML = '';

    document.getElementById("myNewPage").innerHTML = '<div id="circularG"><div id="circularG_1" class="circularG"></div><div id="circularG_2" class="circularG"></div><div id="circularG_3" class="circularG"></div><div id="circularG_4" class="circularG"></div><div id="circularG_5" class="circularG"></div><div id="circularG_6" class="circularG"></div><div id="circularG_7" class="circularG"></div><div id="circularG_8" class="circularG"></div></div>';

    setTimeout(function() {
        play_game1()
    }, 5000);
}

// câu 1
function play_game1() {
    document.getElementById("myNewPage").innerHTML = '<div class="tab_01"><p class="title_part">Câu 1:</p><p class="comments_part">Đâu là bộ xử lí của máy tính ?</p></div><div class="tab_02"><img src="./index_files/010101.jpg" title="Máy tính" alt="Lỗi hình ảnh !" class="img_note" /></div><div class="tab_03"><div class="ms_01"><div id="ms_com1">A</div><img src="./index_files/010102.jpg" title="A" alt="Lỗi hình ảnh !" class="img_1" /></div><div class="ms_01"><div id="ms_com2">B</div><img src="./index_files/010103.jpg" title="B" alt="Lỗi hình ảnh !" class="img_2" /></div><div class="ms_01"><div id="ms_com3">C</div><img src="./index_files/010104.jpg" title="C" alt="Lỗi hình ảnh !" class="img_3" /></div></div><div id="tab_04"><div class="answer"><input class="dap_text_box" onkeydown="check_key01();" type="text" placeholder="Nhấn phím enter để tiếp tục." id="answer_01" maxlength="1"/></div><div class="time" id="demo1">15</div></div>';

    time_01 = setTimeout(function() {
        alert('Hết thời gian, bạn được 0 điểm \n Bạn sẽ không được lưu điểm bài này !');
        document.getElementById("myNewPage").open(play_game2());
        clearInterval(intertime1);
        clearTimeout(time_01);
    }, 15000); // (1)

    intertime1 = setInterval(function() {
        var a = document.getElementById("demo1").innerHTML;
        var o = a * 2 / 2;
        var tm = o - 1;
        document.getElementById("demo1").innerHTML = tm;
    }, 1000);
}

function check_key01() {
    var key = window.event.keyCode;

    if (key == 13) {
        open(check_01());
    }
}

function check_01() {
    var ans01 = document.getElementById("answer_01").value;

    if (ans01 === "B" || ans01 === "C" || ans01 === "b" || ans01 === "c") {
        clearTimeout(time_01); // nếu đã chọn thì xóa lệnh (1) đi
        clearInterval(intertime1);
        var mx011 = 0;
        document.getElementById("myPage").innerHTML = '<action id="0101">' + mx011 + '</action>';
        document.getElementById("myNewPage").open(play_game2());
    }

    if (ans01 === "A" || ans01 === "a") {
        clearTimeout(time_01);
        clearInterval(intertime1);
        var mx01 = 10; // lưu điểm
        document.getElementById("myPage").innerHTML = '<action id="0101">' + mx01 + '</action>';
        document.getElementById("myNewPage").open(play_game2()); // mở function play_game2()
    } else {
        clearTimeout(time_01);
        clearInterval(intertime1);
        play_game2();
    }
}

// câu 2
function play_game2() {
    document.getElementById("myNewPage").innerHTML = '<div class="tab_01"><p class="title_part">Câu 2:</p><p class="comments_part">Hình ảnh nào là máy tính xách tay ?</p></div><div class="tab_02"><img src="./index_files/010201.jpg" title="USB" alt="Lỗi hình ảnh !" class="img_note" /></div><div class="tab_03"><div class="ms_01"><div id="ms_com1">A</div><img src="./index_files/010202.png" title="A" alt="Lỗi hình ảnh !" class="img_1" /></div><div class="ms_01"><div id="ms_com2">B</div><img src="./index_files/010203.jpg" title="B" alt="Lỗi hình ảnh !" class="img_2" /></div><div class="ms_01"><div id="ms_com3">C</div><img src="./index_files/010204.jpg" title="C" alt="Lỗi hình ảnh !" class="img_3" /></div></div><div id="tab_04"><div class="answer"><input class="dap_text_box" type="text" onkeydown="check_key02();" placeholder="Nhấn phím enter để tiếp tục." id="answer_02" maxlength="1"/></div><div class="time" id="demo2">15</div></div>';

    time_02 = setTimeout(function() {
        alert('Hết thời gian, bạn được 0 điểm \n Bạn sẽ không được lưu điểm bài này !');
        document.getElementById("myNewPage").open(play_game3());
        clearInterval(intertime2);
        clearTimeout(time_02);
    }, 15000); // (2)

    intertime2 = setInterval(function() {
        var s = document.getElementById("demo2").innerHTML;
        var sn = s * 2 / 2;
        var h = sn - 1;
        document.getElementById("demo2").innerHTML = h;
    }, 1000);
}

function check_key02() {
    var key = window.event.keyCode;

    if (key == 13) {
        open(check_02());
    }
}

function check_02() {
    var ans02 = document.getElementById("answer_02").value;
    var nogepd = document.getElementById("0101").innerHTML; // xem điểm đã lưu ở câu 1

    if ((ans02 === "A" || ans02 === "C" || ans02 === "a" || ans02 === "c") && (nogepd == 0)) {
        clearTimeout(time_02);
        clearInterval(intertime2);
        var mx02pd1 = 0;
        document.getElementById("myPage").innerHTML = '<action id="0102">' + mx02pd1 + '</action>';
        document.getElementById("myNewPage").open(play_game3());
    }

    if ((ans02 === "B" || ans02 === "b") && (nogepd == 0)) {
        clearTimeout(time_02);
        clearInterval(intertime2);
        var mx02pd2 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0102">' + mx02pd2 + '</action>';
        document.getElementById("myNewPage").open(play_game3());
    }

    if ((ans02 === "A" || ans02 === "C" || ans02 === "a" || ans02 === "c") && (nogepd == 10)) {
        clearTimeout(time_02);
        clearInterval(intertime2);
        var mx02pd3 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0102">' + mx02pd3 + '</action>';
        document.getElementById("myNewPage").open(play_game3());
    }

    if ((ans02 === "B" || ans02 === "b") && (nogepd == 10)) {
        clearTimeout(time_02);
        clearInterval(intertime2);
        var mx02pd4 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0102">' + mx02pd4 + '</action>';
        document.getElementById("myNewPage").open(play_game3());
    } else {
        clearTimeout(time_02);
        clearInterval(intertime2);
        play_game3();
    }
}


// câu 3
function play_game3() {
    document.getElementById("myNewPage").innerHTML = '<div class="tab_01"><p class="title_part">Câu 3:</p><p class="comments_part">Đâu là thiết bị lưu trữ dữ liệu ?</p></div><div class="tab_02"><img src="./index_files/010301.jpg" title="Chuột máy tính" alt="Lỗi hình ảnh !" class="img_note" /></div><div class="tab_03"><div class="ms_01"><div id="ms_com1">A</div><img src="./index_files/010302.png" style="width: 150px;" title="A" alt="Lỗi hình ảnh !" class="img_1" /></div><div class="ms_01"><div id="ms_com2">B</div><img style="width: 150px;" src="./index_files/010303.jpg" title="B" alt="Lỗi hình ảnh !" class="img_2" /></div><div class="ms_01"><div id="ms_com3">C</div><img src="./index_files/010304.jpg" title="C" style="width: 150px;" alt="Lỗi hình ảnh !" class="img_3" /></div></div><div id="tab_04"><div class="answer"><input onkeydown="check_key03();" class="dap_text_box" type="text" placeholder="Nhấn phím enter để tiếp tục." id="answer_03" maxlength="1"/></div><div class="time" id="demo3">15</div></div>';

    time_03 = setTimeout(function() {
        alert('Hết thời gian, bạn được 0 điểm \n Bạn sẽ không được lưu điểm bài này !');
        document.getElementById("myNewPage").open(play_game4());
        clearTimeout(time_03);
    }, 15000); // (3)

    intertime3 = setInterval(function() {
        var sn = document.getElementById("demo3").innerHTML;
        var d = sn * 2 / 2;
        var h = d - 1;
        document.getElementById("demo3").innerHTML = h;
    }, 1000);
}

function check_key03() {
    var key = window.event.keyCode;

    if (key == 13) {
        open(check_03());
    }
}

function check_03() {
    var ans03 = document.getElementById("answer_03").value;
    var nogegn = document.getElementById("0102").innerHTML; // xem điểm đã lưu ở câu 3

    // đúng
    if ((ans03 === "A" || ans03 === "a") && (nogegn == 20)) {
        clearTimeout(time_03);
        clearInterval(intertime3);
        var mx03gn1 = 30;
        document.getElementById("myPage").innerHTML = '<action id="0103">' + mx03gn1 + '</action>';
        document.getElementById("myNewPage").open(play_game4());
    }

    if ((ans03 === "A" || ans03 === "a") && (nogegn == 10)) {
        clearTimeout(time_03);
        clearInterval(intertime3);
        var mx03gn2 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0103">' + mx03gn2 + '</action>';
        document.getElementById("myNewPage").open(play_game4());
    }

    if ((ans03 === "A" || ans03 === "a") && (nogegn == 0)) {
        clearTimeout(time_03);
        clearInterval(intertime3);
        var mx03gn3 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0103">' + mx03gn3 + '</action>';
        document.getElementById("myNewPage").open(play_game4());
    }

    // sai
    if ((ans03 === "B" || ans03 === "C" || ans03 === "b" || ans03 === "c") && (nogegn == 20)) {
        clearTimeout(time_03);
        clearInterval(intertime3);
        var mx03gn = 20;
        document.getElementById("myPage").innerHTML = '<action id="0103">' + mx03gn + '</action>';
        document.getElementById("myNewPage").open(play_game4());
    }

    if ((ans03 === "B" || ans03 === "C" || ans03 === "b" || ans03 === "c") && (nogegn == 10)) {
        clearTimeout(time_03);
        clearInterval(intertime3);
        var mx03gn = 10;
        document.getElementById("myPage").innerHTML = '<action id="0103">' + mx03gn + '</action>';
        document.getElementById("myNewPage").open(play_game4());
    }

    if ((ans03 === "B" || ans03 === "C" || ans03 === "b" || ans03 === "c") && (nogegn == 0)) {
        clearTimeout(time_03);
        clearInterval(intertime3);
        var mx03gn = 0;
        document.getElementById("myPage").innerHTML = '<action id="0103">' + mx03gn + '</action>';
        document.getElementById("myNewPage").open(play_game4());
    } else {
        clearTimeout(time_03);
        clearInterval(intertime3);
        play_game4();
    }
}


// câu 4
function play_game4() {
    document.getElementById("myNewPage").innerHTML = '<div class="tab_01"><p class="title_part">Câu 4:</p><p class="comments_part">Đâu là cách tạo một thư mục trong Windows ?</p></div><div class="tab_02"><img src="./index_files/010401.jpg" title="Máy in" alt="Lỗi hình ảnh !" class="img_note" /></div><div class="tab_03"><div class="ms_01"><div id="ms_com1">A.&nbsp;</div><div class="img_1d">New --> Shortcut</div></div><div class="ms_01"><div id="ms_com2">B.&nbsp;</div><div class="img_2d">New --> Contact</div></div><div class="ms_01"><div id="ms_com3">C.&nbsp;</div><div class="img_3d">New --> Folder</div></div></div><div id="tab_04"><div class="answer"><input class="dap_text_box" onkeydown="check_key04();" type="text" placeholder="Nhấn phím enter để tiếp tục." id="answer_04" maxlength="1"/></div><div class="time" id="demo4">15</div></div>';

    time_04 = setTimeout(function() {
        alert('Hết thời gian, bạn được 0 điểm \n Bạn sẽ không được lưu điểm bài này !');
        document.getElementById("myNewPage").open(play_game5());
        clearTimeout(time_04);
    }, 15000); // (4)

    intertime4 = setInterval(function() {
        var ed = document.getElementById("demo4").innerHTML;
        var jq = ed * 2 / 2;
        var q = jq - 1;
        document.getElementById("demo4").innerHTML = q;
    }, 1000);
}

function check_key04() {
    var key = window.event.keyCode;

    if (key == 13) {
        open(check_04());
    }
}

function check_04() {
    var ans04 = document.getElementById("answer_04").value;
    var nogejq = document.getElementById("0103").innerHTML; // xem điểm đã lưu ở câu 3

    if ((ans04 === "C" || ans04 === "c") && (nogejq == 30)) {
        clearTimeout(time_04);
        clearInterval(intertime4);
        var mx04jq1 = 40;
        document.getElementById("myPage").innerHTML = '<action id="0104">' + mx04jq1 + '</action>';
        document.getElementById("myNewPage").open(play_game5());
    }

    if ((ans04 === "C" || ans04 === "c") && (nogejq == 20)) {
        clearTimeout(time_04);
        clearInterval(intertime4);
        var mx04jq2 = 30;
        document.getElementById("myPage").innerHTML = '<action id="0104">' + mx04jq2 + '</action>';
        document.getElementById("myNewPage").open(play_game5());
    }

    if ((ans04 === "C" || ans04 === "c") && (nogejq == 10)) {
        clearTimeout(time_04);
        clearInterval(intertime4);
        var mx04jq3 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0104">' + mx04jq3 + '</action>';
        document.getElementById("myNewPage").open(play_game5());
    }

    if ((ans04 === "C" || ans04 === "c") && (nogejq == 0)) {
        clearTimeout(time_04);
        clearInterval(intertime4);
        var mx04jq4 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0104">' + mx04jq4 + '</action>';
        document.getElementById("myNewPage").open(play_game5());
    }

    // sai
    if ((ans04 === "A" || ans04 === "B" || ans04 === "b" || ans04 === "a") && (nogejq == 30)) {
        clearTimeout(time_04);
        clearInterval(intertime4);
        var mx04jq5 = 30;
        document.getElementById("myPage").innerHTML = '<action id="0104">' + mx04jq5 + '</action>';
        document.getElementById("myNewPage").open(play_game5());
    }

    if ((ans04 === "A" || ans04 === "B" || ans04 === "b" || ans04 === "a") && (nogejq == 20)) {
        clearTimeout(time_04);
        clearInterval(intertime4);
        var mx04jq6 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0104">' + mx04jq6 + '</action>';
        document.getElementById("myNewPage").open(play_game5());
    }

    if ((ans04 === "A" || ans04 === "B" || ans04 === "b" || ans04 === "a") && (nogejq == 10)) {
        clearTimeout(time_04);
        clearInterval(intertime4);
        var mx04jq7 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0104">' + mx04jq7 + '</action>';
        document.getElementById("myNewPage").open(play_game5());
    }

    if ((ans04 === "A" || ans04 === "B" || ans04 === "b" || ans04 === "a") && (nogejq == 0)) {
        clearTimeout(time_04);
        clearInterval(intertime4);
        var mx04jq8 = 0;
        document.getElementById("myPage").innerHTML = '<action id="0104">' + mx04jq8 + '</action>';
        document.getElementById("myNewPage").open(play_game5());
    } else {
        clearTimeout(time_04);
        clearInterval(intertime4);
        play_game5();
    }
}

// câu 5
function play_game5() {
    document.getElementById("myNewPage").innerHTML = '<div class="tab_01"><p class="title_part">Câu 5:</p><p class="comments_part">Định dạng của file chương trình là ?</p></div><div class="tab_02"><img src="./index_files/010501.jpg" title="" alt="Lỗi hình ảnh !" class="img_note" /></div><div class="tab_03"><div class="ms_01"><div id="ms_com1">A</div><img src="./index_files/010502.svg" title="A" alt="Lỗi hình ảnh !" class="img_1" /></div><div class="ms_01"><div id="ms_com2">B</div><img src="./index_files/010503.svg" title="B" alt="Lỗi hình ảnh !" class="img_2" /></div><div class="ms_01"><div id="ms_com3">C</div><img src="./index_files/010504.svg" title="C" alt="Lỗi hình ảnh !" class="img_3" /></div></div><div id="tab_04"><div class="answer"><input class="dap_text_box" onkeydown="check_key05();" type="text" placeholder="Nhấn phím enter để tiếp tục." id="answer_05" maxlength="1"/></div><div class="time" id="demo5">15</div></div>';

    time_05 = setTimeout(function() {
        alert('Hết thời gian, bạn được 0 điểm. \n Bạn sẽ không được lưu điểm bài này !');
        document.getElementById("myNewPage").open(play_game6());
        clearTimeout(time_05);
    }, 15000); // (5)

    intertime5 = setInterval(function() {
        var e = document.getElementById("demo5").innerHTML;
        var ed = e * 2 / 2
        var vb = ed - 1;
        document.getElementById("demo5").innerHTML = vb;
    }, 1000);
}

function check_key05() {
    var key = window.event.keyCode;

    if (key == 13) {
        open(check_05());
    }
}

function check_05() {
    var ans05 = document.getElementById("answer_05").value;
    var nogevb = document.getElementById("0104").innerHTML; // xem điểm đã lưu ở câu 4

    if ((ans05 === "B" || ans05 === "b") && (nogevb == 40)) {
        clearTimeout(time_05);
        clearInterval(intertime5);
        var mx05vb1 = 50;
        document.getElementById("myPage").innerHTML = '<action id="0105">' + mx05vb1 + '</action>';
        document.getElementById("myNewPage").open(play_game6());
    }

    if ((ans05 === "B" || ans05 === "b") && (nogevb == 30)) {
        clearTimeout(time_05);
        clearInterval(intertime5);
        var mx05vb2 = 40;
        document.getElementById("myPage").innerHTML = '<action id="0105">' + mx05vb2 + '</action>';
        document.getElementById("myNewPage").open(play_game6());
    }

    if ((ans05 === "B" || ans05 === "b") && (nogevb == 20)) {
        clearTimeout(time_05);
        clearInterval(intertime5);
        var mx05vb3 = 30;
        document.getElementById("myPage").innerHTML = '<action id="0105">' + mx05vb3 + '</action>';
        document.getElementById("myNewPage").open(play_game6());
    }

    if ((ans05 === "B" || ans05 === "b") && (nogevb == 10)) {
        clearTimeout(time_05);
        clearInterval(intertime5);
        var mx05vb4 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0105">' + mx05vb4 + '</action>';
        document.getElementById("myNewPage").open(play_game6());
    }

    if ((ans05 === "B" || ans05 === "b") && (nogevb == 0)) {
        clearTimeout(time_05);
        clearInterval(intertime5);
        var mx05vb5 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0105">' + mx05vb5 + '</action>';
        document.getElementById("myNewPage").open(play_game6());
    }

    // sai
    if ((ans05 === "A" || ans05 === "C" || ans05 === "a" || ans05 === "c") && (nogevb == 40)) {
        clearTimeout(time_05);
        clearInterval(intertime5);
        var mx05vb6 = 40;
        document.getElementById("myPage").innerHTML = '<action id="0105">' + mx05vb6 + '</action>';
        document.getElementById("myNewPage").open(play_game6());
    }

    if ((ans05 === "A" || ans05 === "C" || ans05 === "a" || ans05 === "c") && (nogevb == 30)) {
        clearTimeout(time_05);
        clearInterval(intertime5);
        var mx05vb7 = 30;
        document.getElementById("myPage").innerHTML = '<action id="0105">' + mx05vb7 + '</action>';
        document.getElementById("myNewPage").open(play_game6());
    }

    if ((ans05 === "A" || ans05 === "C" || ans05 === "a" || ans05 === "c") && (nogevb == 20)) {
        clearTimeout(time_05);
        clearInterval(intertime5);
        var mx05vb8 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0105">' + mx05vb8 + '</action>';
        document.getElementById("myNewPage").open(play_game6());
    }

    if ((ans05 === "A" || ans05 === "C" || ans05 === "a" || ans05 === "c") && (nogevb == 10)) {
        clearTimeout(time_05);
        clearInterval(intertime5);
        var mx05vb9 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0105">' + mx05vb9 + '</action>';
        document.getElementById("myNewPage").open(play_game6());
    }

    if ((ans05 === "A" || ans05 === "C" || ans05 === "a" || ans05 === "c") && (nogevb == 0)) {
        clearTimeout(time_05);
        clearInterval(intertime5);
        var mx05vb10 = 0;
        document.getElementById("myPage").innerHTML = '<action id="0105">' + mx05vb10 + '</action>';
        document.getElementById("myNewPage").open(play_game6());
    } else {
        clearTimeout(time_05);
        clearInterval(intertime5);
        play_game6();
    }
}


// câu 6
function play_game6() {
    document.getElementById("myNewPage").innerHTML = '<div class="tab_01"><p class="title_part">Câu 6:</p><p class="comments_part">CPU được ví như ...... của máy tính.</p></div><div class="tab_02"><img style="height:195px !important;" src="./index_files/010601.jpg" title="SVG" alt="Lỗi hình ảnh !" class="img_note" /></div><div class="tab_03"><div class="ms_01"><div id="ms_com1">A</div><img style="height: 100px !important; width: 150px !important;" src="./index_files/010603.svg" title="A" alt="Lỗi hình ảnh !" class="img_1" /></div><div class="ms_01"><div id="ms_com2">B</div><img style="height: 100px !important; width: 150px !important;" src="./index_files/010602.svg" title="B" alt="Lỗi hình ảnh !" class="img_2" /></div><div class="ms_01"><div id="ms_com3">C</div><img src="./index_files/010604.svg" style="height: 100px !important; width: 150px !important;" title="C"  alt="Lỗi hình ảnh !" class="img_3" /></div></div><div id="tab_04"><div class="answer"><input onkeydown="check_key06();" class="dap_text_box" type="text" placeholder="Nhấn phím enter để tiếp tục."" id="answer_06" maxlength="1"/></div><div class="time" id="demo6">15</div></div>';

    time_06 = setTimeout(function() {
        alert('Hết thời gian, bạn được 0 điểm \n Bạn sẽ không được lưu điểm bài này !');
        document.getElementById("myNewPage").open(play_game7());
        clearTimeout(time_06);
    }, 15000); // (6)

    intertime6 = setInterval(function() {
        var sx = document.getElementById("demo6").innerHTML;
        var v = sx * 2 / 2;
        var h = v - 1;
        document.getElementById("demo6").innerHTML = h;
    }, 1000);
}

function check_key06() {
    var key = window.event.keyCode;

    if (key == 13) {
        open(check_06());
    }
}

function check_06() {
    var ans06 = document.getElementById("answer_06").value;
    var nogelex = document.getElementById("0105").innerHTML; // xem điểm đã lưu ở câu 5	   

    // đúng
    if ((ans06 === "B" || ans06 === "b") && (nogelex == 50)) {
        clearTimeout(time_06);
        clearInterval(intertime6);
        var mx06lex1 = 60;
        document.getElementById("myPage").innerHTML = '<action id="0106">' + mx06lex1 + '</action>';
        document.getElementById("myNewPage").open(play_game7());
    }

    if ((ans06 === "B" || ans06 === "b") && (nogelex == 40)) {
        clearTimeout(time_06);
        clearInterval(intertime6);
        var mx06lex2 = 50;
        document.getElementById("myPage").innerHTML = '<action id="0106">' + mx06lex2 + '</action>';
        document.getElementById("myNewPage").open(play_game7());
    }

    if ((ans06 === "B" || ans06 === "b") && (nogelex == 30)) {
        clearTimeout(time_06);
        clearInterval(intertime6);
        var mx06lex3 = 40;
        document.getElementById("myPage").innerHTML = '<action id="0106">' + mx06lex3 + '</action>';
        document.getElementById("myNewPage").open(play_game7());
    }

    if ((ans06 === "B" || ans06 === "b") && (nogelex == 20)) {
        clearTimeout(time_06);
        clearInterval(intertime6);
        var mx06lex4 = 30;
        document.getElementById("myPage").innerHTML = '<action id="0106">' + mx06lex4 + '</action>';
        document.getElementById("myNewPage").open(play_game7());
    }

    if ((ans06 === "B" || ans06 === "b") && (nogelex == 10)) {
        clearTimeout(time_06);
        clearInterval(intertime6);
        var mx06lex5 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0106">' + mx06lex5 + '</action>';
        document.getElementById("myNewPage").open(play_game7());
    }

    if ((ans06 === "B" || ans06 === "b") && (nogelex == 0)) {
        clearTimeout(time_06);
        clearInterval(intertime6);
        var mx06lex6 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0106">' + mx06lex6 + '</action>';
        document.getElementById("myNewPage").open(play_game7());
    }


    // sai
    if ((ans06 === "A" || ans06 === "C" || ans06 === "a" || ans06 === "c") && (nogelex == 50)) {
        clearTimeout(time_06);
        clearInterval(intertime6);
        var mx06lex7 = 50;
        document.getElementById("myPage").innerHTML = '<action id="0106">' + mx06lex7 + '</action>';
        document.getElementById("myNewPage").open(play_game7());
    }

    if ((ans06 === "A" || ans06 === "C" || ans06 === "a" || ans06 === "c") && (nogelex == 40)) {
        clearTimeout(time_06);
        clearInterval(intertime6);
        var mx06lex8 = 40;
        document.getElementById("myPage").innerHTML = '<action id="0106">' + mx06lex8 + '</action>';
        document.getElementById("myNewPage").open(play_game7());
    }

    if ((ans06 === "A" || ans06 === "C" || ans06 === "a" || ans06 === "c") && (nogelex == 30)) {
        clearTimeout(time_06);
        clearInterval(intertime6);
        var mx06lex9 = 30;
        document.getElementById("myPage").innerHTML = '<action id="0106">' + mx06lex9 + '</action>';
        document.getElementById("myNewPage").open(play_game7());
    }

    if ((ans06 === "A" || ans06 === "C" || ans06 === "a" || ans06 === "c") && (nogelex == 20)) {
        clearTimeout(time_06);
        clearInterval(intertime6);
        var mx06lex10 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0106">' + mx06lex10 + '</action>';
        document.getElementById("myNewPage").open(play_game7());
    }

    if ((ans06 === "A" || ans06 === "C" || ans06 === "a" || ans06 === "c") && (nogelex == 10)) {
        clearTimeout(time_06);
        clearInterval(intertime6);
        var mx06lex11 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0106">' + mx06lex11 + '</action>';
        document.getElementById("myNewPage").open(play_game7());
    }

    if ((ans06 === "A" || ans06 === "C" || ans06 === "a" || ans06 === "c") && (nogelex == 0)) {
        clearTimeout(time_06);
        clearInterval(intertime6);
        var mx06lex12 = 0;
        document.getElementById("myPage").innerHTML = '<action id="0106">' + mx06lex12 + '</action>';
        document.getElementById("myNewPage").open(play_game7());
    } else {
        clearTimeout(time_06);
        clearInterval(intertime6);
        play_game7();
    }
}


// câu 7
function play_game7() {
    document.getElementById("myNewPage").innerHTML = '<div class="tab_01"><p class="title_part">Câu 7:</p><p class="comments_part">Đâu là biểu tượng của phần mềm Word ?</p></div><div class="tab_02"><img src="./index_files/010701.jpg" title="Windows" alt="Lỗi hình ảnh !" class="img_note" /></div><div class="tab_03"><div class="ms_01"><div id="ms_com1">A</div><img src="./index_files/010702.png" title="A" alt="Lỗi hình ảnh !" class="img_1" /></div><div class="ms_01"><div id="ms_com2">B</div><img src="./index_files/010703.png" title="B" alt="Lỗi hình ảnh !" class="img_2" /></div><div class="ms_01"><div id="ms_com3"></div><img src="./index_files/010704.png" title="C" alt="Lỗi hình ảnh !" class="img_3" /></div></div><div id="tab_04"><div class="answer"><input class="dap_text_box" type="text" onkeydown="check_key07();" placeholder="Nhấn phím enter để tiếp tục" id="answer_07" maxlength="1"/></div><div class="time" id="demo7">15</div></div>';

    time_07 = setTimeout(function() {
        alert('Hết thời gian, bạn được 0 điểm \n Bạn sẽ không được lưu điểm bài này !');
        document.getElementById("myNewPage").open(play_game8());
        clearTimeout(time_07);
    }, 15000); // (7)

    intertime7 = setInterval(function() {
        var sz = document.getElementById("demo7").innerHTML;
        var wq = sz * 2 / 2
        var oz = wq - 1;
        document.getElementById("demo7").innerHTML = oz;
    }, 1000);
}

function check_key07() {
    var key = window.event.keyCode;

    if (key == 13) {
        open(check_07());
    }
}

function check_07() {
    var ans07 = document.getElementById("answer_07").value;
    var nogetoz = document.getElementById("0106").innerHTML; // xem điểm đã lưu ở câu 6	   

    // đúng
    if ((ans07 === "A" || ans07 === "a") && (nogetoz == 60)) {
        clearTimeout(time_07);
        clearInterval(intertime7);
        var mx07toz1 = 70;
        document.getElementById("myPage").innerHTML = '<action id="0107">' + mx07toz1 + '</action>';
        document.getElementById("myNewPage").open(play_game8());
    }

    if ((ans07 === "A" || ans07 === "a") && (nogetoz == 50)) {
        clearTimeout(time_07);
        clearInterval(intertime7);
        var mx07toz2 = 60;
        document.getElementById("myPage").innerHTML = '<action id="0107">' + mx07toz2 + '</action>';
        document.getElementById("myNewPage").open(play_game8());
    }

    if ((ans07 === "A" || ans07 === "a") && (nogetoz == 40)) {
        clearTimeout(time_07);
        clearInterval(intertime7);
        var mx07toz3 = 50;
        document.getElementById("myPage").innerHTML = '<action id="0107">' + mx07toz3 + '</action>';
        document.getElementById("myNewPage").open(play_game8());
    }

    if ((ans07 === "A" || ans07 === "a") && (nogetoz == 30)) {
        clearTimeout(time_07);
        clearInterval(intertime7);
        var mx07toz4 = 40;
        document.getElementById("myPage").innerHTML = '<action id="0107">' + mx07toz4 + '</action>';
        document.getElementById("myNewPage").open(play_game8());
    }

    if ((ans07 === "A" || ans07 === "a") && (nogetoz == 20)) {
        clearTimeout(time_07);
        clearInterval(intertime7);
        var mx07toz5 = 30;
        document.getElementById("myPage").innerHTML = '<action id="0107">' + mx07toz5 + '</action>';
        document.getElementById("myNewPage").open(play_game8());
    }

    if ((ans07 === "A" || ans07 === "a") && (nogetoz == 10)) {
        clearTimeout(time_07);
        clearInterval(intertime7);
        var mx07toz6 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0107">' + mx07toz6 + '</action>';
        document.getElementById("myNewPage").open(play_game8());
    }

    if ((ans07 === "A" || ans07 === "a") && (nogetoz == 0)) {
        clearTimeout(time_07);
        clearInterval(intertime7);
        var mx07toz7 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0107">' + mx07toz7 + '</action>';
        document.getElementById("myNewPage").open(play_game8());
    }

    // sai
    if ((ans07 === "B" || ans07 === "C" || ans07 === "b" || ans07 === "c") && (nogetoz == 60)) {
        clearTimeout(time_07);
        clearInterval(intertime7);
        var mx07toz8 = 60;
        document.getElementById("myPage").innerHTML = '<action id="0107">' + mx07toz8 + '</action>';
        document.getElementById("myNewPage").open(play_game8());
    }

    if ((ans07 === "B" || ans07 === "C" || ans07 === "b" || ans07 === "c") && (nogetoz == 50)) {
        clearTimeout(time_07);
        clearInterval(intertime7);
        var mx07toz9 = 50;
        document.getElementById("myPage").innerHTML = '<action id="0107">' + mx07toz9 + '</action>';
        document.getElementById("myNewPage").open(play_game8());
    }

    if ((ans07 === "B" || ans07 === "C" || ans07 === "b" || ans07 === "c") && (nogetoz == 40)) {
        clearTimeout(time_07);
        clearInterval(intertime7);
        var mx07toz10 = 40;
        document.getElementById("myPage").innerHTML = '<action id="0107">' + mx07toz10 + '</action>';
        document.getElementById("myNewPage").open(play_game8());
    }

    if ((ans07 === "B" || ans07 === "C" || ans07 === "b" || ans07 === "c") && (nogetoz == 30)) {
        clearTimeout(time_07);
        clearInterval(intertime7);
        var mx07toz11 = 30;
        document.getElementById("myPage").innerHTML = '<action id="0107">' + mx07toz11 + '</action>';
        document.getElementById("myNewPage").open(play_game8());
    }

    if ((ans07 === "B" || ans07 === "C" || ans07 === "b" || ans07 === "c") && (nogetoz == 20)) {
        clearTimeout(time_07);
        clearInterval(intertime7);
        var mx07toz12 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0107">' + mx07toz12 + '</action>';
        document.getElementById("myNewPage").open(play_game8());
    }

    if ((ans07 === "B" || ans07 === "C" || ans07 === "b" || ans07 === "c") && (nogetoz == 10)) {
        clearTimeout(time_07);
        clearInterval(intertime7);
        var mx07toz13 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0107">' + mx07toz13 + '</action>';
        document.getElementById("myNewPage").open(play_game8());
    }

    if ((ans07 === "B" || ans07 === "C" || ans07 === "b" || ans07 === "c") && (nogetoz == 0)) {
        clearTimeout(time_07);
        clearInterval(intertime7);
        var mx07toz14 = 0;
        document.getElementById("myPage").innerHTML = '<action id="0107">' + mx07toz14 + '</action>';
        document.getElementById("myNewPage").open(play_game8());
    } else {
        clearTimeout(time_07);
        clearInterval(intertime7);
        play_game8();
    }
}



// câu 8
function play_game8() {
    document.getElementById("myNewPage").innerHTML = '<div class="tab_01"><p class="title_part">Câu 8:</p><p class="comments_part">Đâu là biểu tượng của thư mục Tài Liệu ?</p></div><div class="tab_02"><img src="./index_files/010801.jpg" title="Wifi" alt="Lỗi hình ảnh !" class="img_note" /></div><div class="tab_03"><div class="ms_01"><div id="ms_com1">A</div><img src="./index_files/010802.png" title="A" alt="Lỗi hình ảnh !" class="img_1" /></div><div class="ms_01"><div id="ms_com2">B</div><img src="./index_files/010803.png" title="B" alt="Lỗi hình ảnh !" class="img_2" /></div><div class="ms_01"><div id="ms_com3">C</div><img src="./index_files/010804.png" title="C" alt="Lỗi hình ảnh !" class="img_3" /></div></div><div id="tab_04"><div class="answer"><input class="dap_text_box" type="text" onkeydown="check_key08();" placeholder="Nhấn phím enter để tiếp tục." id="answer_08" maxlength="1"/></div><div class="time" id="demo8">15</div></div>';

    time_08 = setTimeout(function() {
        alert('Hết thời gian, bạn được 0 điểm \n Bạn sẽ không được lưu điểm bài này !');
        document.getElementById("myNewPage").open(play_game9());
        clearTimeout(time_08);
    }, 15000); // (8)

    intertime8 = setInterval(function() {
        var cm = document.getElementById("demo8").innerHTML;
        var nerocm = cm * 2 / 2;
        var hitcm = nerocm - 1;
        document.getElementById("demo8").innerHTML = hitcm;
    }, 1000);
}

function check_key08() {
    var key = window.event.keyCode;

    if (key == 13) {
        open(check_08());
    }
}

function check_08() {
    var ans08 = document.getElementById("answer_08").value;
    var nogecm = document.getElementById("0107").innerHTML; // xem điểm đã lưu ở câu 7

    // đúng
    if ((ans08 === "C" || ans08 === "c") && (nogecm == 70)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm1 = 80;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm1 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    }

    if ((ans08 === "C" || ans08 === "c") && (nogecm == 60)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm2 = 70;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm2 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    }

    if ((ans08 === "C" || ans08 === "c") && (nogecm == 50)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm3 = 60;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm3 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    }

    if ((ans08 === "C" || ans08 === "c") && (nogecm == 40)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm4 = 50;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm4 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    }

    if ((ans08 === "C" || ans08 === "c") && (nogecm == 30)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm5 = 40;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm5 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    }

    if ((ans08 === "C" || ans08 === "c") && (nogecm == 20)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm6 = 30;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm6 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    }

    if ((ans08 === "C" || ans08 === "c") && (nogecm == 10)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm7 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm7 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    }

    if ((ans08 === "C" || ans08 === "c") && (nogecm == 0)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm8 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm8 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    }

    // sai
    if ((ans08 === "B" || ans08 === "A" || ans08 === "b" || ans08 === "a") && (nogecm == 70)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm9 = 70;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm9 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    }

    if ((ans08 === "B" || ans08 === "A" || ans08 === "b" || ans08 === "a") && (nogecm == 60)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm10 = 60;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm10 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    }

    if ((ans08 === "B" || ans08 === "A" || ans08 === "b" || ans08 === "a") && (nogecm == 50)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm11 = 50;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm11 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    }

    if ((ans08 === "B" || ans08 === "A" || ans08 === "b" || ans08 === "a") && (nogecm == 40)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm12 = 40;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm12 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    }

    if ((ans08 === "B" || ans08 === "A" || ans08 === "b" || ans08 === "a") && (nogecm == 30)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm13 = 30;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm13 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    }

    if ((ans08 === "B" || ans08 === "A" || ans08 === "b" || ans08 === "a") && (nogecm == 20)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm14 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm14 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    }

    if ((ans08 === "B" || ans08 === "A" || ans08 === "b" || ans08 === "a") && (nogecm == 10)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm15 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm15 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    }

    if ((ans08 === "B" || ans08 === "A" || ans08 === "b" || ans08 === "a") && (nogecm == 0)) {
        clearTimeout(time_08);
        clearInterval(intertime8);
        var mx08cm16 = 0;
        document.getElementById("myPage").innerHTML = '<action id="0108">' + mx08cm16 + '</action>';
        document.getElementById("myNewPage").open(play_game9());
    } else {
        clearTimeout(time_08);
        clearInterval(intertime8);
        play_game9();
    }
}

// câu 9
function play_game9() {
    document.getElementById("myNewPage").innerHTML = '<div class="tab_01"><p class="title_part">Câu 9:</p><p class="comments_part">Trong chương trình MS Word, phím tắt nào dùng để</p><p class="comments_part" style="margin-top: -50px; display: block;"> mở tập tin ?</p></div><div class="tab_02"><img src="./index_files/010901.jpg" title="Chuột" alt="Lỗi hình ảnh !" class="img_note" style="height: 160px;" /></div><div class="tab_03"><div class="ms_01"><div id="ms_com1">A</div><img style="width: 150px;  height: 100px !important;" src="./index_files/010902.png" title="A" alt="Lỗi hình ảnh !" class="img_1" /></div><div class="ms_01"><div id="ms_com2">B</div><img style="width: 150px;  height: 100px !important;" src="./index_files/010903.png" title="B" alt="Lỗi hình ảnh !" class="img_2" /></div><div class="ms_01"><div id="ms_com3">C</div><img src="./index_files/010904.png" style="width: 150px;  height: 100px !important;" title="C" alt="Lỗi hình ảnh !" class="img_3" /></div></div><div id="tab_04"><div class="answer"><input class="dap_text_box" onkeydown="check_key09();" type="text" placeholder="Nhấn phím enter để tiếp tục." id="answer_09" maxlength="1"/></div><div class="time" id="demo9">15</div></div>';

    time_09 = setTimeout(function() {
        alert('Hết thời gian, bạn được 0 điểm. \n Bạn sẽ không được lưu điểm bài này !');
        document.getElementById("myNewPage").open(play_game10());
        clearTimeout(time_09);
    }, 15000); // (9)

    intertime9 = setInterval(function() {
        var s = document.getElementById("demo9").innerHTML;
        var t = s * 2 / 2;
        var i = t - 1;
        document.getElementById("demo9").innerHTML = i;
    }, 1000);
}

function check_key09() {
    var key = window.event.keyCode;

    if (key == 13) {
        open(check_09());
    }
}

function check_09() {
    var ans09 = document.getElementById("answer_09").value;
    var nogeit = document.getElementById("0108").innerHTML; // xem điểm đã lưu ở câu 8

    if ((ans09 === "C" || ans09 === "c") && (nogeit == 80)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it1 = 90;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it1 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "C" || ans09 === "c") && (nogeit == 70)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it2 = 80;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it2 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "C" || ans09 === "c") && (nogeit == 60)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it3 = 70;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it3 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "C" || ans09 === "c") && (nogeit == 50)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it9 = 60;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it9 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "C" || ans09 === "c") && (nogeit == 41)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it4 = 50;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it4 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "C" || ans09 === "c") && (nogeit == 30)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it5 = 40;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it5 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "C" || ans09 === "c") && (nogeit == 20)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it6 = 30;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it6 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "C" || ans09 === "c") && (nogeit == 10)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it7 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it7 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "C" || ans09 === "c") && (nogeit == 0)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it8 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it8 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    // sai
    if ((ans09 === "A" || ans09 === "a" || ans09 === "B" || ans09 === "b") && (nogeit == 80)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it10 = 80;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it10 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "A" || ans09 === "a" || ans09 === "B" || ans09 === "b") && (nogeit == 70)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it11 = 70;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it11 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "A" || ans09 === "a" || ans09 === "B" || ans09 === "b") && (nogeit == 60)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it12 = 60;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it12 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "A" || ans09 === "a" || ans09 === "B" || ans09 === "b") && (nogeit == 50)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it13 = 50;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it13 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "A" || ans09 === "a" || ans09 === "B" || ans09 === "b") && (nogeit == 40)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it15 = 40;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it15 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "A" || ans09 === "a" || ans09 === "B" || ans09 === "b") && (nogeit == 30)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it14 = 30;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it14 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "A" || ans09 === "a" || ans09 === "B" || ans09 === "b") && (nogeit == 20)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it16 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it16 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "A" || ans09 === "a" || ans09 === "B" || ans09 === "b") && (nogeit == 10)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it17 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it17 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    }

    if ((ans09 === "A" || ans09 === "a" || ans09 === "B" || ans09 === "b") && (nogeit == 0)) {
        clearTimeout(time_09);
        clearInterval(intertime9);
        var mx09it18 = 0;
        document.getElementById("myPage").innerHTML = '<action id="0109">' + mx09it18 + '</action>';
        document.getElementById("myNewPage").open(play_game10());
    } else {
        clearTimeout(time_09);
        clearInterval(intertime9);
        play_game10();
    }
}

// câu 10
function play_game10() {
    document.getElementById("myNewPage").innerHTML = '<div class="tab_01"><p class="title_part">Câu 10:</p><p class="comments_part">Hệ điều hành nào thông dụng nhất hiện nay ?</p></div><div class="tab_02"><img src="./index_files/011001.jpg" style="height:200px !important;" title="" alt="Lỗi hình ảnh !" class="img_note" /></div><div class="tab_03"><div class="ms_01"><div id="ms_com1">A</div><img src="./index_files/011002.png"  title="A" alt="Lỗi hình ảnh !" style="height: 100px !important; width: 140px !important;" class="img_1" /></div><div class="ms_01"><div id="ms_com2">B</div><img style="height: 100px !important; width: 140px !important;" src="./index_files/011003.png"  title="B" alt="Lỗi hình ảnh !" class="img_2" /></div><div class="ms_01"><div id="ms_com3">C</div><img src="./index_files/011004.png" style="height: 100px !important; width: 140px !important;" title="C"  alt="Lỗi hình ảnh !" class="img_3" /></div></div><div id="tab_04"><div class="answer"><input class="dap_text_box" type="text" placeholder="Nhấn phím enter để tiếp tục." id="answer_10" onkeydown="check_key10();" maxlength="1"/></div><div class="time" id="demo10">15</div></div>';

    time_10 = setTimeout(function() {
        alert('Hết thời gian, bạn được 0 điểm \n Bạn sẽ không được lưu điểm bài này !');
        document.getElementById("myNewPage").open(check_1());
        clearTimeout(time_10);
    }, 15000); // (10)

    intertime10 = setInterval(function() {
        var p = document.getElementById("demo10").innerHTML;
        var o = p * 2 / 2;
        var h = o - 1;
        document.getElementById("demo10").innerHTML = h;
    }, 1000);
}

function check_key10() {
    var key = window.event.keyCode;

    if (key == 13) {
        open(check_10());
    }
}

function check_10() {
    var ans10 = document.getElementById("answer_10").value;
    var nogevn = document.getElementById("0109").innerHTML; // xem điểm đã lưu ở câu 9

    if ((ans10 === "A" || ans10 === "a") && (nogevn == 90)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn1 = 100;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn1 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "A" || ans10 === "a") && (nogevn == 80)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn2 = 90;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn2 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "A" || ans10 === "a") && (nogevn == 70)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn3 = 80;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn3 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "A" || ans10 === "a") && (nogevn == 60)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn4 = 70;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn4 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "A" || ans10 === "a") && (nogevn == 50)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn5 = 60;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn5 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "A" || ans10 === "a") && (nogevn == 40)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn6 = 50;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn6 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "A" || ans10 === "a") && (nogevn == 30)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn7 = 40;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn7 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "A" || ans10 === "a") && (nogevn == 20)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn8 = 30;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn8 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "A" || ans10 === "a") && (nogevn == 10)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn9 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn9 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "A" || ans10 === "a") && (nogevn == 0)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn10 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn10 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    //sai
    if ((ans10 === "C" || ans10 === "c" || ans10 === "B" || ans10 === "b") && (nogevn == 90)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn1 = 90;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn1 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "C" || ans10 === "c" || ans10 === "B" || ans10 === "b") && (nogevn == 80)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn2 = 80;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn2 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "C" || ans10 === "c" || ans10 === "B" || ans10 === "b") && (nogevn == 70)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn3 = 70;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn3 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "C" || ans10 === "c" || ans10 === "B" || ans10 === "b") && (nogevn == 60)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn4 = 60;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn4 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "C" || ans10 === "c" || ans10 === "B" || ans10 === "b") && (nogevn == 50)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn5 = 50;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn5 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "C" || ans10 === "c" || ans10 === "B" || ans10 === "b") && (nogevn == 40)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn6 = 40;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn6 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "C" || ans10 === "c" || ans10 === "B" || ans10 === "b") && (nogevn == 30)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn7 = 30;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn7 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "C" || ans10 === "c" || ans10 === "B" || ans10 === "b") && (nogevn == 20)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn8 = 20;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn8 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "C" || ans10 === "c" || ans10 === "B" || ans10 === "b") && (nogevn == 10)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn9 = 10;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn9 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    }

    if ((ans10 === "C" || ans10 === "c" || ans10 === "B" || ans10 === "b") && (nogevn == 0)) {
        clearTimeout(time_10);
        clearInterval(intertime10);
        var mx10vn10 = 0;
        document.getElementById("myPage").innerHTML = '<action id="0110">' + mx10vn10 + '</action>';
        document.getElementById("myNewPage").open(check_1());
    } else {
        clearTimeout(time_10);
        clearInterval(intertime10);
        check_1();
    }
}

// hàm lưu điểm bài 1
function check_1() {
    var point1 = document.getElementById("0110").innerHTML;
    var name = document.getElementById("name").innerHTML;

    if (name === "") {
        document.getElementById("point").innerHTML = '<action id="01">0</action>';
    } else {
        document.getElementById("point").innerHTML = '<action id="01">' + point1 + '</action>';
        alert('Chúc mừng bạn đã hoàn thành bài thi. Bạn được' + ' ' + point1 + ' ' + 'điểm !');
    }

    time_1q = setTimeout(function() {
        document.getElementById("myNewPage").innerHTML = '<div id="tab_bar"><div id="name_account"><div id="account_id">Chào bạn' + ' ' + ' ' + ' ' + name + '</div></div><div id="myaccount"><a href="javascript:void(0);" class="myname" onclick="myaccount();">&nbsp;</a></div></div><div id="level_game"><button id="button_level1" onclick="part0101()">Vòng 1</button><button id="button_level2" onclick="start_2();">Vòng 2</button><button id="button_level3" onclick="part0103();">Vòng 3</button><button id="button_level4" onclick="part0104();">Vòng 4</button></div><div id="popup"></div><div id="tools"><img src="./index_files/img_tools.png" id="button_tools" onclick="tools();" /></div>';
        clearTimeout(time_1q);
    }, 2000);
}

function part0101() {
    alert('Bạn đã thi vòng 1');
}

function part0103() {
    alert('Bạn chưa thi vòng 2 !');
}

function part0104() {
    alert('Bạn chưa thi vòng 3 !');
}

/* 

		End Post 1 and Post 1 test.
		There are a total of 10 questions with 10 questions test and test commands 110 content between the previous and current card.
		Note: xxx-xxx-xxx-9603
		
*/