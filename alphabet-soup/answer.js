AlphabetSoup = str => str.split('').sort().join('');

const str = "hello";

document.getElementById("ans").textContent = AlphabetSoup(str);