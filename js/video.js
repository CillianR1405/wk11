var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play() 
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

	console.log("In Mute")




});
 



 /*function play(){*/
 /*	console.log("In play")
	video.play()
}

function pause(){
	console.log("In pause")
	video.pause()
}


function slower(){
	console.log("In slower");
	console.log("Current speed is", video.playbackRate);
	video.playbackRate = video.playbackRate * 0.8333
	console.log("New speed is", video.playbackRate);

}

function faster(){
	console.log("In Faster");
	console.log("Current speed is", video.playbackRate);
	video.playbackRate = video.playbackRate * 1.2
	console.log("New speed is", video.playbackRate);

}

function skip() {
  console.log("In skip");
  console.log("The duration is", video.duration);
  console.log("Current location is", video.currentTime);

  if (video.currentTime + 15 < video.duration) {
    video.currentTime += 15;
  } else {
    video.currentTime = 0; 
  }

  console.log("New location is", video.currentTime);
}

*/