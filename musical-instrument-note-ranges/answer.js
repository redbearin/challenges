instrumentRange = (instru, note) => {
  // instrument ranges
  const instruRanges = {Piccolo:	'D4-C7', Tuba: 'D1-F4', Guitar: 'E3-E6',
    Piano: 'A0-C8', Violin: 'G3-A7'};
  // a. greater than lowest octave, less than highest octave
  // b. in lowest octave, greater than or equal to lowest note
  // c. in highes octave, less than or equal to highest note
  if (+note[1] > +instruRanges[instru][1] &&
      +note[1] < +instruRanges[instru][4] 
      ||
      +note[1] === +instruRanges[instru][1] && 
      note.charCodeAt(0) >= instruRanges[instru].charCodeAt(0) 
      ||
      +note[1] === +instruRanges[instru][4] && 
      note.charCodeAt(0) <= instruRanges[instru].charCodeAt(3)) 
    return true;
  return false;
}

const instru = "Violin";
const note = "G6";

document.getElementById('ans').textContent = instrumentRange(instru, note);