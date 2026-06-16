smallerNum = (strNum1, strNum2) => strNum1.localeCompare(strNum2, undefined, { numeric: true }) < 0 ? strNum1 : strNum2;


const strNum1 = "1500";
const strNum2 = "1";

document.getElementById('ans').textContent = smallerNum(strNum1, strNum2);