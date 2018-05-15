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

var productsIndex1 = 0;
var productsIndex2 = 0;
var productsIndex3 = 0;

// Onject constructor:
//==========================================
function Products (img, title) {
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
new Products('img/chair.jpg', 'Might need a pillow or something with this one');

// Event listener for randominzing pictures on click
//==========================================
function randomProduct() {
    productsIndex1 = Math.floor(Math.random() * allProducts.length);
    imgEl1.src = allProducts[productsIndex1].img;
    h2El1 = allProducts[productsIndex1].title;
    // allProducts[productsIndex1].title.appendChild(h2El1);
    

    productsIndex2 = Math.floor(Math.random() * allProducts.length);
    imgEl2.src = allProducts[productsIndex2].img;
    h2El2 = allProducts[productsIndex2].title;
    
    productsIndex3 = Math.floor(Math.random() * allProducts.length);
    imgEl3.src = allProducts[productsIndex3].img;
    h2El3 = allProducts[productsIndex3].title;
  }

imgEl1.addEventListener('click', function(){
  allProducts[productsIndex1].clicked++;
  randomProduct();
});

imgEl2.addEventListener('click', function() {
  allProducts[productsIndex2].clicked++;
  randomProduct();

});

imgEl3.addEventListener('click', function() {
    allProducts[productsIndex3].clicked++;
    randomProduct();
  
});

// Side bar with totals
//==========================================






randomProduct();
console.table(allProducts);