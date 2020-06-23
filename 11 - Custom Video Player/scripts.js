// Get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelector("[data-skip]");
const ranges = player.querySelector(".player__slider");
// Build our functions
// hint: can call variables and functions directly in the console
function togglePlay() {
  video.paused ? video.play() : video.pause();
}
// Hook up the event listeners
