// custom javascript here:

console.log('working');



// Regular function with argument --------------------------------------------
// function hello(name) {
//   console.log('howdy regular function ' + name);
// };

// Arrow function with argument -----------------------------------------------
// var hello2 = (name) => {
//   console.log('hello arrow function ' + name);
// };
//
// hello('charisa');
// hello2("charissa");



// Use jquery to grab the name from the value ---------------------------------

// $("#nameInput").click(function() {
//   var enterName = $(".user-btn").val();
//
//   if (enterName !== "") {
//     console.log("Hello " + enterName);
//   } else {
//     console.log("please enter a name");
//   }
// });

// Using pure javascript to return a value ----------------------------------


// var submitBtn = document.querySelector('.user-btn');
// var nameInput = document.querySelector('#nameInput');
//
// submitBtn.addEventListener("click", () => {
//   var getName = nameInput.value;
//   console.log('hello ' + getName);
//
// });

// Create a basic promise  ---------------------------------------------------

// you must use a regular function to declear a promise
// var myPromise = new Promise(function(resolve, reject) {
//   resolve('Our promise was successful!');
// });

// you dont need {} for promise callback functions
// myPromise.then( (data) => console.log(date) );


// basic promise using catch  ---------------------------------------------------

// every promise needs a then or catch statment to call it
// var myPromise2 = new Promise(function(resolve, reject) {
//
//   var x = 2;
//   if (x > 1) {
//     resolve('Our Promise was successful');
//   } else {
//     reject('Error: the variable x is equal to ' + x);
//   }
//
// });

// if you have many then statements, ensure your ; is at the very end of your catch statement
// you must call back the promise function

// myPromise2
// .then((data) => console.log(data))
// .then((data) => console.log("you can run many then's"))
// .catch((data) => console.log(data));


// Creating a basic divide calculator  -----------------------------------------


var getCalcuBtn = document.querySelector('#calcuBtn');


getCalcuBtn.addEventListener("click", () => {
  console.log('button working');

  var getNum1 = document.querySelector('#numInput1');
  var getNum2 = document.querySelector('#numInput2');

  var getNumVal1 = getNum1.value;
  var getNumVal2 = getNum2.value;

  var calcu = getNumVal1 / getNumVal2;
  console.log('calulator divided your numbers to equal: ' + calcu);



// this is your promise function
  var myPromise = new Promise(function(resolve, reject) {

    if (calcu) {
      resolve('Our Promise was successful');
    } else if (getNumVal1 === 0 || getNumVal2 === 0){
      reject('Error: you cannot divide 0');
    }
    // end of myPromise function
  });

  // this is your promise function callback
  myPromise
  .then((data) => console.log(data))
  .then((data) => console.log("you can run many then statements"))
  .catch((data) => console.log(data));


  // end of getCalcuBtn event click
});
