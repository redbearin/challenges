timeToFinish = (ideal, current) => {
  const idealClean = ideal.replace(/( )/g, '');
  const currentClean = current.replace(/( )/g, '');
  return (idealClean.length - currentClean.length) *.5
 }

const ideal =  "And so brings my conclusion to its conclusion."
const current = "And so brings my conclusion to";

document.getElementById('ans').textContent = timeToFinish(
 ideal, current
);