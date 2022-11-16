const timeToFinish = (sent, part) => {
  const diff = sent.length - part.length;
  let spaces = 0;
  for (let i = sent.length - 1; i > part.length - 1; i--) {
    if (sent[i] === ' ') {
      spaces ++;
    }    
  }
  return (diff - spaces) * 0.5;
}

const sent = "Thank you for reading my essay.";
const part = "T";

document.getElementById('ans').textContent = timeToFinish(sent, part);