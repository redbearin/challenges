You have a queue of jobs:
const jobs = [
  { id: 101, task: "Send email" },
  { id: 102, task: "Generate report" },
  { id: 103, task: "Backup files" }
];

Write:
const processQueue = jobs => {
  // your solution
};

It should return:
{
  currentJob: { id: 101, task: "Send email" },
  pendingJobs: [
    { id: 102, task: "Generate report" },
    { id: 103, task: "Backup files" }
  ]
}

For:
processQueue([
  { id: 201, task: "Update database" }
]);

it should return:
{
  currentJob: { id: 201, task: "Update database" },
  pendingJobs: []
}

The requirements are specific: use array destructuring inside the function body, destructure the first object into a variable named currentJob, collect the remaining objects into pendingJobs using rest syntax, return an object containing those two variables, don't use slice() or array indexing, and don't modify the input array or its objects.
You can assume jobs always contains at least one job object.