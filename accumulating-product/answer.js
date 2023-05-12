const accumulatingProduct = nums => {
  // empty array
  if (!nums.length) 
    return JSON.stringify([]);
  // array has content
  // initialize products array with 
  // first number in nums array
  const products = [nums[0]];
  // go number through number through array
  // multiply prior number in products array
  // by the number in the nums array 
  // put that number into the products arrya
  for (let i = 1; i < nums.length; i++) {
    products.push(products[i - 1] * nums[i])
  }
  return JSON.stringify(products);
};

const nums = [];

document.getElementById('ans').textContent = accumulatingProduct(nums);