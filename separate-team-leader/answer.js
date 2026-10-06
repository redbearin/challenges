const separateTeam = team => {
  const [first, ...remaining] = team;
  return JSON.stringify({
    leader: first,
    members: remaining
  });
};

const team = ["Maria", "David", "Sarah", "James"];

document.getElementById('ans').textContent = 
separateTeam(team);