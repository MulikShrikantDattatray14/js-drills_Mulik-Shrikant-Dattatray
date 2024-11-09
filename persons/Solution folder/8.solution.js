import { arrayOfObjects } from "./persons.js";



//    Implement a loop to access and log the city and country of each individual in the dataset.

function citycountry(){

    let results=[]
    let city_country=arrayOfObjects.forEach((ele)=>{results.push([ele.name,ele.city,ele.country])})
    return (results)
}
export default citycountry;