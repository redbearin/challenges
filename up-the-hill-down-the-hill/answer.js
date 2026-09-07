aveSpd = (upTime, upSpd, dwnSpd) => {
  const d = upSpd * upTime;
  return d * 2 / (upTime + d/dwnSpd)
}
const upTime = 18;
const upSpd = 20;
const dwnSpd = 60;

document.getElementById('ans').textContent = aveSpd(upTime, upSpd, dwnSpd);