Given an array of users:

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
  { id: 3, name: "Charlie" },
  { id: 2, name: "Bob" },
  { id: 4, name: "Diana" }
];

Write:

const removeDuplicates = users => {
  // your solution
};

Return an array containing each user only once, where id determines whether two users are duplicates. Keep the first occurrence.

Expected result:

[
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" }
]

There are several perfectly valid ways to solve this. Some are short but inefficient, some are efficient but unnecessarily verbose, and there's a nice sweet spot between the two.

For this one, optimize for clarity + time complexity + conciseness, in that order.

Send me whatever solution you'd actually write in a real codebase, and I'll critique it on those three dimensions rather than just whether it works.