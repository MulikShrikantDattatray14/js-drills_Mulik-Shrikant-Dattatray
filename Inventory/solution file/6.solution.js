import { inventory } from "./cars.js";

// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory. Execute a function and return an array that only contains BMW and Audi cars. Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.


// Function to return only BMW and Audi cars in JSON format
function getBMWAndAudiCars() {
  // Use filter to find only BMW and Audi cars
  const bmwAndAudiCars = inventory.filter(
    car => car.car_make === "Audi" || car.car_make === "BMW"
  );

  // Log the result as a JSON string
  console.log(JSON.stringify(bmwAndAudiCars));
}

export default getBMWAndAudiCars;