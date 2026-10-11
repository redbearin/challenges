const formatProducts = products => 
  JSON.stringify(products.map(({ name, category = "Uncategorized", price, stock: {available} }) => {
    const stockMessage = available === 0 ?
                        "Out of stock": 
                        available + " in stock";
    return `${name} | ${category} | $${price.toFixed(2)} | ${stockMessage}`;
  }));

const products = [
  {
    name: "Keyboard",
    price: 49.99,
    stock: {
      available: 12,
      warehouse: "Chicago"
    },
    category: "Electronics"
  },
  {
    name: "Notebook",
    price: 4.5,
    stock: {
      available: 30,
      warehouse: "Denver"
    }
  },
  {
    name: "Monitor",
    price: 199,
    stock: {
      available: 0,
      warehouse: "Seattle"
    },
    category: "Electronics"
  }
];

document.getElementById('ans').textContent = formatProducts(products);