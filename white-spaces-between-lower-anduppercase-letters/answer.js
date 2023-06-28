insertWhitespace = str => {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
}

const str = "SheWalksToTheBeach";

document.getElementById('ans').textContent = insertWhitespace(str);