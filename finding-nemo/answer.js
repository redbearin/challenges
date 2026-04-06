findNemo = str => {
  const strArr = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    if (strArr[i] === "Nemo") {
      return "I found Nemo at " + (i+1) + "!";
    }
  }
  return "I can't find Nemo :(";
}

const str = "Nemo is me";

document.getElementById('ans').textContent = findNemo(str);