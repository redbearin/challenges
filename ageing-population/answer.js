afterNYears = (people, years) => {
  for (person in people) {
    people[person] += Math.abs(years);
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
const years = 1;

document.getElementById('ans').textContent = afterNYears(people, years);