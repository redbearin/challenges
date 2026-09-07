movingPartition = arr => {
  const partitions = [];
  for (let i = 0; i < arr.length - 1; i++) {
    partitions.push([arr.slice(0, i + 1), arr.slice(i + 1)]);
  }
  return JSON.stringify(partitions);
}

const arr = [-1, -1, -1, -1];

document.getElementById('ans').textContent = movingPartition(arr);