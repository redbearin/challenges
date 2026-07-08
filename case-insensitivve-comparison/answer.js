match = (word1, word2) => word1.toLowerCase() === word2.toLowerCase();

const word1 = "hello";
const word2 = "hELLo";

document.getElementById("ans").textContent = match(word1, word2);