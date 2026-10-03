const formatPodium = results => {
  const [first = "No finisher", second = "No finisher", third = "No finisher"] = results;
  return `1st: ${first} | 2nd: ${second} | 3rd: ${third}`;
};

const results = ["Maria"];

document.getElementById('ans').textContent = formatPodium(results);