'use strict'

let votes = document.getElementById("votes");
let results = document.getElementById("results");

let goat1 = document.getElementById("goat1");
let goat2 = document.getElementById("goat2");
let goat3 = document.getElementById("goat3");
let goat4 = document.getElementById("goat4");
let goat5 = document.getElementById("goat5");

function Goats(name, imgSrc) {
  this.name = name;
  this.imgSrc = imgSrc;
  this.voteCount = 0;
  this.viewCount = 0;
}

let cruisinGoat = new Goats("cruisinGoat", "./img/cruisin-goat.jpg");
let floatGoat = new Goats("floatGoat", "./img/float-your-goat.jpg");
let kissingGoat = new Goats("kissingGoat", "./img/kissing-goat.jpg");
let sassyGoat = new Goats("sassyGoat", "./img/sassy-goat.jpg");
let smilingGoat = new Goats("smilingGoat", "./img/smiling-goat.jpg");
let sweaterGoat = new Goats("sweaterGoat", "./img/sweater-goat.jpg");

let goatsArray = [];

goatsArray.push(cruisinGoat);
goatsArray.push(floatGoat);
goatsArray.push(kissingGoat);
goatsArray.push(sassyGoat);
goatsArray.push(smilingGoat);
goatsArray.push(sweaterGoat);

// turn goat images into funtion
//
// add alts to each img . name
function setImages(goat1, goat2) {
  goat1.src = goat1.imgSrc;
  goat2.src = goat2.imgSrc;
  goat3.src = goat3.imgSrc;
  goat4.src = goat4.imgSrc;
  goat5.src = goat5.imgSrc;
};
setImages(goatsArray[0], goatsArray[1]);
// Step 1 Voting area, at top from dom

// //Step 2 define event handler
// function goatHandlerClick(event) {
//   event.preventDefault();
//   let target = event.target;
// }

// //Step 3 add event handler
// votes.addEventListener("clicked", goatHandlerClick);

function getRandomGoats(name, imgSrc) {
  return goatsArray[Math.floor(Math.random() * goatsArray.length)];
}

let randomGoats = getRandomGoats(goatsArray);
console.log(randomGoats);

console.log(`Your random goat is `);
