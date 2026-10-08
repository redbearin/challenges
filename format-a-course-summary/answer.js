const formatCourse = course => {
  const {
    title, 
    instructor: {first_name: firstName, last_name: lastName}, 
    schedule: [firstDay, secondDay], 
    duration = 4
  } = course;
  return `${title} | ${firstName} ${lastName} | ${firstDay} & ${secondDay} | ${duration} weeks`;
};

const course = {
  title: "Modern JavaScript",
  instructor: {
    first_name: "Sarah",
    last_name: "Johnson"
  },
  schedule: ["Monday", "Wednesday", "Friday"],
  duration: 8
};

document.getElementById('ans').textContent = formatCourse(course);
