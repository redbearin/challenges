const processQueue = jobs => {
  const [currentJob, ...pendingJobs] = jobs;
  return JSON.stringify({currentJob, pendingJobs});
};

const jobs = [
  { id: 101, task: "Send email" },
  { id: 102, task: "Generate report" },
  { id: 103, task: "Backup files" }
];

document.getElementById('ans').textContent = processQueue(jobs);