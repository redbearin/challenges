const decomposeAddress = (address) => {
  const addArr = address.split(' ');
  let stExt = ['Rd', 'Ct', 'St', 'Pl', 'Dr'];

  // find the index of the street extension
  let index;
  for (let i = 0; i < addArr.length; i++) {
    if (addArr[i].length === 2 && stExt.includes(addArr[i])) {
      index = i;
      break;
    }
  }
  // build street address - works with 
  // streets names with two letter words
  const substrs = [addArr[0]];
  let street = '';
  for (let i = 1; i <= index; i++) {
    if (i === index)
      street += addArr[i];
    else
      street += addArr[i] + ' ';
  }

  // build city
  let city = '';
  for (i = index + 1; i < addArr.length - 2; i++) {
    if (i === addArr.length - 3)
      city += addArr[i].slice(0, -1)
    else
      city += addArr[i] + ' ';
  }

  // add street address, city, state, zip to substring array
  substrs.push(street, 
               city, 
               addArr[addArr.length - 2], 
               addArr[addArr.length - 1]);
  return JSON.stringify(substrs);
};

const address = "8919 Scarecrow Ct Idaho Falls, ID 80193";

document.getElementById('ans').textContent = decomposeAddress(address);