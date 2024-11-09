import { users } from "./users.js";
//Q4 Group users based on their Programming language mentioned in their designation.

let language = ["Javascript", "Golang", "Python"];
let Javascript = [];
let Golang = [];
let Python = [];


function grouplanguage(){
  Object.keys(users).forEach((key) => {
    let element = users[key];
    //console.log(element)
    let desgination = element["desgination"];
    //console.log(desgination)
  
    if (desgination.includes(language[0])) {
      Javascript.push(key);
    } else if (desgination.includes(language[1])) {
      Golang.push(key);
    } else if (desgination.includes(language[2])) {
      Python.push(key);
    }
  });
  return ([{Javascript},{Golang},{Python}]);
  
}

export default grouplanguage;

