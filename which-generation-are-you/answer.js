generation = (gen, boyGirl) => {
  const men = {'-3': 'great grandfather', '-2': 'grandfather', '-1': 'father', '0': 'me!', '1': 'son', '2': 'grandson', '3': 'great grandson'};
  const women = {'-3': 'great grandmother', '-2': 'grandmother', '-1': 'mother', '0': 'me!', '1': 'daughter', '2': 'granddaughter', '3': 'great granddaughter'};
  if (boyGirl === 'f') {
    return women[gen.toString()];
  }
  return men[gen.toString()];
}

const gen = 2;
const boyGirl = "f";

document.getElementById('ans').textContent = generation(gen, boyGirl);