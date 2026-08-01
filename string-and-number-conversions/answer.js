intToString = num => "" + num;
stringToInt = strNum => +strNum;

const num = 4;
const strNum = "4";

document.getElementById('ans').textContent = intToString(num); 

document.getElementById('ans1').textContent = stringToInt(strNum);