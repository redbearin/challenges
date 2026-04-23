GroupsWithStudents = (groups, students) => {
  const newGrouping = [];
  let obj;
  for (let i = 0; i < groups.length; i++) {
    obj = {id: groups[i].id, name: groups[i].name, students: []};
    for (let j = 0; j < groups[i].studentIds.length; j++) {
      let index = students.findIndex(entry => entry.id === groups[i].studentIds[j]);
      obj.students.push(students[index]);
    }
    newGrouping.push(obj);
  }
  return JSON.stringify(newGrouping)
}

const groups = [
  { 
    id: 1,
    name: "G1",
    studentIds: [2, 1]
  }, 
  { 
    id: 2,
    name: "G2",
    studentIds: [3, 4]
  }
]; 

const students = [
  { 
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Steve"
  },
  {
    id: 3,
    name: "Teresa"
  },
  {
    id: 4,
    name: "Barbara"
  }
];

document.getElementById('ans').textContent = GroupsWithStudents(groups, students);