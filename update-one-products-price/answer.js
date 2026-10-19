const updateProductPrice = (products, targetId, newPrice) => 
  JSON.stringify(
    products.map(product => 
      product.id === targetId ?
      {...product, price: newPrice} :
      product
    )
  );

const products = [
  {
    id: 101,
    name: "Keyboard",
    price: 49.99,
    category: "Electronics"
  },
  {
    id: 102,
    name: "Mouse",
    price: 24.99,
    inStock: true
  },
  {
    id: 103,
    name: "Monitor",
    price: 199.99,
    discount: 10
  }
];

const targetId = 102;
const newPrice = 19.99;

document.getElementById('ans').textContent = updateProductPrice(products, targetId, newPrice);