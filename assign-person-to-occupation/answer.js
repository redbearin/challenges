assignPersonToJob = (names, jobs) => {
  const occupations = {};
  for (let i = 0; i < names.length; i++) {
    occupations[names[i]] = jobs[i];
  }
  return JSON.stringify(occupations);
}

const names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"];
const jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"];

document.getElementById('ans').textContent = assignPersonToJob(names, jobs);