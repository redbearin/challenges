formatDate = str => str.slice(6) + str.slice(3, 5) + str.slice(0, 2);
const str = "11/12/2019";

document.getElementById('ans').textContent = formatDate(str);