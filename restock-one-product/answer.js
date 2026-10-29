restockProduct = (products, targetId, amount) => 
  products.map((product) =>
    product.id === targetId ?
    {
      ...product,
      inventory: {
        ...product.inventory,
        quantity: product.inventory.quantity + amount 
      }
    } : 
    product
  );

const products = [
  {
    id: 101,
    name: "Keyboard",
    inventory: {
      quantity: 10,
      warehouse: "Chicago",
      reorderLevel: 5
    }
  },
  {
    id: 102,
    name: "Mouse",
    price: 24.99,
    inventory: {
      quantity: 15,
      warehouse: "Denver",
      reserved: 3
    }
  },
  {
    id: 103,
    name: "Monitor",
    inventory: {
      quantity: 8,
      warehouse: "Seattle"
    }
  }
];

const targetId = 102;

const amount = 7;

document.getElementById('ans').textContent = JSON.stringify(restockProduct(products, targetId, amount));