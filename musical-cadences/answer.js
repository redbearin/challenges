findCadence = chords => {
  if (chords[chords.length - 1] === 'V') {
    return "imperfect";
  }
  if (chords[chords.length - 2] === 'V') { 
    return chords[chords.length - 1] === 'I' ?
    "perfect":
    "interrupted";
  }
  if (chords[chords.length - 2] === 'IV' && chords[chords.length - 1] === 'I') {
    return 'plagal';
  }
  return  "no cadence";
}

const chords = ["ii", "V", "I"];

document.getElementById('ans').textContent = findCadence(chords);