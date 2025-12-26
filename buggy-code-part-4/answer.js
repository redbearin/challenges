greeting = person => person === "Mubashir" ? "Hello, my Love!" : "Hello, " + person + "!";

const person = "Helen";

document.getElementById('ans').textContent = greeting(person);
