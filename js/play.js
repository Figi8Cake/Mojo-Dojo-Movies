document.addEventListener("DOMContentLoaded", function() {
    loadVideo();
});

function loadVideo() {
    var hash = location.hash.substr(1);
    console.log(hash);

    fetch("info.json")
        .then(response => response.json())
        .then(json => {
            console.log(json[hash]);
            var src = json[hash].src;
            var name = json[hash].name;
            var desc = json[hash].desc;
            console.log(src);
            console.log(name);
            console.log(desc);
    });
}