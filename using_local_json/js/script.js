// custom javascript here:

console.log('working');

// calling the json file
var jsonDir = "./js/data.json";


fetch(jsonDir).then(response => {
  return response.json();
})
// calling the data.json which is the promise
.then(data => {
  console.log(data);
// displaying 3 people in the dom using a loop
  // for (let i = 0; i < data.length; i++) {
  // $('#result').append('name '+ data[i].name + '<br>');
  // $('#result').append('age ' + data[i].age + '<br>');
  // $('#result').append('car ' + data[i].car + '<br>');
  // }

// creating an onclick function, once fetch is click, data.json will display
// var fetchBtn = document.querySelector('.fetch-btn');
//
//   fetchBtn.onclick = function() {
//
//     console.log('fetch button is working');
// using a bootstrap card to display the information in the data object
    // $('#name').append('name '+ data[0].name + '<br>');
    // $('#age').append('age ' + data[0].age + '<br>');
    // $('#car').append('car ' + data[0].car + '<br>');
    //
    // $('#name1').append('name '+ data[1].name + '<br>');
    // $('#age1').append('age ' + data[1].age + '<br>');
    // $('#car1').append('car ' + data[1].car + '<br>');
    //
    // $('#name2').append('name '+ data[2].name + '<br>');
    // $('#age2').append('age ' + data[2].age + '<br>');
    // $('#car2').append('car ' + data[2].car + '<br>');
    //
    // };
// End of first then statement

// Teachers example starts
// This way shows less repetition

for (let i = 0; i < data.length; i++) {
  $("#result").append(
    "<div class='col-3'>" +
      "<div class='card' style='width: 18rem;'>" +
        "<div class='card-body'>" +
        "<h5 class='card-title'>"+ data[i].name +"</h5>" +
        "<p class='card-text'>Age: "+ data[i].age +"</p>" +
        "<p class='card-text'>Car: "+ data[i].car +"</p>" +
      "</div>" +
    "</div>"
);
}
// Teachers example ends


})

.catch(error => {
  console.log('an error happened');
})

// end of function


// The data.json file has an aaray of object
