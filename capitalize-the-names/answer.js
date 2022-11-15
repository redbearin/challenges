capMe = names => {
  for (let i = 0; i < names.length; i++) [
    names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase()
  ]
  return JSON.stringify(names);
}

const names = ["Slyvia", "Kristal", "Sharilyn", "Calista"];

document.getElementById('ans').textContent = capMe(names);