constructFence = costPost => {
  return 'H'.repeat(1000000/+costPost.replace(/([,$])/g,""));
}

const costPost = "$50,000";

document.getElementById('ans').textContent = constructFence(costPost);