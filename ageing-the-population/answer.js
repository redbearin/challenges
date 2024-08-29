afterNYears = (people, yrsPassed) => {
  for (let key in people) {
    people[key] = people[key]+ Math.abs(yrsPassed);
  }
  return JSON.stringify(people);
}

const people = {
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
};
const yrsPassed = 1;

document.getElementById('ans').textContent = afterNYears(people, yrsPassed);