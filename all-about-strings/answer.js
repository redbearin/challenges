allAboutStrings = str => {
  const details = [];
  details.push(str.length);
  details.push(str[0]);
  details.push(str[str.length -1]);

  str.length % 2 ?
    details.push(str[Math.floor(str.length/2)]) :
    details.push(str[str.length/2 - 1] + str[str.length/2]);

  for (let i = 2; i < str.length; i++) {
    if (str[1] === str[i]) {
      details.push('@ index ' + i);
      break;
    }
    if (i === str.length - 1) {
      details.push("not found");
    }
  }
  return JSON.stringify(details);
}

const str = "Computer";

document.getElementById('ans').textContent = allAboutStrings(str);

