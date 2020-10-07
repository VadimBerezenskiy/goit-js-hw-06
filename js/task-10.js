import users from './users.js';
let allSkillsUsers;
const getSortedUniqueSkills = users => {
  allSkillsUsers = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills;
  }, []);
  return allSkillsUsers
    .filter((skill, pos) => allSkillsUsers.indexOf(skill) === pos)
    .sort();

  // return (allSkillsUsers = users.reduce((allSkills, user) => {
  //   allSkills.push(...user.skills);
  //   return allSkills
  //     .filter((skill, pos) => allSkills.indexOf(skill) === pos)
  //     .sort();
  // }, []));
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
