'use strict'

let votes = document.getElementById("votes");
let results = document.getElementById("results");

let goat1Img = document.getElementById("goat1");
let goat2Img = document.getElementById("goat2");
let goat3Img = document.getElementById("goat3");
let goat4Img = document.getElementById("goat4");
let goat5Img = document.getElementById("goat5");

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


function setGoatsImages(goat1, goat2, goat3, goat4, goat5) {
  goat1Img.src = goat1.imgSrc;
  goat1Img.alt = goat1.name;
  goat2Img.src = goat2.imgSrc;
  goat2Img.alt = goat2.name;
  goat3Img.src = goat3.imgSrc;
  goat3Img.alt = goat3.alt;
  goat4Img.src = goat4.imgSrc;
  goat4Img.alt = goat4.name;
  goat5Img.src = goat5.imgSrc;
  goat5Img.alt = goat5.name;
}
 setGoatsImages(goatsArray[0],goatsArray[1],goatsArray[2],goatsArray[3],goatsArray[4], goatsArray[5]);


//Step 2 define event handler
function handleGoatsClick(event) {
  console.log("click");
  event.preventDefault();
  
}

// //Step 3 add event handler
votes.addEventListener("click", handleGoatsClick);

function getRandomGoats(name, imgSrc) {
  return goatsArray[Math.floor(Math.random() * goatsArray.length)];
}

let randomGoats = getRandomGoats(goatsArray);
console.log(randomGoats);

console.log(`Your random goat is `);
