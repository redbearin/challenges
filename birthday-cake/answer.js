getBirthdayCake = (name, age) => {
  let sym;
  if (age % 2 !== 0)
    sym = '*';
  else
    sym = '#';

  const wording  = sym + ' ' + age + ' Happy Birthday ' +
                   name + '! ' + age + ' ' + sym;
  const topBottom = sym.repeat(wording.length);

  const topText = document.createTextNode(topBottom);
  const innerText = document.createTextNode(wording);
  const bottomText = document.createTextNode(topBottom);

  document.getElementById("top").appendChild(topText);
  document.getElementById("middle").appendChild(innerText);
  document.getElementById('bottom').appendChild(bottomText);
}
const name = "Isabelle";
const age = 2;

getBirthdayCake(name, age);

