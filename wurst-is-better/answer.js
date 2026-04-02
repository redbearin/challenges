wurstIsBetter = str => {
  let strArr = str.split(' ');
  let index, grouping;
  const sausages = ['kielbasa', 'chorizo', 'moronga', 'salami', 'sausage', 'andouille', 'naem', 'merguez', 'gurka', 'snorkers', 'pepperoni'];
  for (let i = 0; i < strArr.length; i++) {
    grouping = strArr[i].toLowerCase();
    for (let j = 0; j < sausages.length; j++) {
      if (grouping.includes(sausages[j])) {
        index = grouping.indexOf(sausages[j]);
        strArr[i] = (strArr[i].slice(0, index) + 
                     "Wurst" + 
                     strArr[i].slice(index + sausages[j].length)).trim();
        break;
      }
    }
  }
  return strArr.join(' ');
}

const str = "Sausage fests are like salami fests";

document.getElementById('ans').textContent = wurstIsBetter(str);