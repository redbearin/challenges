validColor = str => {
  const strArr = str.split('(');
  if (strArr[0] === 'rgba' || strArr[0] === 'rgb') {
    const insideParen = strArr[1].split(',');
    if (strArr[0] === 'rgb') {
      if (insideParen.length !== 3)
        return false;
      insideParen[insideParen.length - 1] = insideParen[insideParen.length - 1].slice(0,-1);
      for (let i = 0; i < insideParen.length; i++) {
        if (insideParen[i] === '' || 
            +insideParen[i] < 0 || 
            +insideParen[i] > 255)
          return false;
      }
    }
    else {
      if (insideParen.length !== 4)
        return false;
      insideParen[insideParen.length - 1] = insideParen[insideParen.length - 1].slice(0,-1);
      for (let i = 0; i < insideParen.length; i++) {
        insideParen[i] = insideParen[i].trim();
        if (i === insideParen.length - 1) {
          if (insideParen[i] === '' || 
              +insideParen[i] < 0 || 
              +insideParen[i] > 1)
            return false;
        }
        else if (insideParen[i] === '' || 
                 +insideParen[i] < 0 || 
                 +insideParen[i] > 255)
          return false;
      }
    }
  }
  return true;
}
const str = "rgba(	0 , 127	, 255 , 0.1	)";

document.getElementById('ans').textContent = validColor(str);

