const sellProduct = (products, targetId, amount) => 
  products.map((product) =>
    product.id === targetId ?
    {
      ...product,
      inventory: {
        ...product.inventory,
        quantity: Math.max(0, product.inventory.quantity - amount)
      } 
    } :
    product
  );

const products = [
  {
    id: 101,
    name: "Keyboard",
    inventory: {
      quantity: 12,
      warehouse: "Chicago",
      reorderLevel: 5
    }
  },
  {
    id: 102,
    name: "Mouse",
    price: 24.99,
    inventory: {
      quantity: 8,
      warehouse: "Denver",
      reserved: 2
    }
  },
  {
    id: 103,
    name: "Monitor",
    inventory: {
      quantity: 3,
      warehouse: "Seattle"
    }
  }
];

const targetId = 103;

const amount = 10;

document.getElementById('ans').textContent = JSON.stringify(sellProduct(products, targetId, amount));