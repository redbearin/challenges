potatoes = str => {
  return (str.match(/potato/g) || []).length
}

const str = "potatoapple";

document.getElementById('ans').textContent = potatoes(str);