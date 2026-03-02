const letters = (word1, word2) => {
  // create arrays of strings and remove dups
  const word1A = word1.split('');
  const word2A = word2.split('');
  const word1Arr = [...new Set(word1A)]
  const word2Arr = [...new Set(word2A)]

  // assign shortest and longest arrays
  let longest, shortest;
  if (word1Arr.length >= word2Arr.length) {
    longest = word1Arr;
    shortest = word2Arr;
  }
  else {
    longest = word2Arr;
    shortest = word1Arr;
  }

  let index;
  // letters shared between words
  const shared = [];
  // letters unique to longest word
  const uniqueLong = [];
  // letters unique to shortest word
  const uniqueShort = [];
  // go through element in longest array
  for (let i = 0; i < longest.length; i++) {
    // find the index of matching element in shortest
    index = shortest.indexOf(longest[i])
    // if there is a match
    if (index >= 0) {
      // add element to shared array
      shared.push(longest[i]);
      // set a flag in shortest to show it is shared
      shortest[index] = '*';
    }
    // no match
    else {
      uniqueLong.push(longest[i]);
    }
  }
  // find anything in shortest that was not matched
  // add these elements to the shortest array
  for (let i = 0; i < shortest.length; i++) {
    index = shortest.indexOf(longest[i])
    if (shortest[i] !== '*') {
      uniqueShort.push(shortest[i])
      }
  }
  // depending on which word is longest and shortest
  // adjust the return order
  if (longest === word1)
    return JSON.stringify([shared.sort().join(''), uniqueShort.sort().join(''),uniqueLong.sort().join('')]);

  return JSON.stringify([shared.sort().join(''), uniqueLong.sort().join(''), uniqueShort.sort().join('')]);
}
const word1 = "kerfuffle";
const word2 = "fluffy";

document.getElementById('ans').textContent = letters(word1, word2);