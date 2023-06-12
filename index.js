document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audio-player');
    var playButton = document.getElementById('play-button');
    var pauseButton = document.getElementById('pause-button');
    var stopButton = document.getElementById('stop-button');
  
    playButton.addEventListener('click', function() {
      audioPlayer.play();
    });
  
    pauseButton.addEventListener('click', function() {
      audioPlayer.pause();
    });
  
    stopButton.addEventListener('click', function() {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    });
  });
  