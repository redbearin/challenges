Given:
const students = [
  {
    student_id: 101,
    profile: {
      first_name: "Maria",
      last_name: "Lopez"
    },
    scores: [90, 85, 95],
    status: "Active"
  },
  {
    student_id: 102,
    profile: {
      first_name: "David",
      last_name: "Chen"
    },
    scores: [80, 75, 85]
  },
  {
    student_id: 103,
    profile: {
      first_name: "Sarah",
      last_name: "Jones"
    },
    scores: [100, 90, 95],
    status: "Inactive"
  }
];


Write:
const formatStudentReports = students => {
  // Your solution
};


Your function should return:
[
  "Student #101 | Maria Lopez | First: 90 | Last: 95 | Active",
  "Student #102 | David Chen | First: 80 | Last: 85 | Active",
  "Student #103 | Sarah Jones | First: 100 | Last: 95 | Inactive"
]


Requirements
1. Use .map() to create an array of strings.
2. Destructure directly in the .map() callback parameter.
3. Rename student_id to studentId.
4. Extract first_name and last_name from profile, renaming them to firstName and lastName.
5. Extract the first and third elements of scores into firstScore and lastScore, skipping the middle element.
6. Give status a default of "Active".
7. Preserve the input order and don't mutate the input.
8. Match the output strings exactly, including the #, spaces, colons, and capitalization.
You can assume every student has a valid ID, profile, and exactly three numeric scores. Only status may be missing.

Note: that the old require is required with this version of VS Code