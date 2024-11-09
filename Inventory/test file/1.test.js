import getCarDetailsById1 from "../solution file/1.solution.js";

getCarDetailsById1(33);
// Output:
// { id: 33, car_make: 'Jeep', car_model: 'Wrangler', car_year: 2011 }
// Car 33 is a 2011 Jeep Wrangler


getCarDetailsById1(100);
// Output:
// Car with ID 100 not found.


getCarDetailsById1("abc");
// Output:
// Invalid ID. Please provide a valid positive number.

getCarDetailsById1(-5);
// Output:
// Invalid ID. Please provide a valid positive number.

getCarDetailsById1(null);
getCarDetailsById1(undefined);
getCarDetailsById1({});
// Output for all:
// Invalid ID. Please provide a valid positive number.

