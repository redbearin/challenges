Given:
const products = [
  {
    product_id: 101,
    name: "Keyboard",
    price: 49.99,
    category: "Electronics"
  },
  {
    product_id: 102,
    name: "Notebook",
    price: 4.5,
    inStock: true
  },
  {
    product_id: 103,
    name: "Monitor",
    price: 199,
    category: "Electronics",
    discount: 10
  }
];


Write:
const normalizeProducts = products => {
  // Your solution
};


Expected output:
[
  {
    id: 101,
    name: "Keyboard",
    price: 49.99,
    category: "Electronics"
  },
  {
    id: 102,
    name: "Notebook",
    price: 4.5,
    inStock: true
  },
  {
    id: 103,
    name: "Monitor",
    price: 199,
    category: "Electronics",
    discount: 10
  }
]


Requirements
1. Use .map() to create a new array.
2. Destructure directly in the .map() callback parameter.
3. Rename product_id to a local variable named productId.
4. Use object rest syntax to collect all other properties.
5. Return a new object with an id property containing productId, followed by all remaining properties.
6. The returned objects must not contain product_id.
7. Preserve all additional properties, their values, and the original product order.
8. Don't mutate the input array or its objects.
You can assume every product has a product_id and that none of the input objects already has an id property.