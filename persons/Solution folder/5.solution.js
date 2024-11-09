import { arrayOfObjects } from "./persons.js";



// Implement a loop to access and print the ages of all individuals in the dataset.
function Allages(){
    let ages=arrayOfObjects.map(ele=>ele.age)
    return (ages)
}
export default Allages;