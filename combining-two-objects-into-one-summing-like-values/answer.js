combine = (user1, user2) => {
  for (let key in user1) {
    if (user2[key]) {
      user1[key] += user2[key];
    }
  }
  for (let key in user2) {
    if (!user1[key]) {
      user1[key] = user2[key];
    }
  }
  const arr = (Object.entries(user1).sort((a,b)=> a[1] - b[1]))
  return JSON.stringify(Object.fromEntries(arr));
}

const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
} 

document.getElementById('ans').textContent = combine(user1, user2);