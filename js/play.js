document.addEventListener("DOMContentLoaded", function() {
    loadVideo();
});

function loadVideo() {
    var hash = location.hash.substr(1);
    const player = document.getElementById('video');
    console.log(hash);

    fetch("json/info.json")
        .then(response => response.json())
        .then(json => {
            console.log(json[hash]);
            var src = json[hash].src;
            var name = json[hash].name;
            var desc = json[hash].desc;
            player.src = src

    });
}