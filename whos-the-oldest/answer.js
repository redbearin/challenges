oldest = people => {
  const peopleArr = Object.entries(people);
  peopleArr.sort((a,b) => b[1] - a[1]);
  return peopleArr[0][0];
}

const people = {
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29
};
document.getElementById('ans').textContent = oldest(people);