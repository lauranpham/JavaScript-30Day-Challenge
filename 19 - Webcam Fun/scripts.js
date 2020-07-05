const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

// must use a secure server e.g. https or localhost to feed through index.html
// package.json has browsersync dependency
// step 1. npm install - installs packages
// step 2. npm start - starts server

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false }) // returns a promise - call .then on to further manipulate
    .then((localMediaStream) => {
      console.log(localMediaStream);
      // localMediaStream is an object and needs to be converted into a url
      //   or add it to the video srcObject
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error("OH NOOO!!", err);
    });
}

getVideo();
