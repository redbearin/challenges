formatDate = date => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  };
  const dateTimeFormat = new Intl.DateTimeFormat('en-US', options);
  const parts = dateTimeFormat.formatToParts(date);
  const partValues = parts.map(p => p.value);
  return partValues[4] + partValues[0] + partValues[2] + partValues[6] + partValues[8] + partValues[10];
}

const date = new Date(2019, 11, 31, 23, 59, 59);

document.getElementById('ans').textContent = formatDate(date);