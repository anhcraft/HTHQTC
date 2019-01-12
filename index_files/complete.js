function complete() {// create by Hoc Tin Hoc Qua Tro Choi
	var compoint = document.getElementById("vi4s").innerHTML;
	var pointless = compoint*2/2;
	var comtimed = document.getElementById("timeless").innerHTML;
	var comtime = comtimed*2/2;
	
	document.getElementById("myNewPage").innerHTML = '<div id="complete"><div id="textcom">Hoàn Thành</div><div id="textcomed">Chúc mừng bạn đã hoàn thành tất cả các vòng thi !</div><div id="table-complete"><p id="mytitletable">Kết Quả</p><div id="comedpoint"><div class="tue">Tổng điểm</div><div>' + pointless + '/600</div></div><br><div id="comedtime"> <div class="tues">Thời gian</div><div>' + comtime + '</div></div></div></div><div id="inputmoreless"><button class="deletecomed" onclick="back();">Về trang chủ</button><button class="deletecomed" onclick="deleted();">Kết thúc</button></div>';
}

function back() {
	document.getElementById("myBody").innerHTML = '<noscript>Lỗi Javascript !</noscript><div id="myname"></div><div id="timeless" class="berson"></div>		<div id="point" class="berson"></div><div id="v2" class="berson"></div><div id="v3ed" class="berson"></div><div id="v4" class="berson"></div><div id="more"></div><div id="myPage" class="berson"></div><div id="myNewPage"><img id="myLogo" src="./index_files/logo_582x204px.svg" alt="Lỗi không tải được hình ảnh !" title="Học Tin Học Qua Trò Chơi" /><button id="button_start" onclick="click_button_start();">Bắt Đầu</button></div>';
}

function deleted() {
	window.close();
}