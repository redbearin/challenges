concatName = (firstName, lastName) => lastName + ", " + firstName;
const firstName = "Mary";
const lastName = "Jane";

document.getElementById('ans').textContent = concatName(firstName, lastName);