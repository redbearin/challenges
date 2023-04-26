objMatch = (obj1, obj2) => {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key])
      return false; 
  }
  return true;
}

const obj1 = {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}

const obj2 = 
{
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
};

document.getElementById('ans').textContent = objMatch(obj1, obj2);