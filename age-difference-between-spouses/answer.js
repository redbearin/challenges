ageDifference = ages => {
  ages.sort((a,b) => b - a);
  const diff = ages[0] - ages[1];
  if (diff === 1) {
    return "1 year";
  }
  return diff > 1 ?
    "" + diff + " years" :
    "No age difference between spouses.";
}

const ages = [2, 4, 6, 31, 32];

document.getElementById('ans').textContent = ageDifference(ages);