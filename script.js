const backgroundAudio = document.getElementById('audio');
const stopAudio = document.getElementById('btn');
const mainVideo = document.getElementById('video');

// stopAudio.addEventListener('click', function () {
// 	backgroundAudio.pause()
// });

mainVideo.addEventListener('play', () => {
	backgroundAudio.pause()
})

mainVideo.addEventListener('pause', () => {
	backgroundAudio.play();
});

stopAudio.addEventListener('click', () => {
	if(backgroundAudio.paused) {
		backgroundAudio.play();
		stopAudio.textContent = 'Stop Audio'
		stopAudio.style.color = '#27b591'
	} else {
		backgroundAudio.pause();
		stopAudio.textContent = 'Start Audio'
		stopAudio.style.color = '#d30fe4'
	}
})




