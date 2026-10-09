Given:
const employee = {
  name: "Maria Lopez",
  department: "Engineering",
  location: {
    city: "Chicago",
    state: "IL"
  },
  level: "Senior"
};

Write a function:
const formatBadge = (/* destructure here */) => {
  // your solution
};

Expected output:
Maria Lopez | Engineering | Chicago, IL | Senior

It should also handle:
formatBadge({
  name: "David Chen",
  location: {
    city: "Boston",
    state: "MA"
  }
});

Expected output:
David Chen | General | Boston, MA | Junior

Requirements
- Destructure directly in the function parameter list, not inside the function body.
- Extract name.
- Give department a default of "General".
- Extract city and state from the nested location object.
- Give level a default of "Junior".
- Return the formatted string exactly as shown.
- Don't modify the input object.
You can assume name and location always exist, and location always contains both city and state. Missing department and level values will be undefined, not null.