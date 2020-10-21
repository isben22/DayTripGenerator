//Requirement: destination to be randomly selected for my day trip.
//given direction to collapse functions into single nested funciton - tony S.

    //destination function
        function destination() {
            let destinations = ["Athens", "Chania", "Marathon", "Mykanos", "Santorini"]; // create an array of desitnations that will be picked from
            let randomNumber = Math.floor(Math.random() * destinations.length); //generate random number between 0 and 4 (length - 1)
            let finalDestination = destinations[randomNumber];
        return finalDestination;
    }
    //restaurant function
        function restaurant() {
            let restaurant = ["Nikkos", "Thes", "Akrogiali", "Noa"]; 
            let randomNumber = Math.floor(Math.random() * restaurant.length);
            let finalRestaurant = restaurant[randomNumber];
    return finalRestaurant;
    }
    //transportation function
        function transportation() {
            let transportation = ["Taxi", "Plane", "Boat", "Donkey", "Skateboard"]; 
            let randomNumber = Math.floor(Math.random() * transportation.length);
            let finalTransportation = transportation[randomNumber];
    return finalTransportation;
    }
    //entertainment function
        function entertainment() {
            let entertainment = ["Oedipus Rex", "Medea", "The Persians", "The Oddesey", "Cyclops"]; 
            let randomNumber = Math.floor(Math.random() * entertainment.length);
            let finalEntertainment = entertainment[randomNumber];
    return finalEntertainment;
    }
        //concatenation function
    function dayTrip(){ 
        let finalDestination = destination();
        let finalRestaurant = restaurant();
        let finalTransportation = transportation();
        let finalEntertainment = entertainment();
        let dayTrip = ("You will take a " + finalTransportation + " to visit " + finalRestaurant + " in the city of " + finalDestination + " and enjoy the show " + finalEntertainment +"!" );//concantonates into a human readable sentenace
    return dayTrip; 
   }
      //validation function - created a function to prompt user if they are happy. 
function validation(){
    let validation = prompt("Are you happy with your choices?");
    return validation;
}
  
let firstTrip = dayTrip(); 
   console.log(firstTrip);

   while(validation() == "no"){
    firstTrip = dayTrip(); // update trip with new itinerary
    console.log(firstTrip);
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