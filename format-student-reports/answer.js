const formatStudentReports = students => 
  JSON.stringify(
    students.map(({
      student_id: studentId, 
      profile: {first_name: firstName, last_name: lastName}, 
      scores: [firstScore, , lastScore], 
      status = "Active"}) => 
        `Student #${studentId} | ${firstName} ${lastName} | First: ${firstScore} | Last: ${lastScore} | ${status}`
    ) 
  );

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

document.getElementById('ans').textContent = formatStudentReports(students);
