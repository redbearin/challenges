countLayers = rug => {
  let layers = 1;
  for (let i = 1; i <= Math.floor(rug[0].length/2); i++) {
   if (rug[Math.floor(rug.length/2)][i] !== 
       rug[Math.floor(rug.length/2)][i-1]) {
        layers++;
       }
  }
  return layers;
}

const rug = [
  "AAAAAAAAAAA",
  "AABBBBBBBAA",
  "AABCCCCCBAA",
  "AABCAAACBAA",
  "AABCADACBAA",
  "AABCAAACBAA",
  "AABCCCCCBAA",
  "AABBBBBBBAA",
  "AAAAAAAAAAA"
];

document.getElementById('ans').textContent = countLayers(rug);