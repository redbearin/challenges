getStudentsWithNamesAndTopNotes = students => {
  const studentTopNote = [];
  let topVal;
  for (let i = 0; i < students.length; i++) {
    if (students[i].notes.length) {
      topVal = Math.max(...students[i].notes)
    }
    else {
      topVal = null;
    }
    studentTopNote.push({name: students[i].name, topNote: topVal})
  }
  return JSON.stringify(studentTopNote);
}

const students = [
  { "name": "John", "notes": [] },
  { "name": "Max", "notes": [] },
  { "name": "Zygmund", "notes": [1, 2, 3] }
]

document.getElementById('ans').textContent = getStudentsWithNamesAndTopNotes(students);