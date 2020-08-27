var audio = document.querySelector('.audio-player');
var btnPlay = document.querySelector('.active-play');

btnPlay.addEventListener('click', function () {
	if (audio.paused == true) {
		audio.play();
		this.classList.toggle('stop');
	} else {
		audio.pause();
		this.classList.toggle('stop');
	}
});


//settings for volume
var volumeRange = document.querySelector('.front-volume-progress');
var volumeOff = document.querySelector('.front-volume-off');
var volumeOn = document.querySelector('.front-volume-on');

volumeOff.addEventListener('click', function () {
	volumeRange.value = 0;
	audio.volume = 0;
});

volumeOn.addEventListener('click', function () {
	volumeRange.value = 10;
	audio.volume = 1;
});

volumeRange.onchange = function(){
  if (this.value == this.min) {
    audio.volume = 0;
  } else if (this.value == this.max) {
    audio.volume = 1;
  } else {
  	audio.volume = this.value / 10;
  }
};


// settings for duration
var durationRange = document.querySelector('.player__front .duration-progress')
var startTime = document.querySelector('.player__front .start-time')
var endTime = document.querySelector('.player__front .end-time')

endTime.textContent = "00:" + Math.round(audio.duration);

audio.addEventListener('timeupdate', function () {
	durationRange.value = 100 / this.duration * this.currentTime;
	if (Math.ceil(audio.currentTime) < 10) {
		startTime.textContent = "00:0" + Math.ceil(this.currentTime);
	} else {
		startTime.textContent = "00:" + Math.ceil(this.currentTime);
	}
});

durationRange.addEventListener('change', function () {
	audio.currentTime = this.value / 100 * audio.duration;
});