const addBonusPoints = (students, targetId, bonus) => 
  students.map(student => 
    student.id === targetId ?
    {
      ...student,
      grades: {
        ...student.grades,
        score: Math.min(100, student.grades.score + bonus)
      }
    } :
    student
  );

const students = [
  {
    id: 101,
    name: "Alice",
    grades: {
      score: 82,
      subject: "Math",
      passed: true
    }
  },
  {
    id: 102,
    name: "Bob",
    className: "Biology",
    grades: {
      score: 94,
      subject: "Science",
      passed: true
    }
  },
  {
    id: 103,
    name: "Charlie",
    grades: {
      score: 67,
      subject: "History",
      passed: true
    }
  }
];

const targetId = 102;
const bonus = 10;

document.getElementById('ans').textContent = JSON.stringify(addBonusPoints(students, targetId, bonus));