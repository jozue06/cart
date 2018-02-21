'use strict';


// local storage stringify:

// var strItems = JSON.stringify(Item.all);
// localStorage.setItem('items', strItems);

// need event listener (click or submit)

// need event handler (click or submit)

// need local storage parse ? ?

// need cart item objects, or constructor and/or array(s)
var allPictures = [];

function Picture(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    allPictures.push(this.filepath);
  }
  function display() {
    if (localStorage.pictures) {
      allPictures = JSON.parse(localStorage.getItem('pictures'));
      for(var i in allPictures) {
        chartData[i] = allPictures[i].name;
      }
    } else{
      // push images into constructor Picture
      new Picture('Bag', 'images/bag.jpg');
      new Picture('Banana', 'images/banana.jpg');
      new Picture('Bathroom', 'images/bathroom.jpg');
      new Picture('Boots', 'images/boots.jpg');
      new Picture('Breakfast', 'images/breakfast.jpg');
      new Picture('Bubblegum', 'images/bubblegum.jpg');
      new Picture('Chair', 'images/chair.jpg');
      new Picture('Cthulhu', 'images/cthulhu.jpg');
      new Picture('Dog-duck', 'images/dog-duck.jpg');
      new Picture('Dragon', 'images/dragon.jpg');
      new Picture('Pen', 'images/pen.jpg');
      new Picture('Pet-sweep', 'images/pet-sweep.jpg');
      new Picture('Tauntaun', 'images/tauntaun.jpg');
      new Picture('Unicorn', 'images/unicorn.jpg');
      new Picture('USB', 'images/usb.gif');
      new Picture('Water-can', 'images/water-can.jpg');
      new Picture('Wine-glass', 'images/wine-glass.jpg');
    }
  }

var formEle = document.getElementById(‘entryForm’);

function eventListenFunction(event) {

 event.preventDefault();

 var newStoreName = event.target.storeLocal.value;
 var newMin = parseInt(event.target.minInput.value);
 var newMax = parseInt(event.target.maxInput.value);
 var newAvg = parseFloat(event.target.avgInput.value);

 if (!newStoreName || !newMin || !newMax || !newAvg) return alert(‘All Data Required’);
 for (var i = 0; i < storeArray.length; i++) {
   if (newStoreName === storeArray[i].name) {
     return alert(‘Store name already exists’);
   }
 }

 var newRow = newStoreName;
 var newStore = new Stores(newStoreName, 8, newMin, newMax, newAvg, newRow);
 newStore.randCookiesPerH();
 storeArray[storeArray.length - 1].render();
 footerRow();

 event.target.storeLocal.value = null;
 event.target.minInput.value = null;
 event.target.maxInput.value = null;
 event.target.avgInput.value = null;
}

formEle.addEventListener(‘submit’, (eventListenFunction));