module.exports = function createDreamTeam(members) {
  
  return !Array.isArray(members) ? false : members.filter((s) => typeof s == 'string').map(i => i.trim().slice(0, 1).toUpperCase()).sort().join('');
  
};