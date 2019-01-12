// img
function stoolseder() {
    var msr1 = window.prompt('Link ảnh', '');
	var msr2 = window.prompt('Dài px', '');
	var msr3 = window.prompt('Rộng px', '');
	var msr4 = window.prompt('Văn bản thay thế', '');
	var msr5 = window.prompt('Tiêu đề ảnh', '');

    var xed = document.createElement("IMG");
    xed.setAttribute("src", msr1);
    xed.setAttribute("width", msr2);
    xed.setAttribute("width", msr3);
    xed.setAttribute("alt", msr4);
    xed.setAttribute("title", msr5);
    document.getElementById("notetable").appendChild(xed);
}