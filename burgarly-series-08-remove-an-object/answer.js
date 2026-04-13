removeEntry = (obj, itm) => {
  const objCopy = {...obj};
  delete objCopy[itm];
  return JSON.stringify(objCopy);
}

const obj = { piano: 300, tv: 100, skate: 50 };        
const itm = "skate";

document.getElementById('ans').textContent =  removeEntry(obj, itm);