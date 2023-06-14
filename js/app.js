"use strict";

let votes = document.getElementById("votes");
let results = document.getElementById("results");

let prod1Img = document.getElementById("prod1");
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

let bag = new Products("bag", "./img/bag.jpg");
let banana = new Products("banana", "./img/banana.jpg");
let dog = new Products("dog", "./img/dog-duck.jpg");
let dragon = new Products("dragon", "./img/dragon.jpg");
let breakfast = new Products("breakfast", "./img/breakfast.jpg");
let wineGlass = new Products("wineGlass", "./img/wine-glass.jpg");

let prodsArray = [];

prodsArray.push(bag);
prodsArray.push(banana);
prodsArray.push(dog);
prodsArray.push(dragon);
prodsArray.push(breakfast);
prodsArray.push(wineGlass);

// let prods2Array = []

function setProdsImages(prod1, prod2, prod3, prod4, prod5, prod6) {
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

setProdsImages(
  prodsArray[0],
  prodsArray[1],
  prodsArray[2],
  prodsArray[3],
  prodsArray[4],
  prodsArray[5],
);

//Step 2 define event handler
// function handleprodsClick(event) {
//   console.log("click");
//   event.preventDefault();
//   let target = event.target;
//   let prodName = target.alt;
  
//   for (let i = 0; i < prodsArray.length; i++) {
//     let prods = prodsArray[i];
//     if(prods.name === prodName) {
//       favprod = prods;
//     }
//   }
//  console.log(prodName);
// }

// // //Step 3 add event handler
// votes.addEventListener("click", handleprodsClick);




// function getRandomprods(name, imgSrc) {
//   return prodsArray[Math.floor(Math.random() * prodsArray.length)];
// }




