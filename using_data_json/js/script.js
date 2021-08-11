// custom javascript here:

console.log('working');

// calling the json file
var jsonDir = "./js/data.json";


fetch(jsonDir).then(response => {
  return response.json();
})
// calling the data.json which is the promise
// .then(data => {
//   console.log(data);

//  example starts
// for (let i = 0; i < data.length; i++) {
//   $("#result").append(
//     "<div class='row'>" +
//       "<div class='col'>" +
        // "<ul class='list-group list-group-flush'>" +
        //    "<div class='row'>" +
        //     "<div class='icon-con'>" +
        //       "<img src='test.png'>" +
        //     "</div>" +
        //     "<div class='text-con'>" +
            // "<li class='list-group-item'>Persons Full Name</li>" + data[i].first_name +
//             "<h5 class='card-title'>"+ data[i].first_name +"</h5>" +
//       "</div>" +
//     "</div>"
// );
// }
//  example ends

// })
//
// .catch(error => {
//   console.log('an error');
// })

// end of function

// "<h5 class='card-title'>"+ data[i].name +"</h5>" +
// "<p class='card-text'>Age: "+ data[i].age +"</p>" +
// "<p class='card-text'>Car: "+ data[i].car +"</p>" +

// The data.json file has an aaray of object
