greetPeople = names => {
  let str = " Hello " + names[0];
  for (let i = 1; i < names.length; i++) {
    str += ", Hello " + names[i];
  }
  return str;
}

const names = ["Angela", "Joe"];

document.getElementById('ans').textContent = greetPeople(names);