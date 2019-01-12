document.onkeydown = function(event) {
    event = (event || window.event);
    if (event.keyCode == 123 || event.keyCode == 18 || (event.ctrlKey && event.which === 83)) {
        return false;
    }
}

function menuone() {
	location.reload();
}

onclick = function (clicks) {
    clicks = window.onclick;

    if (clicks) {
		setTimeout(function(){ closeconmenu() }, 300);
    }
}

function closeconmenu() {
	document.getElementById('contextmenu').innerHTML = '';	
}

oncopy = function(copy) {
    copy = window.oncopy;

    if (copy) {
        return true;
    }
}

onpaste = function(paste) {
    paste = window.onpaste;

    if (paste) {
        return true;
    }
}

oncut = function(cut) {
    cut = window.oncut;

    if (cut) {
        return true;
    }
}

onselect = function(select) {
    select = window.onselect;

    if (select) {
        return true;
    }
}