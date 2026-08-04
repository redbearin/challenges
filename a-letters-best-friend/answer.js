bestFriend = (str, ltr1, ltr2) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ltr1 && str[i+1] !== ltr2) {
      return false;
    }
  }
  return true;
}

const str = "he headed to the store"; 
const ltr1 = "h";
const ltr2 = "e";

document.getElementById('ans').textContent = bestFriend(str, ltr1, ltr2);