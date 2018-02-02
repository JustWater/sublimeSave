(function(window, document) { //自我调用形式的匿名函数
	var video = document.getElementsByTagName('video')[0],
		videoControls = document.getElementById('videoControls'),
		play = document.getElementById('play'),
		progressContainer = document.getElementById("progress"),
		progressHolder = document.getElementById("progress_box"),
		playProgressBar = document.getElementById("play_progress"),
		fullScreenToggleButton = document.getElementById("fullScreen"),
		isVideoFullScreen = false;
	var videoPlayer = {
		init: function() {
			var that = this;
			document.documentElement.className = "js";
			video.removeAttribute('controls');
			video.addEventListener('loadeddata', this.initializeControls, false);
			this.handleButtonPresses();
			fullScreenToggleButton.addEventListener("click", function() {
				isVideoFullScreen ? that.fullScreenOff() : that.fullScreenOn();
			}, true);
		},
		initializeControls: function() {
			videoPlayer.showHideControls();
		},
		showHideControls: function() {

			video.addEventListener('mouseover', function() {
				videoControls.style.opacity = 1;
			}, false);
			video.addEventListener('mouseout', function() {
				videoControls.style.opacity = 0;
			})

			videoControls.addEventListener('mouseover', function() {
				videoControls.style.opacity = 1;
			}, false);
			videoControls.addEventListener('mouseout', function() {
				videoControls.style.opacity = 0;
			}, false);
		},
		handleButtonPresses: function() {
			video.addEventListener('click', this.playPause, false);
			play.addEventListener('click', this.playPause, false);
			video.addEventListener('play', function() {
				play.title = 'Pause';
				play.innerHTML = '<span id="pauseButton">&#x2590;&#x2590;</span>';
			}, false);
			video.addEventListener('pause', function() {
				play.title = 'Play';
				play.innerHTML = '&#x25BA;';
			}, false);
			video.addEventListener('ended', function() {
				this.currentTime = 0;
				this.pause();
			}, false);
		},
		playPause: function() {
			if (video.paused || video.ended) {
				if (video.ended) {
					video.currentTime = 0;
				}
				video.play();
			} else {
				video.pause();
			}
		}
	};

	videoPlayer.init();

}(this, document))