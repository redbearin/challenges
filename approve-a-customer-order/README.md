You are developing an order-processing system. An order can only be approved if every item in the order meets certain requirements.

Write the following function:
const approveOrder = (orders, targetId) => {
  // Your solution
};

Starting data
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

Data definitions
I've included explicit definitions for every property relevant to the business rules.
Property	Meaning
id	Unique identifier for an order.
status	Current order status: "pending", "approved", or "cancelled".
items	Array of products requested in the order.
quantity	Number of units requested for that product.
available	Number of units currently available to fulfill that request.
active	Whether the product is eligible to be sold.
priority	Optional order information that does not affect approval.

Assume that quantities are positive integers, available inventory is a nonnegative integer, and every order has an items array.
Business rules
An order can be approved only when:
1. The order exists.
2. Its current status is "pending".
3. Its items array contains at least one item.
4. Every item is active.
5. Every item's requested quantity is less than or equal to its available quantity.
If all conditions are satisfied, change the order's status to "approved".

Approval does not deduct inventory. Do not change any item properties, quantities, or available inventory. Only the order's status changes.
Expected behavior
Target ID	Expected result
101	Approved
102	Rejected — insufficient inventory
103	Rejected — inactive product
104	Unchanged — already approved
105	Rejected — empty order
106	Approved — exact inventory available
999	Unchanged — order not found

Implementation requirements
- Use .findIndex() to locate the order.
- Use either .some() or .every() to validate its items.
- Use guard clauses to avoid unnecessary processing.
- Always return a new array, even when approval is unsuccessful.
- Create a new order object only when approval succeeds.
- Preserve all unrelated properties and unchanged object references.
- Preserve the original items array reference, even when approval succeeds.
- Do not mutate the original data.
Since we're replacing only one element this time, .with() is an appropriate option. However, you're free to choose your preferred array replacement technique.

I'm deliberately leaving the number and arrangement of guard clauses up to you.


