/**
 * fil: audio.js
 * eksempel fra Bror Arnfast
 **/
window.addEventListener("scroll", function () {

    var introVid = document.getElementById("introVideo"); // select audio id
    var video2 = document.getElementById("video2");
    console.log("Er div #lyd synlig? " + elFllVsbl(video2));

    if (elFllVsbl(video2)) {
        if (!(introVid.curentTime > 0)) {
            introVid.play(); // play audio
        }
    } else {
        introVid.pause();
        introVid.currentTime = 0; // rewind the sound
    }
})

function elFllVsbl(el) {
    return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}
