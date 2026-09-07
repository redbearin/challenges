function product (first1, first2) {
  return function (second1, second2) {
    return function (third1, third2) {
      return first1 * second1 * third1 + first2 * second2 * third2;
    }
  }
}

document.getElementById('ans').textContent = product(1,2)(0,3)(3,0);