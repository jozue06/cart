'use strict';
var cartbtn = document.getElementById('btn'); //btn 
var selection = document.getElementById('items');  //input
var quantity = document.getElementById('quantity'); //tasks

if(localStorage.list){
  var list = localStorage.list.split(',');
} else {
  var list = [];
}
// function productChoice(){
//   document.getElementById('productList').classList.toggle('show');
// }
//save the state of our application
//attach it to some sort of event listener
//grab our list and push the value of what we type into localStorage
//every time you add an item, your item will go to localStorage
function save(){
  list.push(selection.value);
  list.push(quantity.value);
  localStorage.list = list;
  //meta data so you can see what is happening in action
  console.log('list array: ', list);
  console.log('localStorage list: ', localStorage.list);
}
//modularizing code
//make naming conventions that are easy to read
function create(){
  console.log(selection);
  var selected = selection.selectedIndex.value;
  var quantity = quantity.value;
  // alert(selection.options[selection.selectedIndex].value);
  //creating the item so getting the value of the input
  var item = document.createElement('li');
  var amount = document.createElement('li');
  //each individual item
  //put stuff in li that is coming from the val
  //in the past, we have used innerHTML or textContent
  //.createTextNode just appends child text specifically to just an element in memory.
  item.appendChild(document.createTextNode(selected));
  item.appendChild(document.createTextNode(quantity));
  //need to take tasks(ul) and append child with added li
  quantity.appendChild(item);
  quantity.appendChild(amount);
  //each time you press enter, get new empty value to enter
  // selection.value = '';
}
function load(){
  if(localStorage.list){
    //set up item so we item so we can loop thorough
    var item;
    // var amount;
    for (var x = 0; x < list.length; x++){
      item = document.createElement('li');
      // amount = document.createElement('li');
      //stuff text into the li
      item.appendChild(document.createTextNode(list[x] + list[x+1]));
      // amount.appendChild(document.createTextNode(list[x]));
      quantity.appendChild(item);
      x++;
    }
  }
}
//wrap function calls and call them in one function
function render(){
  save();
  create();
}
load();
cartbtn.addEventListener('click', render);
Product.all = [];
function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Product.all.push(this);
}
function instantiateProducts(){
  new Product('bag', 'img/bag.jpg');
  new Product('banana', 'img/banana.jpg');
  new Product('bathroom', 'img/bathroom.jpg');
  new Product('boots', 'img/boots.jpg');
  new Product('breakfast', 'img/breakfast.jpg');
  new Product('bubblegum', 'img/bubblegum.jpg');
  new Product('chair', 'img/chair.jpg');
  new Product('cthulhu', 'img/cthulhu.jpg');
  new Product('dog-duck', 'img/dog-duck.jpg');
  new Product('dragon', 'img/dragon.jpg');
  new Product('pen', 'img/pen.jpg');
  new Product('pet-sweep', 'img/pet-sweep.jpg');
  new Product('tauntaun', 'img/tauntaun.jpg');
  new Product('unicorn', 'img/unicorn.jpg');
  new Product('usb', 'img/usb.gif');
  new Product('water-can', 'img/water-can.jpg');
  new Product('wine-glass', 'img/wine-glass.jpg');
}
instantiateProducts();