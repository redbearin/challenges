const formatBadge = ({name, department = "General", location: {city, state}, level = "Junior"}) => `${name} | ${department} | ${city}, ${state} | ${level}`;

const employee = {
  name: "Maria Lopez",
  department: "Engineering",
  location: {
    city: "Chicago",
    state: "IL"
  },
  level: "Senior"
};

document.getElementById('ans').textContent = formatBadge(employee);
