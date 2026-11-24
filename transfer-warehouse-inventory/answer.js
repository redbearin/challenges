const transferInventory = (warehouses, fromId, toId, quantity) => {
  if (quantity <= 0 ||
      fromId === toId) {
    return [...warehouses];
  }

  const fromIdx = warehouses.findIndex(warehouse => warehouse.id === fromId);
  const toIdx = warehouses.findIndex(warehouse => warehouse.id === toId);

  if (fromIdx === -1 ||
      toIdx === -1 ||
      !warehouses[fromIdx].inventory.active ||
      !warehouses[toIdx].inventory.active ||
      warehouses[fromIdx].inventory.quantity - warehouses[fromIdx].inventory.reserved - quantity < 0 ||
      warehouses[toIdx].inventory.quantity + quantity > warehouses[toIdx].inventory.capacity
    ) {
    return [...warehouses];
  }

  const updatedWarehouses = [...warehouses];

  updatedWarehouses[fromIdx] = {
    ...warehouses[fromIdx],
    inventory: {
      ...warehouses[fromIdx].inventory,
      quantity: warehouses[fromIdx].inventory.quantity - quantity
    }
  };

  updatedWarehouses[toIdx] = {
    ...warehouses[toIdx],
    inventory: {
      ...warehouses[toIdx].inventory,
      quantity: warehouses[toIdx].inventory.quantity + quantity
    }
  };

  return updatedWarehouses;
};

const warehouses = [
  {
    id: 101,
    name: "North",
    inventory: {
      quantity: 120,
      capacity: 200,
      active: true,
      reserved: 30
    }
  },
  {
    id: 102,
    name: "South",
    inventory: {
      quantity: 60,
      capacity: 150,
      active: true,
      reserved: 10
    }
  },
  {
    id: 103,
    name: "East",
    region: "Central",
    inventory: {
      quantity: 180,
      capacity: 200,
      active: true,
      reserved: 40
    }
  },
  {
    id: 104,
    name: "West",
    inventory: {
      quantity: 50,
      capacity: 100,
      active: false,
      reserved: 0
    }
  }
];

const fromId = 101;
const toId = 102;
const quantity = 40;

document.getElementById('ans').textContent = JSON.stringify(transferInventory(warehouses, fromId, toId, quantity));