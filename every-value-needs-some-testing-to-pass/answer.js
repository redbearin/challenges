everySome = (test, type, a, b, c, d, e) => {
  console.log(eval(a + test) )
  if (type === "everybody") {
    if (eval(a + test) &&
    eval(b + test) &&
    eval (c + test) &&
    eval (d + test) &&
    eval (e + test)) {
      return true;
    }
    else {
      return false;
    }
  } 
  else {
   if (eval(a + test) ||
    eval(b + test) ||
    eval (c + test) ||
    eval (d + test) ||
    eval (e + test)) {
      return true;
    }
    else {
      return false;
    }
  }
}

const test = ">= 1"
const type =  "everybody"
const a = 1;
const b = 1;
const c = -1;
const d = 1;
const e = 1;

document.getElementById('ans').textContent = everySome(test, type, a, b, c, d, e);