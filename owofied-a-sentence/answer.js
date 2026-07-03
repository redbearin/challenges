owofied = str => {
  str = str.replace(/i/g, 'wi').replace(/e/g, 'we');
  return str + ' owo';
}

const str = "I'm gonna ride 'til I can't no more";

document.getElementById('ans').textContent = owofied(str);