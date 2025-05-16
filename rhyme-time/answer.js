doesRhyme = (str1, str2) => {
  str1ModArr = str1.toLowerCase().replace(/[^(aeiou )]/g, "").split(' ');

  str2ModArr = str2.toLowerCase().replace(/[^(aeiou )]/g, "").split(' ');

  return str1ModArr[str1ModArr.length - 1] === str2ModArr[str2ModArr.length - 1];
}

const str1 = "You are off to the races";
const str2 = "a splendid day.";

document.getElementById('ans').textContent = doesRhyme(str1, str2);