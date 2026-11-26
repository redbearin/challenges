const approveOrder = (orders, targetId) => {
  const idx = orders.findIndex(order => order.id === targetId);
  if (idx === -1) {
    return [...orders];
  }
  const order = orders[idx];
  if (order.status === 'pending' &&
      order.items.length > 0 &&
      order.items.every(item => 
        item.active === true &&
        item.available >= item.quantity)
      ) {
    return orders.with(idx, {
      ...order,
      status: 'approved'
    });
  }
  return [...orders];
};

const orders = [
  {
    id: 101,
    customer: "Alice",
    status: "pending",
    items: [
      {
        product: "Keyboard",
        quantity: 2,
        available: 10,
        active: true
      },
      {
        product: "Mouse",
        quantity: 3,
        available: 5,
        active: true
      }
    ]
  },
  {
    id: 102,
    customer: "Bob",
    status: "pending",
    items: [
      {
        product: "Monitor",
        quantity: 4,
        available: 2,
        active: true
      }
    ]
  },
  {
    id: 103,
    customer: "Charlie",
    status: "pending",
    items: [
      {
        product: "Printer",
        quantity: 1,
        available: 10,
        active: false
      }
    ]
  },
  {
    id: 104,
    customer: "Diana",
    status: "approved",
    items: [
      {
        product: "Laptop",
        quantity: 1,
        available: 5,
        active: true
      }
    ]
  },
  {
    id: 105,
    customer: "Edward",
    status: "pending",
    items: []
  },
  {
    id: 106,
    customer: "Frank",
    status: "pending",
    priority: true,
    items: [
      {
        product: "Speakers",
        quantity: 5,
        available: 5,
        active: true
      }
    ]
  }
];

const targetId = 101;

document.getElementById('ans').textContent = JSON.stringify(approveOrder(orders, targetId));
