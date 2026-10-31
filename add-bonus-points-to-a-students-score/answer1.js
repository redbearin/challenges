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

console.log(addBonusPoints(students, targetId, bonus));

const assert = require("assert").strict;

const original = JSON.parse(JSON.stringify(students));

// Bonus capped at 100
const result = addBonusPoints(students, 102, 10);

assert.strictEqual(result[1].grades.score, 100);
console.log("Maximum score test passed!");

// Normal bonus
const normalBonus = addBonusPoints(students, 101, 5);

assert.strictEqual(normalBonus[0].grades.score, 87);
console.log("Normal bonus test passed!");

// Preserve other properties
assert.deepStrictEqual(result[1], {
  id: 102,
  name: "Bob",
  className: "Biology",
  grades: {
    score: 100,
    subject: "Science",
    passed: true
  }
});

console.log("Property preservation test passed!");

// Original data remains unchanged
assert.deepStrictEqual(students, original);
console.log("Immutability test passed!");

// Object reference checks
assert.notStrictEqual(result, students);
assert.strictEqual(result[0], students[0]);
assert.notStrictEqual(result[1], students[1]);
assert.notStrictEqual(result[1].grades, students[1].grades);
assert.strictEqual(result[2], students[2]);

console.log("Object reference test passed!");

// Missing ID
const noMatch = addBonusPoints(students, 999, 5);

assert.notStrictEqual(noMatch, students);
assert.deepStrictEqual(noMatch, students);
assert.strictEqual(noMatch[0], students[0]);

console.log("Missing ID test passed!");

// Extra properties
const extraStudents = [
  {
    id: 201,
    active: true,
    grades: {
      score: 75,
      semester: "Fall",
      extraCredit: true
    }
  }
];

assert.deepStrictEqual(
  addBonusPoints(extraStudents, 201, 8),
  [
    {
      id: 201,
      active: true,
      grades: {
        score: 83,
        semester: "Fall",
        extraCredit: true
      }
    }
  ]
);

console.log("Extra properties test passed!");