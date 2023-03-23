stringCycling = (str1, str2) => {
  return str1.repeat(Math.floor(str2.length/str1.length)) + 
         str1.slice(0, str2.length % str1.length);
}

const str1 = "abc";
const str2 = "hello";

document.getElementById('ans').textContent = stringCycling(str1, str2);