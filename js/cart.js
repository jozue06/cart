'use strict';


// var addCart = document.getElementById('btn'); //btn
// var selection = document.getElementById('items'); //input
// var quantity = document.getElementById('quantity'); //tasks
// if(localStorage.list){
//   var list = localStorage.list.split(',');
// } else {
//   var list = [];
// }


//global vars
var btn = document.getElementById('btn');
var selection = document.getElementById('items');
// var tasks = document.getElementById('tasks');

//conditional that asks is there a property currently on localStorage that is a list? Does it have a value equal to ''?
//split will coerce it back into an array and get rid of the comma
//else we will take out the comma and set up an empty array that we can fill

if(localStorage.list) {
  var list = localStorage.list.split(',');
} else {
  var list = [];
}

function save() {
  list.push(selection.value);
  localStorage.list = list;
  // meta data so you can see what is happening in action
  console.log('list arr:', list);
  console.log('localStorage list:', localStorage.list);
}

//modularizing code
//make naming conventions that are easy to read

function create() {
  var val = selection.value;
  //creating the item so getting the value of the input
  var item = document.createElement('li');
  //each individual item
  //do what to the li? Put stuff in it that is coming from val
  //in the past we've used innerHTML or text content..this is NEW
  //.createTextNode will solve problems in the future trust me
  //just appending child text specifically to just an element in memory. Putting nothing but text

  item.appendChild(document.createTextNode(val));
  //need to take our tasks which is our ul and append child with the added li we just created
  //   tasks.appendChild(item);
  //each time you press enter you get a new empty value to enter a new val
  selection.value = '';
}
//load it out of localStorage
//if list has data in it, has a value it will run
//will say truthy or falsey based on what is in it. You don't need === or !==

// function load() {
//   if(localStorage.list) {
//     //set up an item so we can deal with our for loop
//     //creating an arbitrary loop starting at zero and incrementing up through the array
//     var item;
//     for (var x = 0; x < list.length; x++) {
//       item = document.createElement('li');
//       //stuff text into the li
//       //list to the x will have all of our text in it
//       item.appendChild(document.createTextNode(list[x]));

//       tasks.appendChild(item);
//     }
//   }
// }

//wrap a bunch of function calls and call them in one function
//anytime we click on a button we call render

function render() {
  save();
  create();
}

// load();

btn.addEventListener('click', render);