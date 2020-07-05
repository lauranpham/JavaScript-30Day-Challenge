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

function paintToCanvas() {
  const width = video.offsetWidth;
  const height = video.offsetHeight;
  console.log(width, height);
  //   set canvas width and height
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

function takePhoto() {
  // play the sound
  snap.currentTime = 0;
  snap.play();
  //   take data out of canvas
  const data = canvas.toDataURL("image/jpeg");
  console.log(data); // base64 of the image
  //   creating a new element called link
  const link = document.createElement("a");
  link.href = data;
  console.log(link);
  link.setAttribute("download", "handsome");
  //   link.textContent = "Download Image";
  link.innerHTML = `<img src="${data}" alt="Handsome" />`;
  strip.insertBefore(link, strip.firstChild);
  console.log(link);
}
getVideo();
// paintToCanvas();
video.addEventListener("canplay", paintToCanvas);
