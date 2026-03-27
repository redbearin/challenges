mathematicalExp = (eqn, nums) => {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    switch(eqn[eqn.length - 2]) {
      case '/':
        ans.push('f(' + nums[i] + ')=' + nums[i] / +eqn[eqn.length - 1]);
        break;
      case '^':
        ans.push('f(' + nums[i] + ')=' + nums[i] ** +eqn[eqn.length - 1]);
        break;
      case '*':
        ans.push('f(' + nums[i] + ')=' + nums[i] * +eqn[eqn.length - 1]);
        break;
      case '+':  
        ans.push('f(' + nums[i] + ')=' + (nums[i] + +eqn[eqn.length - 1]));
        break;
      case '-':
        ans.push('f(' + nums[i] + ')=' + (nums[i] - +eqn[eqn.length - 1]));
        break;
    }
  }
  return JSON.stringify(ans);
}

const eqn = "f(x)=x-2";
const nums = [1,2,3];

document.getElementById('ans').textContent = mathematicalExp(eqn, nums);

"f(1)=2","f(2)=3"