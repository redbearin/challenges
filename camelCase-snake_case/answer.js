toCamelCase = str => {
  const strArr = str.split('_');
  let camel = strArr[0];
  for (let i = 1; i < strArr.length; i++) {
    camel += strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  return camel;
}

toSnakeCase = str => {
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      strArr[i] = '_' + strArr[i].toLowerCase();
    }
  }
  return strArr.join('');
}

const str = "is_modal_open";

document.getElementById('ans').textContent = toCamelCase(str);