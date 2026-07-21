getDay = str => {
  const ourDate = new Date(str);
  const day = ourDate.getDay();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return dayNames[day];
}

const str = "12/07/2016";

document.getElementById('ans').textContent = getDay(str);