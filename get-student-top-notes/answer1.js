getStudentTopNotes = arr => {
  const topNotes = [];
  for (let i = 0; i < arr.length; i++) {
    topNotes.push(Math.max(...arr[i].notes));
  }
  return JSON.stringify(topNotes);
}

const arr = [
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

  document.getElementById('ans').textContent = getStudentTopNotes(arr);