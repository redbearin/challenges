damage = (dam, speed, time) => {
  if (time === "second") {
    return dam * speed;
  }
  if (time === "minute") {
    return dam * speed * 60;
  }
  return dam * speed * 60 * 60;
}

const dam = 40;
const speed = 5;
const time = "second";

document.getElementById('ans').textContent = damage(dam, speed, time);