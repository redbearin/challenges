const formatStudentReports = students => students.map(({student_id: studentId, profile: {first_name: firstName, last_name: lastName}, scores: [firstScore, , lastScore], status = "Active"}) => `Student #${studentId} | ${firstName} ${lastName} | First: ${firstScore} | Last: ${lastScore} | ${status}`);

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

console.log(formatStudentReports(students));

const assert = require("assert").strict;;

const expected = [
  "Student #101 | Maria Lopez | First: 90 | Last: 95 | Active",
  "Student #102 | David Chen | First: 80 | Last: 85 | Active",
  "Student #103 | Sarah Jones | First: 100 | Last: 95 | Inactive"
];

assert.deepStrictEqual(formatStudentReports(students), expected);

console.log("All tests passed!");
