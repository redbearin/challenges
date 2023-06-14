sameAscii = (str1, str2) => {
  ttl1 = 0;
  ttl2 = 0;
  for (let i = 0; i < str1.length; i++) {
    ttl1 += str1.charCodeAt(i);
    ttl2 += str2.charCodeAt(i);
  }
  return ttl1 === ttl2 ? true: false;
}

const str1 = "AA";
const str2 = "B@";

document.getElementById('ans').textContent = sameAscii(str1, str2);