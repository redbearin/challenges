getNumberOfApples = (apples, percent) => {
  const num4Kids = apples - Math.ceil(apples * +percent.slice(0, -1)/100);
  if (num4Kids === 0) {
    return "The children didn't get any apples";
  }
  return num4Kids;
}

const apples = 10;
const percent = "90%";

document.getElementById('ans').textContent = getNumberOfApples(apples, percent);