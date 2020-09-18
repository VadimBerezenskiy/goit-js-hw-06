import users from './users.js';
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email).name;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // Sheree Anthony
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // Elma Head
