import { arrayOfObjects } from "./persons.js";


//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

function namesemail25(){
    let results=[]
    let names_email_age= arrayOfObjects.filter(ele=>ele.age==25).forEach(ele=>results.push([ele.name,ele.email]))
   return (results)
}
export default namesemail25;