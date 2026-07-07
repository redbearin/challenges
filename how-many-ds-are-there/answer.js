countDs = str => str.replace(/[^d]/ig, "").length;

const str = "My friend Dylan got distracted in school.";

document.getElementById('ans').textContent = countDs(str);