var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play() 
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
 });



document.querySelector("#pause").addEventListener("click", function() {
  console.log("In pause");
  video.pause();
});



document.querySelector("#slower").addEventListener("click", function() {
	console.log("In slower");
	console.log("Current speed is", video.playbackRate);
	video.playbackRate = video.playbackRate * 0.9
	console.log("New speed is", video.playbackRate);

});



document.querySelector("#faster").addEventListener("click", function(){
	console.log("In Faster");
	console.log("Current speed is", video.playbackRate);
	video.playbackRate = video.playbackRate * 1.1
	console.log("New speed is", video.playbackRate);






});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("In skip");
  	console.log("The duration is", video.duration);
	console.log("Current location is", video.currentTime);

	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0; 
	}

	console.log("New location is", video.currentTime);



}
);


document.querySelector("#mute").addEventListener("click", function(){

    if (video.muted === false) {
        console.log("Muted");
        video.muted = true;
        this.textContent = "Unmute";  

    } else {
        console.log("Unmuted");
        video.muted = false;
        this.textContent = "Mute";   
    }
});


document.querySelector("#slider").addEventListener("input", function () {
    video.volume = this.value / 100;
	document.querySelector("#volume").textContent = this.value + "%";
    console.log("The current value is", video.volume);
});


document.querySelector("#vintage").addEventListener("click", function () {
    console.log("Styled");
    video.classList.add("oldSchool");
});


document.querySelector("#orig").addEventListener("click", function () {
    console.log("Original");
    video.classList.remove("oldSchool");
});

