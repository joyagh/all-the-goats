"use strict";

let votes = document.getElementById("votes");
let results = document.getElementById("results");

let goat1Img = document.getElementById("prod1");
let prod2Img = document.getElementById("prod2");
let prod3Img = document.getElementById("prod3");
let prod4Img = document.getElementById("prod4");
let prod5Img = document.getElementById("prod5");
let prod6Img = document.getElementById("prod6");

function Products(name, imgSrc) {
  this.name = name;
  this.imgSrc = imgSrc;
  this.voteCount = 0;
  this.viewCount = 0;
}

let cruisinprod = new Goats("cruisinGoat", "./img/cruisin-goat.jpg");
let floatGoat = new Goats("floatGoat", "./img/float-your-goat.jpg");
let kissingGoat = new Goats("kissingGoat", "./img/kissing-goat.jpg");
let sassyGoat = new Goats("sassyGoat", "./img/sassy-goat.jpg");
let smilingGoat = new Goats("smilingGoat", "./img/smiling-goat.jpg");
let sweaterGoat = new Goats("sweaterGoat", "./img/sweater-goat.jpg");

let prodsArray = [];

prodsArray.push(cruisinprod);
prodsArray.push(floatprod);
prodsArray.push(kissingprod);
prodsArray.push(sassyprod);
prodsArray.push(smilingprod);
prodsArray.push(sweaterprod);

let prods2Array = []

function setprodsImages(prod1, prod2, prod3, prod4, prod5, prod6) {
  prod1Img.src = prod1.imgSrc;
  prod1Img.alt = prod1.name;
  prod2Img.src = prod2.imgSrc;
  prod2Img.alt = prod2.name;
  prod3Img.src = prod3.imgSrc;
  prod3Img.alt = prod3.name;
  prod4Img.src = prod4.imgSrc;
  prod4Img.alt = prod4.name;
  prod5Img.src = prod5.imgSrc;
  prod5Img.alt = prod5.name;
  prod6Img.src = prod6.imgSrc;
  prod6Img.alt = prod6.name;
}
setprodsImages(
  prodsArray[0],
  prodsArray[1],
  prodsArray[2],
  prodsArray[3],
  prodsArray[4],
  prodsArray[5]
);

//Step 2 define event handler
function handleprodsClick(event) {
  console.log("click");
  event.preventDefault();
  let target = event.target;
  let prodName = target.alt;
  
  for (let i = 0; i < prodsArray.length; i++) {
    let prods = prodsArray[i];
    if(prods.name === prodName) {
      favprod = prods;
    }
  }
 console.log(prodName);
}

// //Step 3 add event handler
votes.addEventListener("click", handleprodsClick);

let favprod;


function getRandomprods(name, imgSrc) {
  return prodsArray[Math.floor(Math.random() * prodsArray.length)];
}




