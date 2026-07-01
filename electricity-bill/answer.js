electricityBill = units => {
  let bill;
  // > 500
  if (units > 500) {
    bill = (100 + 200 + 300 + 800 + (units - 500) * 5) * 1.10 + 15;
  }
  // between 301 and 500
  else if (units > 300) {
    bill = (100 + 200 + 300 + (units - 300) * 4) * 1.10 + 15;
  }
  // between 201 and 300
  else if (units > 200) {
    bill = (100 + 200 + (units - 200) * 3) * 1.10 + 15;    
  }
  // between 101 and 200
  else if (units > 100) {
    bill = (100 + (units - 100) * 2) * 1.10 + 15;
  }
  // between 1 and 100
  else {
    bill = units * 1.10 + 15;
  }
  if(Number.isInteger(bill)) {
    return bill;
  }
  if (bill.toString().split('.')[1][2] === '0' && 
      bill.toString().split('.')[1][3] === '0') {
    return Math.round(bill * 100) / 100;
  }
  else {
    return Math.ceil(bill * 100) / 100;
  }
}

const units = 225;

document.getElementById('ans').textContent = electricityBill(units);