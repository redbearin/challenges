error = n => {
  if (n < 1 || n > 5) {
    return 101;
  }
  const arr = ["Check the fan: e1", "Emergency stop: e2","Pump Error: e3", "c: e4", "Temperature Sensor Error: e5"];
  return arr[n - 1];
}

document.getElementById('ans').textContent = error(n);