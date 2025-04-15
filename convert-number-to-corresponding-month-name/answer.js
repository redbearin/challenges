monthName = num => {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return month[num - 1];
}
const num = 3;
document.getElementById('ans').textContent = monthName(num);