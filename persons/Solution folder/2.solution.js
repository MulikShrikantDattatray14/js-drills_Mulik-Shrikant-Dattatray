import { arrayOfObjects } from "./persons.js";

//2.Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

//Function to get hobbies of individuals with a specific age.

function getHobbiesByAge() {
    let hobbies_and_age=[]
    for(let i=0;i<arrayOfObjects.length;i++){
        let each = arrayOfObjects[i];
        hobbies_and_age.push([each["name"],each["age"],each["hobbies"]])
    }
    return hobbies_and_age;
}
export default getHobbiesByAge;
