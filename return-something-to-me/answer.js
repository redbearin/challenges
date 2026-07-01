giveMeSomething = str => {
  return "something " + str;
}

const str = "Bob Jane";

document.getElementById('ans').textContent = giveMeSomething(str);