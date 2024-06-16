const SYMBOLS = ["♈", "♉", "♊", "♋", "♌", "♍",
					 "♎", "♏", "♐", "♑", "♒", "♓"];

zodiacSymbol = (dob) => {
  const dobArr = dob.split(' ');
  const monStr = dobArr[0];
  const dayNum = +dobArr[1].slice(0, -1);
  if (monStr === "March" && dayNum > 20 ||  
    monStr === "April" && dayNum < 21)
    return SYMBOLS[0]; 
  if (monStr === "April" && dayNum > 20 ||  
      monStr === "May" && dayNum < 22)
      return SYMBOLS[1];
  if (monStr === "May" && dayNum > 21 ||  
    monStr === "June" && dayNum < 22)
    return SYMBOLS[2];
  if (monStr === "June" && dayNum > 21 ||  
    monStr === "July" && dayNum < 23)
    return SYMBOLS[3];
  if (monStr === "July" && dayNum > 22 ||  
    monStr === "August" && dayNum < 23)
    return SYMBOLS[4];
  if (monStr === "August" && dayNum > 22 ||  
    monStr === "September" && dayNum < 24)
    return SYMBOLS[5];
  if (monStr === "September" && dayNum > 23 ||  
    monStr === "October" && dayNum < 24)
    return SYMBOLS[6];
  if (monStr === "October" && dayNum > 23 ||  
    monStr === "November" && dayNum < 2)
    return SYMBOLS[7];
  if (monStr === "November" && dayNum > 22 ||  
    monStr === "December" && dayNum < 22)
    return SYMBOLS[8];
  if (monStr === "December" && dayNum > 21 ||  
    monStr === "January" && dayNum < 21)
    return SYMBOLS[9];
    if (monStr === "January" && dayNum > 20 ||  
    monStr === "February" && dayNum < 20)
    return SYMBOLS[10];
  if (monStr === "February" && dayNum > 19 ||  
    monStr === "March" && dayNum < 21)
    return SYMBOLS[11];
}

const dob = "January 19, 1985";


document.getElementById('ans').textContent = zodiacSymbol(dob);

