var video = document.querySelector("#player1");

/* turns off autoplay and loop, opening message shown in console */
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false
});

/* play video when button is clicked, "Play Video" shown in console, volume starts @ 100% */
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play()
});

/* pause video when button is clicked, "Pause Video" shown in console */
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause()
})

