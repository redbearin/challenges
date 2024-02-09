getStudentTopNotes = students => {
  return JSON.stringify(students.map(ele => {
      if (ele.notes.length) {
        return Math.max(...ele.notes)
      }
      else {
        return 0;
      }
    }
  ));
}

const students = [
  {
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
  },
  {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
  },
  {
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
  }
];

document.getElementById('ans').textContent = getStudentTopNotes(students);