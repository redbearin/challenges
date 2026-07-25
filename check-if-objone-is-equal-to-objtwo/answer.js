isEqual = (objOne, objTwo) => Object.entries(objOne).flat().join('') === Object.entries(objTwo).flat().join('');

const objOne = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
};

const objTwo = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
};

document.getElementById('ans').textContent = isEqual(objOne, objTwo);
