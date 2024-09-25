uniqueStyles = arr => {
  return [... new Set(arr.join(',').split(','))].length;
}

const arr = ["Dub,Dancehall",
  "Industrial,Heavy Metal",
  "Techno,Dubstep",
  "Synth-pop,Euro-Disco",
  "Industrial,Techno,Minimal"];

document.getElementById('ans').textContent = 
uniqueStyles(arr);

