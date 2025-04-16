getVoteCount = votes => votes["upvotes"] - votes["downvotes"];

const votes = { upvotes: 13, downvotes: 0 };

document.getElementById('ans').textContent = getVoteCount(votes);