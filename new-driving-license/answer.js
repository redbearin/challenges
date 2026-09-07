license = (me, agents, others) => {
  const allSorted = (me + ' ' + others).split(' ').sort();
  const idx = allSorted.indexOf(me);
  return Math.floor(idx/agents) * 20 + 20;
}

const me = "Eric";
const agents = 2;
const others = "Adam Caroline Rebecca Frank";
document.getElementById('ans').textContent = license(me, agents, others);