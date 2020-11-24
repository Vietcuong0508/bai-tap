var btnLoadContent = document.getElementById('btnLoadContent');
btnLoadContent.onclick = function () {
    var keyword = 'Fpt aptech';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                document.getElementById("demo").innerHTML = xhttp.responseText;
            } else {
                document.getElementById("demo").innerHTML = '<strong style="color:red; margin: 20px">Đã có lỗi xảy ra</strong>';
            }
        }
    };
    xhttp.open('GET', `https://content.googleapis.com/youtube/v3/search?q=${keyword}&type=video&maxResults=9&part=snippet&key=AIzaSyARemjxKM17-rzEFmdzZG14YpxJ4tSWEv8`);
    xhttp.send();
}