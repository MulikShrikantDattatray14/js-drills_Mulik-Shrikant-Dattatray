import { inventory } from "./cars.js";

// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
//"Car 33 is a *car year goes here* *car make goes here* *car model goes here*"

// logic: 

// // Function to find a car by ID and log its details
// function getCarDetailsById(id) {
//   // Find the car in the inventory by ID
//   const car = inventory.find((item) => item.id === id);

//   if (car) {
//     // Log the full car details
//     console.log(car);

//     // Log the specific year, make, and model details
//     console.log(
//       `Car ${id} is a ${car.car_year} ${car.car_make} ${car.car_model}`
//     );
//   }
// }

// // Call the function with the desired ID
// getCarDetailsById(33);


// handling test cases

function getCarDetailsById1(id) {
  // Check if the inventory is empty
  if (!Array.isArray(inventory) || inventory.length === 0) {
    console.log("Inventory is empty.");
    return;
  }

  // Check if the provided ID is valid
  if (typeof id !== "number" || id <= 0) {
    console.log("Invalid ID. Please provide a valid positive number.");
    return;
  }

  // Find the car in the inventory by ID
  const car = inventory.find((item) => item.id === id);

  // Handle case when car is not found
  if (!car) {
    console.log(`Car with ID ${id} not found.`);
    return;
  }

  // Log the full car details
  console.log(car);

  // Log the specific year, make, and model details
  console.log(
    `Car ${id} is a ${car.car_year} ${car.car_make} ${car.car_model}`
  );
}

// Exporting the function
export default getCarDetailsById1;
