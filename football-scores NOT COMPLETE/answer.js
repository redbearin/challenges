

football = score => {
  console.log('inside')
  const possibleScores = [2, 3, 6, 7, 8];
  let count = 0;
  for (let i = 0; i < possibleScores.length; i++) {
    console.log('inside first loop')
    if (possibleScores[i] > score)
      break;
    for (let j = i; j < possibleScores.length; j++) {
      console.log('inside second loop')
      console.log('total: ', possibleScores[i] + possibleScores[j])
      if (possibleScores[i] + possibleScores[j] > score) 
        break;
      if (possibleScores[i] + possibleScores[j] === score) {
        count++;
        console.log('count incremented')
      }
    }
    console.log(count)
  }
  return count;
}
  
const score = 6; 

document.getElementById('ans').textContent = football(score);