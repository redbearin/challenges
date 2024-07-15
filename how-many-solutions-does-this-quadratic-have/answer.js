solutions = (a, b, c) => {
  if (b**2 - 4*a*c === 0) {
    return 1;
  }
  if (b**2 - 4*a*c > 0) {
    return 2;
  }
  return 0;
}

//3x^2 - 11x - 4 = 0
//(3x + 1)(x - 4)

const a = 1;
const b = 0;
const c = -1;

document.getElementById('ans').textContent = solutions(a, b, c);

//Test.assertEquals(solutions(1, 0, -1), 2)
//Test.assertEquals(solutions(1, 0, 0), 1)
//Test.assertEquals(solutions(1, 0, 1), 0)
//Test.assertEquals(solutions(200, 420, 800), 0)
//Test.assertEquals(solutions(200, 420, -800), 2)
//Test.assertEquals(solutions(1000, 1000, 0), 2)
//Test.assertEquals(solutions(10000, 400, 4), 1)