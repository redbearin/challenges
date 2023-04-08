getValue = arrs => {
  arrsStr = arrs.toString();
  let str = '';
  for (let i = 0; i < arrsStr.length; i++) {
    if (arrsStr.charCodeAt(i) !== 91 && 
        arrsStr.charCodeAt(i) !== 93)
    str += arrsStr[i];
  }

  if (str.length)	{
    return str.replace(/^,+/, '');
  }
  return "What... why did you make this?"
}
const arrs = [[[[[[[[[[[[[[[["Bazinga"]]]]]]]]][]]]]]]]];

document.getElementById('ans').innerHTML = getValue(arrs);