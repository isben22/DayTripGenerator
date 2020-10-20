//Requirement: destination to be randomly selected for my day trip.

//destination function
function destination() {
    let destinations = ["Athens", "Chania", "Marathon", "Mykanos", "Santorini"]; // create an array of desitnations that will be picked from
    let randomNumber = Math.floor(Math.random() * destinations.length); //generate random number between 0 and 4 (length - 1)
    let finalDestination = destinations[randomNumber];

return finalDestination;
}
   
let theSpot =destination();


//restaurant function

function restaurant() {
    let restaurant = ["Nikkos", "Thes", "Akrogiali", "Noa"]; //set number to 0-3 
    let randomNumber = Math.floor(Math.random() * restaurant.length);
    let finalRestaurant = restaurant[randomNumber];

return finalRestaurant;
}

let hungry=restaurant();

//transportation function

function transportation() {
    let transportation = ["Taxi", "Plane", "Uber", "Donkey", "Foot"]; 
    let randomNumber = Math.floor(Math.random() * transportation.length);
    let finalTransportation = transportation[randomNumber];

return finalTransportation;
}

let mode=transportation();

//entertainment function
function entertainment() {
    let entertainment = ["Oedipus Rex", "Medea", "The Persians", "The Oddesey", "Cyclops"]; 
    let randomNumber = Math.floor(Math.random() * entertainment.length);
    let finalEntertainment = entertainment[randomNumber];

return finalEntertainment;
}

let show=entertainment();


let dayTrip = ("You will take a " + mode + " to visit " + hungry + " in the city of " + theSpot + " and enjoy the show " + show +"!" );//concantonates into a human readable sentenace
console.log(dayTrip);

