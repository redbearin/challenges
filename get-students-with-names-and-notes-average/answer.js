getStudentsWithNamesAndAvgNote = students => {
  const studentsAvg = [];
  let obj;
  for (let i = 0; i < students.length; i++) {
    obj = {name: students[i].name, avgNote: students[i].notes.reduce((prevValue, curValue) => prevValue + curValue)/students[i].notes.length};
    studentsAvg.push(obj);
  }
  console.log(studentsAvg);
}

const students = [
  { name: "John", notes: [3, 5, 4]}
];

document.getElementById('ans').textContent = getStudentsWithNamesAndAvgNote(students);