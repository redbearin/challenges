getStudentsWithNamesAndTopNotes = students => {
  for (let i = 0; i < students.length; i++) {
    if (!students[i].notes.length) {
      students[i].notes = [0];
    }
    students[i] = {'name': students[i].name, 'topNote': students[i].notes.sort((a,b) => b-a)[0]};
  }
  return JSON.stringify(students);
}

const students = [
  { "name": "John", "notes": [3, 5, 4] },
  { "name": "Max", "notes": [1, 4, 6] },
  { "name": "Zygmund", "notes": [1, 2, 3] }
];

document.getElementById('ans').textContent = getStudentsWithNamesAndTopNotes(students);