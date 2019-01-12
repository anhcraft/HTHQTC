window.onload = function() {
    xx = screen.availWidth;
    yy = screen.availHeight;
    x = xx - 25;
    y = yy - 410;

    document.body.style.width = x + 'px';
    document.body.style.height = y + 'px';

    checkHtml();
    checkCSS();
}

var Browsers;

function checkHtml() {
    var Browser = navigator.userAgent;

    if (Browser.indexOf('MSIE') >= 0) {
        Browsers = 'MSIE';
    } else if (Browser.indexOf('Firefox') >= 0) {
        Browsers = 'Firefox';
    } else if (Browser.indexOf('Chrome') >= 0) {
        Browsers = 'Chrome';
    } else if (Browser.indexOf('Safari') >= 0) {
        Browsers = 'Safari';
    } else if (Browser.indexOf('Opera') >= 0) {
        Browsers = 'Opera';
    } else {
        Browsers = 'UNKNOWN';
    }

    html();
}

function html() {
    var browser = Browsers;

    if (browser === "UNKNOWN") {
        document.body.getElementsByTagName('nohtml5')[0].innerHTML = 'Trình duyệt bạn không hỗ trợ <b>HTML5</b> !';
        document.body.getElementsByTagName('nohtml5')[0].style.display = 'block';
    } else {
        document.body.getElementsByTagName('nohtml5')[0].innerHTML = '';
        document.body.getElementsByTagName('nohtml5')[0].style.display = 'none';
    }
}

var Browser;

function browserName() {
    var Browser = navigator.userAgent;

    if (Browser.indexOf('MSIE') >= 0) {
        Browser = 'MSIE';
    } else if (Browser.indexOf('Firefox') >= 0) {
        Browser = 'Firefox';
    } else if (Browser.indexOf('Chrome') >= 0) {
        Browser = 'Chrome';
    } else if (Browser.indexOf('Safari') >= 0) {
        Browser = 'Safari';
    } else if (Browser.indexOf('Opera') >= 0) {
        Browser = 'Opera';
    } else {
        Browser = 'UNKNOWN';
    }
    return Browser;
}

function checkCSS() {
    var index;
    var version = 0;
    var name = browserName();
    var info = navigator.userAgent;
    index = info.indexOf(name) + name.length + 1;
    version = parseFloat(info.substring(index, index + 3));
    n = navigator.javaEnabled();

    if ((index === "UNKNOWN") && (n === true)) {
        document.body.getElementsByTagName('nocss3')[0].innerHTML = '';
        document.body.getElementsByTagName('nocss3')[0].style.display = 'none';
    }
    if ((index === "Chrome") && (36.0 < version)) {
        document.body.getElementsByTagName('nocss3')[0].innerHTML = '';
        document.body.getElementsByTagName('nocss3')[0].style.display = 'none';
    }
    if ((index === "MSIE") && (11.0 < version)) {
        document.body.getElementsByTagName('nocss3')[0].innerHTML = '';
        document.body.getElementsByTagName('nocss3')[0].style.display = 'none';
    }
    if ((index === "Firefox") && (29.0 < version)) {
        document.body.getElementsByTagName('nocss3')[0].innerHTML = '';
        document.body.getElementsByTagName('nocss3')[0].style.display = 'none';
    }
    if ((index === "Opera") && (23.0 < version)) {
        document.body.getElementsByTagName('nocss3')[0].innerHTML = '';
        document.body.getElementsByTagName('nocss3')[0].style.display = 'none';
    }
    if ((index === "Safari") && (15.0 < version)) {
        document.body.getElementsByTagName('nocss3')[0].innerHTML = '';
        document.body.getElementsByTagName('nocss3')[0].style.display = 'none';
    }

    if ((index === "UNKNOWN") && (n === false)) {
        document.body.getElementsByTagName('nocss3')[0].innerHTML = 'Trình duyệt bạn không hỗ trợ <b>CSS3</b> !';
        document.body.getElementsByTagName('nocss3')[0].style.display = 'block';
    }
    if ((index === "Chrome") && (36.0 > version)) {
        document.body.getElementsByTagName('nocss3')[0].innerHTML = 'Trình duyệt bạn không hỗ trợ <b>CSS3</b> !';
        document.body.getElementsByTagName('nocss3')[0].style.display = 'block';
    }
    if ((index === "MSIE") && (11.0 > version)) {
        document.body.getElementsByTagName('nocss3')[0].innerHTML = 'Trình duyệt bạn không hỗ trợ <b>CSS3</b> !';
        document.body.getElementsByTagName('nocss3')[0].style.display = 'block';
    }
    if ((index === "Firefox") && (29.0 > version)) {
        document.body.getElementsByTagName('nocss3')[0].innerHTML = 'Trình duyệt bạn không hỗ trợ <b>CSS3</b> !';
        document.body.getElementsByTagName('nocss3')[0].style.display = 'block';
    }
    if ((index === "Opera") && (23.0 > version)) {
        document.body.getElementsByTagName('nocss3')[0].innerHTML = 'Trình duyệt bạn không hỗ trợ <b>CSS3</b> !';
        document.body.getElementsByTagName('nocss3')[0].style.display = 'block';
    }
    if ((index === "Safari") && (15.0 > version)) {
        document.body.getElementsByTagName('nocss3')[0].innerHTML = 'Trình duyệt bạn không hỗ trợ <b>CSS3</b> !';
        document.body.getElementsByTagName('nocss3')[0].style.display = 'block';
    }
}