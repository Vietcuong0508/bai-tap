const YOUTOBE_API_DOMAIN = 'https://content.googleapis.com/youtube/v3/search';
const YOUTOBE_API_KEY = 'AIzaSyC45XIdDOsgDIwASsbDHVyGSz00dkLnBvA';
const LIMIT_VIDEO = 16;
document.addEventListener('DOMContentLoader', function () {
    var btnSearch = document.forms['search-form']['btn-search'];
    var txtKeyword = document.forms['search-form']['keyword'];
    if (btnSearch) {
        btnSearch.addEventListener('click', function () {
            if (txtKeyword) {
                var keyword = txtKeyword.value;
                if (keyword && keyword.length > 0) {
                    loadVideoByKeyword(keyword);
                } else {
                    alert('Vui lòng nhập từ khoá');
                }
            }
        })
    }
    var modal = document.getElementById("myModal");
    var videoContent = document.getElementById("modal-content");
    document.addEventListener('click', function (event){
        var obj = event.target;
        var clickVideo = false;
        if (obj.className == 'card') {
            clickVideo = true;
        }
        if (obj.className =='video-thumbnail') {
            obj = obj.parentElement;
            clickVideo = true
        }
        if (clickVideo) {
            modal.style.display = "block";
            videoContent.src = `http://www.youtobe.com/embed/${obj.title}`;
        }
    })
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
        videoContent.src = '';
    }
    loadVideoByKeyword('do mixi');
})

function loadVideoByKeyword(keyword) {
    var requestUrl = `${YOUTOBE_API_DOMAIN}?q=${keyword}&type=video&maxResults=${LIMIT_VIDEO}9&part=snippet&key=${YOUTOBE_API_KEY}`;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var jsonResponseObject = JSON.parse(this.responseText);
                renderListVideo(jsonResponseObject);
            }
        }
    }
    xhr.open('GET', requestUrl);
    xhr.send();
}
function renderListVideo(videoData) {
    var divListVideo = document.getElementById('list-video');
    if (divListVideo && videoData) {
        var contentList = '';
        for (var i = 0; i < videoData.items.length; i++) {
            var video = videoData.items[i];
            contentList += `<div class="col-3">
                <div class="card">
                    <img src="${video.snippet.thumbnails.high.url}" alt="Avatar">
                    <div class="container">
                        <p>${video.snippet.title}</p>
                    </div>
                </div>
            </div>`;
        }
        divListVideo.innerHTML = contentList;
    }
}
