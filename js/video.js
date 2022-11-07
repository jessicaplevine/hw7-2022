var video = document.querySelector("#player1");

/* turns off autoplay and loop, opening message shown in console */
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false
});

/* play video when button is clicked, "Play Video" shown in console, volume starts @ 100% */
document.querySelector("#play").addEventListener("click", function(){
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play()
});

/* pause video when button is clicked, "Pause Video" shown in console */
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause()
});

/* changing the playback speed, current speed shown in console */
document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate -= video.playbackRate * 0.1
	console.log("The current playback rate is " + video.playbackRate)
});
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate += video.playbackRate * 0.1
	console.log("The current playback rate is " + video.playbackRate)
});

/* skipping ahead, current location shown in console */
document.querySelector("#skip").addEventListener("click", function(){
	if(video.duration < video.currentTime + 10){
		video.currentTime = 0}
	else{
		video.currentTime += 10}
	console.log("The current location in the video is " + video.currentTime)
});

/* mutes/unmutes video, mute button changes text */
document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted === false){
		video.muted = true
		document.getElementById("mute").innerHTML = "Unmute"}
	else{
		video.muted = false
		document.getElementById("mute").innerHTML = "Mute"}
});

/* volume slider with updating corresponding text below */
document.querySelector("#slider").addEventListener("click", function(){
	video.volume = document.querySelector("#slider").value/100
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
});

/* Old School vs. Original view */
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});