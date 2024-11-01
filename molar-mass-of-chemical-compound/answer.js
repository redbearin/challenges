molarMass = comp => {
  const compounds = {'Water': "H2 O", 'BoricAcid': "H3 B O3", 'SulfuricAcid':"H2 S O4", 'NitricAcid': "H N O3", 'HydroChloricAcid': "H Cl"};

  const compArr = compounds[comp].split(' ');
  const masses = {"H": 1, "B": 10, "0": 16, "S": 32, "N": 14, "Cl": 35};

  let sum = 0;
  for (let i = 0; i < compArr.length; i++) {
    if (compArr[0].length === 1) {
      sum += masses[compArr[i][0]];
    }
    sum += +masses[comp[i][0]] * +masses[comp[i][comp[i].length - 1]];
  }
  return sum;
}

const comp = "SulfuricAcid";

document.getElementById('ans').textContent = molarMass(comp);