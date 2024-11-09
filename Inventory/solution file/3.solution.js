import { inventory } from "./cars.js";

// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

// Function to sort car models alphabetically without mutating the original inventory
function sortAlphabetical() {
  // Map to get only car models, sort them alphabetically, and return the sorted list
  const sortedModels = inventory
    .map((car) => car.car_model)
    .sort((a, b) => a.localeCompare(b));

  // Log the sorted car models
  console.log(sortedModels);
}

export default sortAlphabetical;
