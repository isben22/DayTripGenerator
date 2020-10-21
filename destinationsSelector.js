//given direction to collapse functions into single nested funciton - tony S.
    //R9:  I want all of my functions to have a Single Responsibility.
    //destination function -  R1: I want a destination to be randomly selected for my day trip.
        function destination() {
            let destinations = ["Athens", "Chania", "Marathon", "Mykanos", "Santorini"]; // create an array of desitnations that will be picked from
            let randomNumber = Math.floor(Math.random() * destinations.length); //generate random number between 0 and 4 (length - 1)
            let finalDestination = destinations[randomNumber];
        return finalDestination;
    }
    //restaurant function - R2:  restaurant to be randomly selected for my day trip.
        function restaurant() {
            let restaurant = ["Nikkos", "Thes", "Akrogiali", "Noa"]; 
            let randomNumber = Math.floor(Math.random() * restaurant.length);
            let finalRestaurant = restaurant[randomNumber];
    return finalRestaurant;
    }
    //transportation function - R3: mode of transportation to be randomly selected for my day trip
        function transportation() {
            let transportation = ["Taxi", "Plane", "Boat", "Donkey", "Skateboard"]; 
            let randomNumber = Math.floor(Math.random() * transportation.length);
            let finalTransportation = transportation[randomNumber];
    return finalTransportation;
    }
    //entertainment function - R4:  form of entertainment to be randomly selected for my day trip
        function entertainment() {
            let entertainment = ["Oedipus Rex", "Medea", "The Persians", "The Oddesey", "Cyclops"]; 
            let randomNumber = Math.floor(Math.random() * entertainment.length);
            let finalEntertainment = entertainment[randomNumber];
    return finalEntertainment;
    }
        //concatenation function human readable output
    function dayTrip(){ 
        let finalDestination = destination();
        let finalRestaurant = restaurant();
        let finalTransportation = transportation();
        let finalEntertainment = entertainment();
        let dayTrip = ("You will take a " + finalTransportation + " to visit " + finalRestaurant + " in the city of " + finalDestination + " and enjoy the show " + finalEntertainment +"!" );//concantonates into a human readable sentenace
    return dayTrip; 
   }
      //validation function - R5:  I want to be able to randomly re-select a destination, restaurant, mode of transportation, 
      //and/or form of entertainment if I don’t like one or more of those things 
function validation(){
    let validation = prompt("Are you happy with your choices?"); //R6: able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things
                                                                 //R7: I want to be able to confirm that my day trip is “complete” once I like all of the random selections
    return validation;
}
  
let firstTrip = dayTrip(); 
   console.log(firstTrip);

   while(validation() == "no"){
    firstTrip = dayTrip(); // update trip with new itinerary
    console.log(firstTrip); //R8: I want to display my completed trip in the console.
   }
   
   console.log("Your trip has been confirmed, enjoy!");

//---------------------------------- variance in requirement interpretation see notes-------------------//

// below- I was attempting to present the user the option of randomly selecting one aspect of the trip. Discussed with **David L. **and he said for the scope of the problem, 
// I could feed the user a while loop and a randomly generated string until the condition was true. 

//    let validation = satisfaction();
//     function satisfaction(){
//         let satisfaction =prompt("Are you happy with the selection?");    
//     if (satisfaction = "No"); 
//         let reselect = prompt("Which element would you like assistance with?");
    
//         while (satisfaction = "no"){
//             switch (reselect) {
//                 case "destination":
//                     finalDestination = destination();
//                 break;
//                 case "restaurant":
//                     reselect = restaurant();
//                     dayTrip.splice(0,1,reselect);
//                     break;
//                 case "transportation":
//                     reselect = transportation();
//                     dayTrip.splice(0,1,reselect);
//                     break;
//                 case "entertainment":
//                     reselect = entertainment(); 
//                     dayTrip.splice(0,1,reselect);
//                     break;
//             default:
//                 break; //default reruns the selection
     
//         }
    
//     console.log(triplog);
//     alert("Thank you! Your selection has been CONFIRMED. Enjoy!");
//    }
// }