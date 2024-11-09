import { inventory } from "./cars.js";

// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

// Function to return an array containing only the car years
function getCarYears() {
  // Use map to extract car_year from each car in inventory
  const years = inventory.map((car) => car.car_year);

  // Log the array of years
  console.log(years);
}

export default getCarYears;
