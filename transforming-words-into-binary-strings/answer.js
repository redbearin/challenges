convertBinary = str => {
  return str.replace(/[a-m]/gi, "0").replace(/[n-z]/gi, "1");
}

const str = "excLAIM";

document.getElementById('ans').textContent = convertBinary(str);