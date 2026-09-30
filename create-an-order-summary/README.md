Write a function that receives one order object:
const order = {
  customer: "Maria",
  item: "Laptop Stand",
  price: 45,
  quantity: 2
};

Your function:
const summarizeOrder = order => {
  // Destructure `order` in here

  // Your remaining code
};

should return:
"Maria ordered 2 Laptop Stand(s) for $90.00"

Another example:
summarizeOrder({
  customer: "David",
  item: "Keyboard",
  price: 50
});

// "David ordered 1 Keyboard(s) for $50.00"

The requirements are:
- Destructure order inside the function body.
- Extract customer, item, price, and quantity.
- Give quantity a default value of 1.
- Calculate the total from price * quantity.
- Format the total to exactly two decimal places.
- Don't modify order.
The main syntax I'm looking for this time is:
const summarizeOrder = order => {
  const { /* ... */ } = order;

  // ...
};

No tricks. The goal is repetition until destructuring starts feeling ordinary rather than special.