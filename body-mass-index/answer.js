BMI = (weight, height) => {
  const weightArr = weight.split(' ');
  const heightArr = height.split(' ');
  if (weightArr[1] === 'pounds')
    weightArr[0] = 0.453592 * weightArr[0];
  if (heightArr[1] === 'inches')
    heightArr[0] = 0.0254 * heightArr[0];
  let bmiDetails = (+weightArr[0] / (Math.pow(+heightArr[0], 2))).toFixed(1);
  if (bmiDetails < 18.5)
    return bmiDetails + ' Underweight';
  else if (bmiDetails <= 24.9)
    return bmiDetails + ' Normal Weight';
  else if (bmiDetails <= 29.9)
    return bmiDetails + ' Overweight';
  else  
    return bmiDetails + ' Obese';
}

const weight = "205 pounds";
const height = "73 inches";

document.getElementById('ans').textContent = BMI(weight, height);