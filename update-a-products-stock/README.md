Write a function called updateProductStock that takes two arguments:
- product: a product object
- newQuantity: the new quantity available
Return a new product object with inventory.quantity updated to newQuantity.
Input
const product = {
  id: 301,
  name: "Wireless Mouse",
  price: 29.99,
  inventory: {
    quantity: 15,
    warehouse: "Chicago",
    reorderLevel: 5
  }
};


Calling:
updateProductStock(product, 40);


should return:
{
  id: 301,
  name: "Wireless Mouse",
  price: 29.99,
  inventory: {
    quantity: 40,
    warehouse: "Chicago",
    reorderLevel: 5
  }
}


Requirements
1. Use an arrow function with an implicit return.
2. Use object spread to create a new outer product object.
3. Use a second object spread to create a new inventory object.
4. Update only inventory.quantity.
5. Preserve all other properties, including unexpected additional properties.
6. Do not mutate the original product or its inventory.
7. Return new objects at both levels.
You can assume product.inventory always exists.