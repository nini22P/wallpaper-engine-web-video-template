const video = document.getElementById('video')

window.wallpaperPropertyListener = {
  setPaused: (isPaused) => {
    if (isPaused) {
      if (video.ended) {
        video.currentTime = 0
      }
      video.pause()
    } else {
      video.play()
    }
  },
}
