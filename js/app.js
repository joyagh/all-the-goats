'use strict' 

let votes = document.getElementById("");
let results = document.getElementById("");


function Goats(name,imgSrc) {
     this.name = name;
     this.imgSrc = imgSrc;
     this.voteCount = 0;
     this.viewCount = 0;
}

let cruisinGoat = new Goats("cruisinGoat", "./img/cruisin-goat.jpeg");
let floatGoat = new Goats("floatGoat", "./img/float-your-goat.jpeg");
let kissingGoat = new Goats("kissingGoat", ".img/kissing-goat.jpeg");
let sassyGoat = new Goats("sassyGoat", "./img/sassy-goat.jpeg");
let smilingGoat = new Goats("smilingGoat","./img/smiling-goat.jpeg");
let sweaterGoat = new Goats("sweaterGoat", "./img/sweater-goat.jpeg");

let goatsArray = [];

goatsArray.push(cruisinGoat);
goatsArray.push(floatGoat);
goatsArray.push(kissingGoat);
goatsArray.push(sassyGoat);
goatsArray.push(smilingGoat);
goatsArray.push(sweaterGoat);

