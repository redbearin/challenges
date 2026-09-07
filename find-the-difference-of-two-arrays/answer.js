findDifference = (nums1, nums2) => {
  const uniqueNums1 = [...new Set(nums1)].sort();
  const uniqueNums2 = [...new Set(nums2)].sort();
  const nums1NotInNums2 = [];
  const nums2NotInNums1 = [];
  // go number by number thru unique numbers in first array
  for (let i = 0; i < uniqueNums1.length; i++) {
    if (uniqueNums2.includes(uniqueNums1[i])) 
      continue;
    // second array does not include the number
    else
      nums1NotInNums2.push(uniqueNums1[i])
  }
  // go number by number thru unique numbers in second array
  for (let i = 0; i < uniqueNums2.length; i++) {
    if (uniqueNums1.includes(uniqueNums2[i])) 
      continue;
    // first array does not include the number
    else
      nums2NotInNums1.push(uniqueNums2[i])
  }
  return JSON.stringify([nums1NotInNums2, nums2NotInNums1]);
}
const nums1 = [1,2,3];
const nums2 = [2,4,6];

document.getElementById('ans').textContent = findDifference(nums1, nums2);