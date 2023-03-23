stringCycling = (str1, str2) => {
  const times = Math.floor(str2.length/str1.length);
  return str1.repeat(times) + str1.slice(0, str2.length % str1.length);
}

const str1 = "abc";
const str2 = "hello";

document.getElementById('ans').textContent = stringCycling(str1, str2);