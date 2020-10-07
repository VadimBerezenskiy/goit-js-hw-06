import users from './users.js';
let findUserFoEmail;

const getUserWithEmail = (users, email) => {
  findUserFoEmail = users.find(user => user.email === email);
  if (findUserFoEmail) {
    return findUserFoEmail.name;
  }
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // Sheree Anthony
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // Elma Head
