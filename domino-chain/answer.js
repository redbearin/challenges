dominoChain = dominoes => {
  let begin = '';
  let end = '';
  for (let i = 0; i < dominoes.length; i++) {
    // chain stopping domino position
    if (dominoes[i] === ' ' || dominoes[i] === '/' ) {
      // build part that does not change
      end = dominoes.slice(i);
      break;
    }
    // build part that is changing
    begin += '/';
  }
  return begin + end;
};

dominoes = "||//||";
document.getElementById('ans').textContent = dominoChain(dominoes);