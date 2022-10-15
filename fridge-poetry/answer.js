canBuild = (str1, str2) => {
  let index;
  // char by char thru str1
  for (let i = 0; i < str1.length; i++) {
    // not a space
    if (str1[i] !== ' ') {
      // index of matching char in str2
      index = str2.indexOf(str1[i]);
      // no match
      if (index === -1)
        return false;
      // remove the char that was matched
      else 
        str2 = str2.slice(0, index) + str2.slice(index + 1);
    }
  }
  return true;
};

const str1 = "fill tuck mid";
const str2 = "truck falls dim";

document.getElementById('ans').textContent = canBuild(str1, str2);
