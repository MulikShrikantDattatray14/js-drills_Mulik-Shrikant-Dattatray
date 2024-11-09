import { arrayOfObjects } from "./persons.js";

//    Create a function to retrieve and display the first hobby of each individual in the dataset.


function firsthobby(){
    let firsthobby=[]
    let each = arrayOfObjects.forEach(ele=>firsthobby.push([ele.id,ele.hobbies[0]]))
   return (firsthobby)
}
export default firsthobby;