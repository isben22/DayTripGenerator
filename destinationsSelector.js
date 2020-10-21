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
            let restaurant = ["Nikkos", "Thes", "Akrogiali", "Noa"]; //set number to 0-3 
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
    
   
    // As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
    // approach: 1. offer input for user to run selection. 2. have user select which portion they want to run (or all), 3. push selection/s into string
    //without pushing this to the web page (yet) after string is pushed to console; ask user in a prompt if they are satisfied with selection. 
    //fun if/ statement that if !=true, then offere reselection function; else end. 

   function dayTrip(){ 
        let finalDestination = destination();
        let finalRestaurant = restaurant();
        let finalTransportation = transportation();
        let finalEntertainment = entertainment();
        let dayTrip = ("You will take a " + finalTransportation + " to visit " + finalRestaurant + " in the city of " + finalDestination + " and enjoy the show " + finalEntertainment +"!" );//concantonates into a human readable sentenace
    return dayTrip; 
   }
   let firstTrip = dayTrip();
   console.log(firstTrip);

   let choice = prompt("Are you happy with your choices?");  //take it from here
   while (choice = 'no'){
   dayTrip();
   console.log(firstTrip);
   choice
   }

//    let triplog = dayTrip();
//    console.log(triplog);


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