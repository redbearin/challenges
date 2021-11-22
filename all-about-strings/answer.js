const allAboutStrings = str => {
  const details = [];
  // length
  details[0] = str.length;
  // first char
  details[1] = str[0];
  // last char
  details[2] = str[str.length - 1];
  // middle char or chars
  if (details[0] % 2)
    details[3] = str[Math.ceil(details[0] / 2) - 1];
  else {
    details[3] = str[(details[0] / 2) - 1] + str[details[0] / 2] ;
  }
  // index that holds same char as in index 1
  const backPart = str.slice(2);
  const backIdx = str.slice(2).indexOf(str[1]);
  if (backIdx === -1)
    details[4] = "not found";
  else
    details[4] = "@ index " + (backIdx + 2);

  return JSON.stringify(details);
};

const str = "Science";

document.getElementById('ans').textContent = allAboutStrings(str);