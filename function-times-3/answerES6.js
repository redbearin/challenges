product = (first1, first2) => (second1, second2) => (third1, third2) => first1 * second1 * third1 + first2 * second2 * third2;

document.getElementById('ans').textContent = product(1,2)(2,3)(3,4);
