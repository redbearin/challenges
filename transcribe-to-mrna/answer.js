dnaToRna = str => {
  let trans = {"A": "U", "T": "A", "G": "C", "C": "G"};
  let mrna = '';
  for (let i = 0; i < str.length; i++) {
    mrna += trans[str[i]];
  }
  return mrna;
}

const str = "CGATATA";
document.getElementById('ans').textContent = dnaToRna(str);