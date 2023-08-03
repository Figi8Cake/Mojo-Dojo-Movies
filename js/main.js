var open = false

function play(obj) {

    elem = document.getElementById("video");

    elem.style.display = "block";
    elem.play();
    elem.src=obj;
    elem.setAttribute('poster', "assets/"+obj+'.jpg')

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
        }

    $('.video').on('fullscreenchange webkitfullscreenchange mozfullscreenchange', function() {
        var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
        var event = state ? 'FullscreenOn' : 'FullscreenOff';
    
        if (event == 'FullscreenOn') {
            return;
        }
    
        if (event == 'FullscreenOff'){
            close_show()
        }
    });
}

function close_show() {
    document.getElementById("video").style.display = "none";
    document.getElementById("video").pause();
}

function open_show() {
    var popup = document.getElementById("show-menu");
    if (open == false) {
        popup.style.display = 'block'
        open = true
    } else {
        popup.style.display = 'none'
        open = false
    }
  }