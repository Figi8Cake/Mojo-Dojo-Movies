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
            open_show() 
            return;
        }
    
        if (event == 'FullscreenOff'){
            close_show()
            open_show()
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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}