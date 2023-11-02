const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23};

nameScore = name => {
  name = name.replace(" ","");
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += scores[name[i]];
  }
  if (sum > 600) {
    return "THE BEST";
  }
  if (sum > 300) {
    return "VERY GOOD";
  }
  if (sum > 60) {
    return "PRETTY GOOD";
  }
  return "NOT TOO GOOD";
}

const name = "BILL GATES";

document.getElementById('ans').textContent = nameScore(name);