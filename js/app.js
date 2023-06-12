'use strict' 

let votes = document.getElementById("");
let results = document.getElementById("");


function Goats(name,imgSrc) {
     this.name = name;
     this.imgSrc = imgSrc;
     this.voteCount = 0;
     this.viewCount = 0;
}