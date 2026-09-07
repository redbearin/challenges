removeElement = (nums, val) => {
  const filtarr = nums.filter(ele => ele !== val);
  return [JSON.stringify(filtarr), filtarr.length];
}

const nums = [0,1,2,2,3,0,4,2];
const val = 2;

document.getElementById('ans').textContent = removeElement(nums, val);