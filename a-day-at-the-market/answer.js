whoWinsTonight = (billMon, willInv, price, size) => {
  if (Math.floor(billMon/price) > Math.floor(willInv/size)) {
    return "Bill";
  }
  else {
    if (Math.floor(billMon/price) < Math.floor(willInv/size)) {
      return "Will";
    }
    return "Tie";
  } 
}

const billMon = 3;
const willInv = 7;
const price = 2;
const size = 5;

document.getElementById('ans').textContent = whoWinsTonight(billMon, willInv, price, size);