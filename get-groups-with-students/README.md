Create a function that takes two arrays: groups and students. It should return one array with groups merged with students by id. Students within groups should be ordered in the same way the studentIds were ordered.

Examples
getGroupsWithStudents([
  { 
    id: 1,
    name: "G1",
    studentIds: [2, 1]
  }
], [
  { 
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Steve"
  }
]) ➞ [
  { 
    id: 1,
    name: "G1",
    students: [
      {
        id: 2,
        name: "Steve"
      },
      { 
        id: 1, 
        name: "John"
      }
    ]
  }
]
Notes
Try doing it with an arrow function.