Write a function named addBonusPoints that receives:
- students: an array of student objects
- targetId: the ID of the student receiving bonus points
- bonus: the number of points to add
Update the matching student's grades.score by adding bonus, but never allow the score to exceed 100.

Input
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


Calling:
addBonusPoints(students, 102, 10);


should return a new array where Bob's score is 100, not 104. Alice's and Charlie's records should remain unchanged.

Calling:
addBonusPoints(students, 101, 5);


should change Alice's score from 82 to 87.
Requirements
1. Use an arrow function with an implicit return.
2. Use .map() and a ternary expression.
3. Update only the student whose id matches targetId.
4. Use two object spreads: one for the student and one for grades.
5. Add bonus to the existing grades.score.
6. Use Math.min() to ensure the result never exceeds 100.
7. Preserve all other properties, including unexpected ones.
8. Do not mutate the original array or its objects.
9. Preserve the original object references for nonmatching students.
10. If no ID matches, return a new array containing the original objects.
Assume IDs are unique, every student has a grades object, scores are between 0 and 100, and bonus is nonnegative.