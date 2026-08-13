addStrNums = (str1, str2) => {
  if (/[0-9]/ig.test(str1) && /[0-9]/ig.test(str2)) {
    return BigInt(str1) + BigInt(str2);
  }
  return "-1";
}

const str1 = "1874682736267235927359283579235789257";
const str2 = "32652983572985729";

document.getElementById('ans').textContent = addStrNums(str1, str2);