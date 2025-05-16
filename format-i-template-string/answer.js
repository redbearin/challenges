buildTemplateStr = (nameA, nameB, nameC) => {
  return `Their names are:  ${nameA},  ${nameB} and ${nameC}.`
}

const nameA = "John";
const nameB = "Joe";
const nameC = "Jack";

document.getElementById('ans').textContent = buildTemplateStr(nameA, nameB, nameC);