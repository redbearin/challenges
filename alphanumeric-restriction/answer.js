alphanumericRestriction = str => {
	if (!str.length) {
		return false;
	}
  let ltrCt = 0;
  let numCt = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[^0-9a-zA-Z]/.test(str[i])) {
      return false;
    }
    else {
      /[1-9]/.test(str[i]) ?
        numCt++:
        ltrCt++;
    }
    if (ltrCt && numCt) {
      return false;
    }

const str = "H3LL0"

document.getElementById('ans').textContent = alphanumericRestriction(str);

