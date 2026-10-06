Given:
const team = ["Maria", "David", "Sarah", "James"];

Write:
const separateTeam = team => {
  // your solution
};

It should return:
{
  leader: "Maria",
  members: ["David", "Sarah", "James"]
}

Another example:
separateTeam(["Alex", "Jordan"]);

should return:
{
  leader: "Alex",
  members: ["Jordan"]
}

Requirements: use array destructuring inside the function body, destructure the first element into a variable named leader, use rest syntax to collect all remaining elements into a variable named members, return an object containing leader and members, don't use slice() or array indexing, and don't modify the original array.
You can assume the array always contains at least one string.
The main pattern you're practicing is simply:
const [first, ...rest] = array;

Your turn. 🙂