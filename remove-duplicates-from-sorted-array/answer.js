removeDuplicates = nums => {
  const woDups = [...new Set(nums)];
  return JSON.stringify([...woDups, ...(Array(nums.length - woDups.length).fill('_'))]);
}
const nums = [0,0,1,1,1,2,2,3,3,4];

document.getElementById('ans').textContent = removeDuplicates(nums);
