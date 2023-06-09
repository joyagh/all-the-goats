"use strict";

let votes = document.getElementById("votes");
let results = document.getElementById("results");
let rounds = 25;
let prod1Img = document.getElementById("prod1");
let prod2Img = document.getElementById("prod2");
let prod3Img = document.getElementById("prod3");
let imgArray = [prod1Img, prod2Img, prod3Img];

function Products(name, imgSrc) {
  this.name = name;
  this.imgSrc = imgSrc;
  this.voteCount = 0;
  this.viewCount = 0;
}

let prodsArray = [
  new Products("bag", "./img/bag.jpg"),
  new Products("banana", "./img/banana.jpg"),
  new Products("breakfast", "./img/breakfast.jpg"),
  new Products("dog", "./img/dog-duck.jpg"),
  new Products("dragon", "./img/dragon.jpg"),
  new Products("wineGlass", "./img/wine-glass.jpg"),
];
let currentArray = [];
let prevArray = [];
function setProducts() {
  currentArray = [];
  while (currentArray.length < 3) {
    let randomProd = getRandomProds();
    if (!currentArray.includes(randomProd)) {
      currentArray.push(randomProd);
    }
  }
  console.log(currentArray);
}
setProducts();

function setProdImages() {
  for (let i = 0; i < imgArray.length; i++) {
    imgArray[i].src = currentArray[i].imgSrc;
    imgArray[i].alt = currentArray[i].name;
    if (rounds != 0) {
      imgArray[i].addEventListener("click", handleProdsClick);
    } else{ imgArray[i].removeEventListener("click", handleProdsClick);
    }
  }
  // imgArray[i].removeEventListener();
  console.log(imgArray);

  // prod1Img.src = prod1.imgSrc;
  // prod1Img.alt = prod1.name;
  // prod2Img.src = prod2.imgSrc;
  // prod2Img.alt = prod2.name;
  // prod3Img.src = prod3.imgSrc;
  // prod3Img.alt = prod3.name;
  // prod4Img.src = prod4.imgSrc;
  // prod4Img.alt = prod4.name;
  // prod5Img.src = prod5.imgSrc;
  // prod5Img.alt = prod5.name;
  // prod6Img.src = prod6.imgSrc;
  // prod6Img.alt = prod6.name;
}

setProdImages();

function getRandomProds() {
  return prodsArray[Math.floor(Math.random() * prodsArray.length)];
}
function handleProdsClick(event) {
  console.log("click");
  event.preventDefault();
  let target = event.target;
  let prodName = target.alt;

  let favProd;

  for (let i = 0; i < prodsArray.length; i++) {
    let prods = prodsArray[i];
    if (prods.name === prodName) {
      favProd = prods;
      favProd.voteCount++;
      favProd.viewCount++;
      rounds--;
    }
  }
  setProducts();
  setProdImages();
  console.log(favProd);
}

// votes.addEventListener("click", handleProdsClick);

function render(event) {
  results.innerHTML = ""
  let prodUl = document.createElement('ul');
  for (let i = 0; i < prodsArray.length; i++) {
    let prodLi = document.createElement('li');
    let prods = prodsArray[i];
    let prodName = prods.name;
    let prodVote = prods.voteCount;
    let report = `The product ${prodName} received ${prodVote}`;
    prodUl.appendChild(prodLi);
    prodLi.textContent = report;
    console.log(report);
  }
  results.appendChild(prodUl);
}
let button = document.getElementById('button');
button.addEventListener("click", render)