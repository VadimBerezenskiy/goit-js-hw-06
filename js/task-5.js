import users from './users.js';
let findUserFoEmail = null;

const getUserWithEmail = (users, email) => {
  if ((findUserFoEmail = users.find(user => user.email === email))) {
    return findUserFoEmail.name;
  }
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // Sheree Anthony
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // Elma Head
