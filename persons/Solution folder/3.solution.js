import { arrayOfObjects } from "./persons.js";

//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

function studentAustralia() {
  let student_city = [];
  for (let i = 0; i < arrayOfObjects.length; i++) {
    let each = arrayOfObjects[i];

    if (each["isStudent"] && each["country"] == "Australia") {
      student_city.push(each["name"]);
    }
  }

  return student_city;
}
export default studentAustralia;