const switcheroo = str => {
  let strArr = str.split(' ');
  const finalArr = [];
  for (let i = 0; i < str.length; i++) {
    // replace word ending nts with nce
    if (/(nts)\b/.test(strArr[i]))
      finalArr.push(strArr[i].replace(/(nts)\b/, 'nce'));
    // replace word ending nce with nts
    else if (/(nce)\b/.test(strArr[i]))
      finalArr.push(strArr[i].replace(/(nce)\b/, 'nts'));
    // replace word ending nts with nce when there is punctuation after
    else if (/(nts)\*[,!@#$%^&*()]/.test(strArr[i]))
      finalArr.push(strArr[i].replace(/(nts)\*[,!@#$%^&*()]/, 'nce'));
    // replace word ending nce with nts when there is punctuation after
    else if (/(nce)\*[,!@#$%^&*()]/.test(strArr[i]))
      finalArr.push(strArr[i].replace(/(nce)\*[,!@#$%^&*()]/, 'nts'));
    // no changes to word
    else
      finalArr.push(strArr[i]);
  }
  // rebuild sentence
  return finalArr.join(' ');
};

const str = "The elephants in France were chased by ants!";

document.getElementById('ans').textContent = switcheroo(str);