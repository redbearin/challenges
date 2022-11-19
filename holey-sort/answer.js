holeySort = nums => {
  // how many holes each number has
  holes = {0: 1, 1: 0, 2: 0, 3: 0, 4: 1, 5: 0, 6: 1, 7: 0, 8: 2, 9: 1};
  let strNum, holeTtl;
  const numsWDetails = [];
  // go number by number and count total numbers holes
  for (let i = 0; i < nums.length; i++) {
    strNum = nums[i].toString();
    holeTtl = 0;
    for (let j = 0; j < strNum.length; j++) {
      holeTtl += holes[strNum[j]];
    }
    // number number holes and num to an array
    numsWDetails.push([holeTtl, nums[i]]);
  }
  // sort the array that has info on num and number of holes
  numsWDetails.sort((a,b) => a[0]-b[0]);
  // remove the hole count
  for (let i = 0; i < numsWDetails.length; i++) {
    numsWDetails[i] = numsWDetails[i][1];
  }
  return JSON.stringify(numsWDetails);
}

const nums = [8, 121, 41, 66];

document.getElementById('ans').textContent = holeySort(nums); 