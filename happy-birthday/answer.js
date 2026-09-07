happyBirthday = age => {
  return `Mubashir is just ${20 + age % 2}, in base ${Math.floor(age / 2)}!`
}

const age = 22;

document.getElementById('ans').textContent = happyBirthday(age);