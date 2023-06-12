'use strict' 

let votes = document.getElementById("votes");
let results = document.getElementById("results");


function Goats(name,imgSrc) {
     this.name = name;
     this.imgSrc = imgSrc;
     this.voteCount = 0;
     this.viewCount = 0;
}


let cruisinGoat = new Goats("cruisinGoat", "./img/cruisin-goat.jpg");
let floatGoat = new Goats("floatGoat", "./img/float-your-goat.jpg");
let kissingGoat = new Goats("kissingGoat", ".img/kissing-goat.jpg");
let sassyGoat = new Goats("sassyGoat", "./img/sassy-goat.jpg");
let smilingGoat = new Goats("smilingGoat","./img/smiling-goat.jpg");
let sweaterGoat = new Goats("sweaterGoat", "./img/sweater-goat.jpg");

let goatsArray = [];

goatsArray.push(cruisinGoat);
goatsArray.push(floatGoat);
goatsArray.push(kissingGoat);
goatsArray.push(sassyGoat);
goatsArray.push(smilingGoat);
goatsArray.push(sweaterGoat);
console.log(goatsArray);

let randomGoats = goatsArray[3];

function randomGoats(goatsArray) {
     return goatsArray[Math.floor(Math.random() * goatsArray.length)];
   };

function addImg(){
     
}