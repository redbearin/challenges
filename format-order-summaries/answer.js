const formatOrders = orders => 
  JSON.stringify(orders.map(({order_id: orderId, customer: {first_name: firstName, last_name: lastName}, total, status = "Pending"}) => `Order #${orderId} | ${firstName} ${lastName} | $${total.toFixed(2)} | ${status}`));

const orders = [
  {
    order_id: 101,
    customer: {
      first_name: "Maria",
      last_name: "Lopez"
    },
    total: 49.5,
    status: "Shipped"
  },
  {
    order_id: 102,
    customer: {
      first_name: "David",
      last_name: "Chen"
    },
    total: 125
  },
  {
    order_id: 103,
    customer: {
      first_name: "Sarah",
      last_name: "Jones"
    },
    total: 0,
    status: "Cancelled"
  }
];

document.getElementById('ans').textContent = formatOrders(orders);
