const updateInventory = (inventory, updates) => {
  const inventoryMap = new Map(
    inventory.map(item => [item.id, {... item}]));
  for (const item of updates) {
    if (!inventoryMap.has(item.id)) {
      inventoryMap.set(item.id, {...item});
    }
    else {
      const currentQty = inventoryMap.get(item.id).quantity;
      const originalUser = inventoryMap.get(item.id);      
      const updatedUser = {...originalUser, quantity: item.quantity + currentQty};
      inventoryMap.set(item.id, updatedUser);
    }
  }
  return JSON.stringify([...inventoryMap.values()]);
};

const inventory = [
  { id: 1, name: "Keyboard", quantity: 5 },
  { id: 2, name: "Mouse", quantity: 8 },
  { id: 3, name: "Monitor", quantity: 4 }
];
const updates = [
  { id: 2, quantity: 3 },
  { id: 3, quantity: -2 },
  { id: 4, name: "Webcam", quantity: 6 }
];

document.getElementById('ans').textContent = updateInventory(inventory, updates);