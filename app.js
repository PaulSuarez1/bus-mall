'use strict';
// Global Variables:
//==========================================
var allProducts = [];

var imgEl1 = document.getElementById('product1');
var imgEl2 = document.getElementById('product2');
var imgEl3 = document.getElementById('product3');
var h2El1 = document.getElementById('title1');
var h2El2 = document.getElementById('title2');
var h2El3 = document.getElementById('title3');

var resultUl = document.getElementById('product-result');
var sectionEl = document.getElementById('click-tracker');

var productsIndex1 = 0;
var productsIndex2 = 0;
var productsIndex3 = 0;

var totalClicks = 0

// Onject constructor:
//==========================================
function Products(img, title) {
  this.img = img;
  this.title = title;
  this.clicked = 0;

  allProducts.push(this);
}

// New objects:
//==========================================
new Products('img/bag.jpg', 'Bag thing');
new Products('img/banana.jpg', 'This is a banana thing');
new Products('img/bathroom.jpg', 'You know you need it!');
new Products('img/boots.jpg', 'Noice Boots');
new Products('img/breakfast.jpg', 'nom nom');
new Products('img/bubblegum.jpg', 'Han Solo likes it');
new Products('img/chair.jpg', 'Sit sorta');
new Products('img/cthulhu.jpg', 'Rawr');
new Products('img/dog-duck.jpg', 'Duck face for your dog!');
new Products('img/dragon.jpg', 'Burnt toast');
new Products('img/pen.jpg', 'Write right');
new Products('img/pet-sweep.jpg', 'Put em to work');
new Products('img/scissors.jpg', 'snippy');
new Products('img/shark.jpg', 'Zzzz');
new Products('img/sweep.png', 'They are good for something!');
new Products('img/tauntaun.jpg', 'idk...');
new Products('img/unicorn.jpg', 'It is magic');
new Products('img/usb.gif', 'Squirm');
new Products('img/water-can.jpg', 'You can even drink it');
new Products('img/wine-glass.jpg', 'Beer is better but whatever');

// Event listener for randominzing pictures on click
//==========================================
function randomProduct() {

  var previous1 = productsIndex1;
  var previous2 = productsIndex2;
  var previous3 = productsIndex3;

  do {
    productsIndex1 = Math.floor(Math.random() * allProducts.length);
  } while (previous1 === productsIndex1 || previous2 === productsIndex1 || previous3 === productsIndex1);

  do {
    productsIndex2 = Math.floor(Math.random() * allProducts.length);
  } while (previous1 === productsIndex2 || previous2 === productsIndex2 || previous3 === productsIndex2 || productsIndex1 === productsIndex2);

  do {
    productsIndex3 = Math.floor(Math.random() * allProducts.length);
  } while (previous1 === productsIndex3 || previous2 === productsIndex3 || previous3 === productsIndex3 || productsIndex2 === productsIndex3 || productsIndex1 === productsIndex3);

  imgEl1.src = allProducts[productsIndex1].img;
  imgEl1.id = productsIndex1
  // h2El1 = allProducts[productsIndex1].title;
  // allProducts[productsIndex1].title.appendChild(h2El1);
  imgEl2.src = allProducts[productsIndex2].img;
  imgEl2.id = productsIndex2
  // h2El2 = allProducts[productsIndex2].title;
  imgEl3.src = allProducts[productsIndex3].img;
  imgEl3.id = productsIndex3
  // h2El3 = allProducts[productsIndex3].title;
}

sectionEl.addEventListener('click', sectionCallback);
function sectionCallback(event) {
  checkTotalClicks();
  console.log(event);
  console.log(event.target);
  if (event.target.id) {

    totalClicks++;
    allProducts[event.target.id].clicked++;
    randomProduct();
  } else {
    alert('click on an image!!!');
  }

}

// imgEl1.addEventListener('click', img1Callback);

// function img1Callback() {
//   allProducts[productsIndex1].clicked++;
//   totalClicks++
//   randomProduct();
// }

// imgEl2.addEventListener('click', img2Callback);

// function img2Callback() {
//   allProducts[productsIndex2].clicked++;
//   totalClicks++
//   randomProduct();
// }

// imgEl3.addEventListener('click', img3Callback);

// function img3Callback() {
//   allProducts[productsIndex3].clicked++;
//   totalClicks++
//   randomProduct();
// }


function renderResults() {
  for (var i in allProducts) {
    var newLiEl = document.createElement('li');
    newLiEl.textContent = allProducts[i].title + ' clicked : ' + allProducts[i].clicked + ' Times';
    resultUl.appendChild(newLiEl);
  }
}

function checkTotalClicks() {
  if (totalClicks === 25) {
    renderResults();


    sectionEl.removeEventListener('click', sectionCallback);
    // imgEl1.removeEventListener('click', img1Callback);
    // imgEl2.removeEventListener('click', img2Callback);
    // imgEl3.removeEventListener('click', img3Callback);
  }
}

randomProduct();
console.table(allProducts);