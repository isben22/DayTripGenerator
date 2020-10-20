//Requirement: destination to be randomly selected for my day trip.

//destination function
// function destination() {
//     let destinations = ["Athens", "Chania", "Marathon", "Mykanos", "Santorini"]; // create an array of desitnations that will be picked from
//     let randomNumber = Math.floor(Math.random() * destinations.length); //generate random number between 0 and 4 (length - 1)
//     let finalDestination = destinations[randomNumber];

// return finalDestination;
// }
   
// console.log = (destination);


//restaurant function

function restaurant() {
    let restaurant = ["Nikkos", "Thes", "Akrogiali", "Noa"]; //set number to 0-3 to change it up
    let randomNumber = Math.floor(Math.random() * restaurant.length);
    let finalRestaurant = restaurant[randomNumber];

return finalRestaurant;
}

let hungry =restaurant();
console.log (hungry); //this errored out start debug at first function
