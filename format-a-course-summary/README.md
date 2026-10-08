Given:
const course = {
  title: "Modern JavaScript",
  instructor: {
    first_name: "Sarah",
    last_name: "Johnson"
  },
  schedule: ["Monday", "Wednesday", "Friday"],
  duration: 8
};


Write:
const formatCourse = course => {
  // Your solution
};


It should return:
Modern JavaScript | Sarah Johnson | Monday & Wednesday | 8 weeks


Another example:
formatCourse({
  title: "Web Development",
  instructor: {
    first_name: "David",
    last_name: "Chen"
  },
  schedule: ["Tuesday", "Thursday", "Saturday"]
});


Expected result:
Web Development | David Chen | Tuesday & Thursday | 4 weeks


Requirements
1. Destructure everything inside the function body.
2. Extract title directly.
3. Extract first_name and last_name from instructor, renaming them to firstName and lastName.
4. Extract the first two elements of schedule into firstDay and secondDay.
5. Give duration a default value of 4.
6. Return the formatted string exactly as shown.
7. Don't use array indexing or modify the input.
You can assume instructor always exists, schedule always contains exactly three strings, and title is always present.
A small readability goal: Try formatting your destructuring declaration across multiple lines, with nested properties indented. This is the kind of code someone else should be able to understand at a glance.