import { inventory } from "./cars.js";

// Function to find cars made before the year 2000 and log the array and count
function getOlderCars() {
  // Use filter to get cars before the year 2000 and map to extract car_years
  const olderCars = inventory
    .filter((car) => car.car_year < 2000)
    .map((car) => car.car_year);
  console.log(olderCars);

  // Log the count and the array of older cars
  console.log(
    `${olderCars.length} cars were made before the year 2000 and the array of older cars is [${olderCars}]`
  );
}

export default getOlderCars;
