"use strict";

let votes = document.getElementById("votes");
let results = document.getElementById("results");

let goat1 = document.getElementById("goat1");

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

goat1.src = goatsArray[0].imgSrc;
goat2.src = goatsArray[1].imgSrc;
goat3.src = goatsArray[2].imgSrc;
goat4.src = goatsArray[3].imgSrc;
goat5.src = goatsArray[4].imgSrc;
goat6.src = goatsArray[5].imgSrc;

function getRandomGoats(name, imgSrc) {
  return goatsArray[Math.floor(Math.random() * goatsArray.length)];
  
};

let randomGoats = getRandomGoats(goatsArray);
console.log(randomGoats);

console.log(`Your random goat is `)