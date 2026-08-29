convert = (hrs, mins) => hrs * 3600 + mins * 60;

const hrs = 2;
const mins = 0;

document.getElementById('ans').textContent = convert(hrs, mins);