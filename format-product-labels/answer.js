const formatProducts = products => products.map(({name, price, category = "Uncategorized"}) => `${name} - ${category} - $${price.toFixed(2)}`);

const products = [
  { name: "Keyboard", price: 49.99, category: "Electronics" },
  { name: "Coffee", price: 12.5 },
  { name: "Notebook", price: 4, category: "Office" }
];

document.getElementById('ans').textContent = formatProducts(products);