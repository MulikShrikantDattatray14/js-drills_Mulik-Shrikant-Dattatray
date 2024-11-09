import { inventory } from "./cars.js";

// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
//"Last car is a *car make goes here* *car model goes here*"

//TASK-1 :information on the last car in their inventory

//logic part

// Function to get details of the last car in inventory
function logLastCarDetails() {
  // Use slice to get the last item as a new array and destructure it
  const [lastCar] = inventory.slice(-1);
 
  if (lastCar) {
    // Destructure the make and model of the last car
    const { car_make, car_model } = lastCar;
    console.log(`Last car is a ${car_make} ${car_model}`);
  } else {
    console.log("Inventory is empty.");
  }
}

// Call the function
export default logLastCarDetails;



