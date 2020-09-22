import users from './users.js';
const getSortedUniqueSkills = users => {
  return users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills.filter(skills => allSkills.includes(skills));
  }, []);
  // return (
  //   users
  //     // .filter(user => !user.skills.hasOwnProperty(user.skills))
  //     .map(user => user.skills)
  //     .filter(skills => !skills.hasOwnProperty(skills))
  // );
  // return (users.filter(
  //   user => !user.skills.includes(user.skills),
  // ) = filterAllSkills);
  // users.reduce((filterAllSkills, user) => {
  //   filterAllSkills.push(user.skills);
  // }, []);
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
