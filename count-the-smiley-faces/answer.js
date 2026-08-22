countSmileys = faces => {
  let count = 0;
  for (let i = 0; i < faces.length; i++) {
    if (faces[i].length > 1 && faces[i].length < 4) {
      if ((faces[i][0].includes(':') || 
           faces[i][0].includes(';')) &&
           ((faces[i][faces[i].length - 1].includes(')') || 
           faces[i][faces[i].length-1].includes('D')))) {
            if (faces[i].length === 2 || 
                (faces[i][faces[i].length - 2].includes('-') || 
                 faces[i][faces[i].length-2].includes('~'))) {
            count++;
          }
      }
    }
  }
  return count;
}

const faces = [":)", ";(", ";}", ":-D"];

document.getElementById('ans').textContent = countSmileys(faces);