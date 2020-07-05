const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

// must use a secure server e.g. https or localhost to feed through index.html
// package.json has browsersync dependency
// step 1. npm install - installs packages
// step 2. npm start - starts server
