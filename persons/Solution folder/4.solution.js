import { arrayOfObjects } from "./persons.js";

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function nameCity3(){
    let log=[]
    let each = arrayOfObjects.filter((ele)=> ele.id===3).map((ele)=>{
    log.push([ele["name"],ele["city"]])
    });
    return(log)
    
}
export  default nameCity3;