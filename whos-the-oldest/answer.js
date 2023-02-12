oldest = people => {
  // convert obj to array
  // sort by highest age to lowest age
  // take the name from the highest age
  return (Object.entries(people).sort((a, b) => b[1] - a[1]))[0][0];
}

const people = {
  Max: 9,
  Josh: 13,
  Sam: 48,
  Anne: 33
};

document.getElementById('ans').textContent = oldest(people);