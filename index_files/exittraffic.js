// Copy the source from internet
var exittraffic_splashalertmessage = "Thông báo từ Học Tin Học Qua Trò Chơi :";
var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

function DisableExitTraffic() {
    PreventExitSplash = true;
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
function addClickEvent(a, i, func) {
    if (typeof a[i].onclick != 'function') {
        a[i].onclick = func;
    }
}
theBody = document.body;
if (!theBody) {
    theBody = document.getElementById("body");
    if (!theBody) {
        theBody = document.getElementsByTagName("body")[0];
    }
}
var PreventExitSplash = false;
var LightwindowOpening = false;
function DisplayExitSplash() {

    if (PreventExitSplash == false) {
    
    
        window.scrollTo(0, 0);
        if (is_firefox) {
	        //window.alert(exittraffic_splashalertmessage);
		}
        PreventExitSplash = true;
        if (is_chrome||is_firefox) {
			timeout_variable = setTimeout("exittraffic_change_url();", 1000);
		} else {
			document.location.href = exittraffic_RedirectUrl;
		}
		
        return exittraffic_splashalertmessage;
    }
}
var a = document.getElementsByTagName('A');
for (var i = 0; i < a.length; i++) {
    if (a[i].target !== '_blank') {
        addClickEvent(a, i, function() {
            PreventExitSplash = true;
        });
    }
    else {
        addClickEvent(a, i, function() {
            PreventExitSplash = false;
        });
    }
}
disablelinksfunc = function() {
    var a = document.getElementsByTagName('A');
    for (var i = 0; i < a.length; i++) {
        if (a[i].target !== '_blank') {
            addClickEvent(a, i, function() {
                PreventExitSplash = true;
            });
        }
        else {
            addClickEvent(a, i, function() {
                PreventExitSplash = false;
            });
        }
    }
}

addLoadEvent(disablelinksfunc);

disableformsfunc = function() {
	// Makes that clicking on the links on the page will not cause this popup to appear
    var f = document.getElementsByTagName('form');
    for (var i = 0; i < f.length; i++) {
        if (!f[i].onclick) {
            f[i].onclick = function() {
                if (LightwindowOpening == false) {
                    PreventExitSplash = true;
                }
            }
        }
        else if (!f[i].onsubmit) {
            f[i].onsubmit = function() {
                PreventExitSplash = true;
            }
        }
    }
}

function exittraffic_change_url() {
	disable_confirmation = false;
	clearTimeout(timeout_variable); // just to make sure
	document.location.href=exittraffic_RedirectUrl;
}


addLoadEvent(disableformsfunc);
window.onbeforeunload = DisplayExitSplash;
