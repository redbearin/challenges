willFit = (holds, loads) => {
  const sizes = {"S": 50, "M": 100, "L": 200};
  for (let i = 0; i < holds.length; i++) {
    if (sizes[holds[i]] < loads[i]) {
      return false;
    }
  }
  return true;
}

const holds = ["M", "L", "L", "M"];
const loads = [56, 62, 84, 90];

document.getElementById('ans').textContent = willFit(holds, loads);