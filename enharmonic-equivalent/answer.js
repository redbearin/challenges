getEquivalent = note => {
  const correlations = {
    'C#': 'Db', 'D#': 'Eb', 'F#': 'Gb', 'G#': 'Ab', 'A#': 'Bb', 'Db': 'C#', 'Eb': 'D#', 'Gb': 'F#', 'Ab': 'G#', 'Bb': 'A#', 
  }
  return correlations[note];
}

const note = "D#";

document.getElementById('ans').textContent = getEquivalent("D#");