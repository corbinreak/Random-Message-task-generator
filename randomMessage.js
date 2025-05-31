//Start of randomMessage app
//To use make sure git bash is installed; run file with node (wd) randomMessage.js

//used to get user id seq; randomizes mulitple numbers and comes back with 3 for the user id
const userIdSeq = [61, 27, 83, 15, 99, 34, 50, 72, 48, 69];
const locations = ["Home", "The Office", "The Ark"]



const getUserId = arr => {
    let output = [];
    let copy = [...arr];


    //algorithim to add and push 10 double digit numbers into 3 unique id number

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * copy.length);
        output.push(copy[randomIndex]);
        copy.splice(randomIndex, 1);
    }

    return `Hello user ${output.join('-')}`;

}; // end of userid function


//algorithim to get a random location from the set location arr 
const getUserLocation = arr => {
     const randomLocationI = Math.floor(Math.random() * arr.length); //gets a random index number and will grab the loction 
     const location = arr[randomLocationI];

      let message = ' ';

     switch(location) { // switches random loaction to also include a text
        case 'Home' :
            message = 'Welcome Home! Chores are required before bed.';
            break;
        case 'The Office' :
            message = 'Welcome back, thank you for clocking in! Please make sure all task are complete before leaving.';
            break;
        case 'The Ark' :
            message = 'Welcome Aboard the Ark, We have some tasks to keep the Human Race alive!'
            break;
        default:
            message = 'error: Unkown Location'
           
     }
      

  return { location, message}; // returns message with location

} // end of location function

// algorithim to take in userlocation and add assined task 

const userTasks = (locationObj) => {
    const location = locationObj.location
    if (location === 'Home') {
      return location + ' Tasks: Take Out Trash, Do Laundry, Clean Kitchen.';
    } else if (location === 'The Office') {
      return location + ' Tasks: Complete Work, Meeting @ 12, File Paper Work';
    } else if (location === 'The Ark') {
      return location + ' Tasks: Clean Oxygen Scrubber, Send 100 kids to earth (criminals), Fix oxygen issue';
    } else {
      return location + ' Tasks: Unknown';
    }
};

const randomMessage = (idFn, locationFn, tasksFn, idArr, locationArr) => {
    const id = idFn(idArr);
    const locationObj = locationFn(locationArr);
    const taskMessage = tasksFn(locationObj)

    return `${id}\n${locationObj.message}\n${taskMessage}`;
}




//function calls 
// uncomment when completed console.log(getUserId(userIdSeq));
// uncomment when completed console.log(getUserLocation(locations));
// uncomment when completed console.log(userTasks(locations))
console.log(randomMessage(getUserId,getUserLocation,userTasks,userIdSeq,locations));