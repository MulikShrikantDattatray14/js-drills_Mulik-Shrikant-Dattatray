import { users } from "./users.js";

//Q2 Find all users staying in Germany.
function germany(){
  let Users_germany = [];
  Object.keys(users).forEach((key) => {
    let ele = users[key];
    if (ele["nationality"] === "Germany") {
      Users_germany.push(key);
    }
  });
  
  return (Users_germany);
}
export default germany;
