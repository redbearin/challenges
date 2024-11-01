getBestStudent = students => {
  let bestStu, avg;
  let bestAvg = 0;
  for (key in students) {
    avg = students[key].reduce((acc, val) => acc + val, 0) / students[key].length;
    if (avg > bestAvg) {
      bestStu = key;
      bestAvg = avg;
    }
  }
  return bestStu;
}

const students = {
  John: [100, 90, 80],
  Bob: [100, 70, 80]
};

document.getElementById('ans').textContent = getBestStudent(students);