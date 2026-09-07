freeShipping = cart => {
  let sum = 0;
  for (key in cart) {
    sum += cart[key];
  }
  if (sum > 50) {
    return true;
  }
  return false;
}

const cart = { "Shampoo": 5.99, "Rubber Ducks": 15.99 };

document.getElementById('ans').textContent = freeShipping(cart);