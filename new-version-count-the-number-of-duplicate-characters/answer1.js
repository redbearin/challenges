duplicates = str => {
  return str.length - new Set(str).size;
}

const str = "The Quick Brown Fox Jumps Over the Lazy Dog";

document.getElementById('ans').textContent = duplicates(str);