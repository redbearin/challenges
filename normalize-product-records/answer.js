const normalizeProducts = products => JSON.stringify(products.map(({ product_id: id, ...rest }) => ({ id, ...rest })));

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

document.getElementById('ans').textContent = normalizeProducts(products);