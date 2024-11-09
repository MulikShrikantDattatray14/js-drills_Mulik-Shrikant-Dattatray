import { users } from "./users.js";
//console.log(users)

//Q1 Find all users who are interested in playing video games.

function allUsers() {
  let names = [];
  Object.keys(users).forEach((key) => {
    let ele = users[key];
    let hobbies = ele["interests"] || ele["interest"];

    const splitHobbies = hobbies[0].split(",").map((item) => item.trim());

    let check = splitHobbies.includes("Playing Video Games");

    if (check) {
      names.push(key);
    }
  });
  return (names);
}
export default allUsers;