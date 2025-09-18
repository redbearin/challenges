chineseZodiac = yr => {
  const rems = {0: "Monkey", 1: "Rooster", 2: "Dog", 	3: "Pig", 4: "Rat",	5: "Ox", 6: "Tiger", 	7: "Rabbit", 8: "Dragon", 9: "Snake", 	10: "Horse", 	11: "Sheep"};
  
  return rems[yr % 12];
}

const yr = 1968;

document.getElementById('ans').textContent = chineseZodiac(yr);