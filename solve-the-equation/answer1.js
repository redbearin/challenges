equation = str => eval(str);

const str = "7*4-2";

document.getElementById('ans').textContent = equation(str);