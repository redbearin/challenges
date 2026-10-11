Given:
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


Write:
const formatOrders = orders => {
  // Your solution
};


Your function should return:
[
  "Order #101 | Maria Lopez | $49.50 | Shipped",
  "Order #102 | David Chen | $125.00 | Pending",
  "Order #103 | Sarah Jones | $0.00 | Cancelled"
]


Requirements
1. Use .map() to create an array of formatted strings.
2. Destructure directly in the .map() callback parameter.
3. Rename order_id to orderId.
4. Extract first_name and last_name from customer, renaming them to firstName and lastName.
5. Extract total and format it using .toFixed(2).
6. Give status a default value of "Pending".
7. Preserve the original order of the orders.
8. Don't mutate the input array or its objects.
You can assume every order has a valid order_id, customer, and numeric total. Only status may be missing.