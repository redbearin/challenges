calculator = str => eval(str);

const str = "13+2-5*2";

document.getElementById('ans').textContent = calculator(str);