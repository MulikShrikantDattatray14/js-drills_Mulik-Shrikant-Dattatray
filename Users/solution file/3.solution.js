import { users } from "./users.js";
//Q3 Find all users with masters Degree.


function masters(){

  let Users_masters = [];
  Object.keys(users).forEach((key) => {
    let ele = users[key];
    if (ele["qualification"] === "Masters") {
      Users_masters.push(key);
    }
  });
  
  return (Users_masters);
}

export default masters;