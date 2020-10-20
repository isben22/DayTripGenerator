//Requirement: destination to be randomly selected for my day trip.
// create an array of desitnations that will be picked from
function destination() {
    let destinations = ["Athens", "Chania", "Marathon", "Mykanos", "Santorini"];
    //let finalDestination =""; //I want to move the selection to out of the choices to preserve for another trip

    for ( let i = 0; i < destinations.length; i++){ //here is where I want to loop through the string and choose a random index and return that items to selected Destination. 
        
    finalDestination = destinations.charAt(Math.floor(Math.random() * destinations.length));
    }
return finalDestination;
}
    
console.log (destination);
