const transferLoyaltyPoints = (customers, fromId, toId, amount) => {
  if (amount <= 0 ||
      fromId === toId) {
    return [...customers];
  }
  const custDec = customers.find(customer => customer.id === fromId);
  const custInc = customers.find(customer => customer.id === toId);
  if (custDec === undefined ||
      custInc === undefined ||
      custDec.loyalty.points < amount || 
      custInc.loyalty.points + amount > custInc.loyalty.maximum ||
      !custDec.loyalty.active ||
      !custInc.loyalty.active) {
    return [...customers];
  }
  return customers.map(customer => {
    if (customer.id === fromId) {
      return {
        ...customer,
        loyalty: {
          ...customer.loyalty,
          points: customer.loyalty.points - amount
        }
      };
    }
    if (customer.id === toId) {
      return {
        ...customer,
        loyalty: {
          ...customer.loyalty,
          points: customer.loyalty.points + amount
        }
      };
    }
    return customer;
  });
};

const customers = [
  {
    id: 101,
    name: "Alice",
    loyalty: {
      points: 150,
      maximum: 300,
      active: true,
      tier: "Silver"
    }
  },
  {
    id: 102,
    name: "Bob",
    loyalty: {
      points: 80,
      maximum: 200,
      active: true,
      tier: "Bronze"
    }
  },
  {
    id: 103,
    name: "Charlie",
    email: "charlie@example.com",
    loyalty: {
      points: 190,
      maximum: 200,
      active: true,
      tier: "Gold"
    }
  },
  {
    id: 104,
    name: "Diana",
    loyalty: {
      points: 50,
      maximum: 150,
      active: false,
      tier: "Silver"
    }
  }
];

const fromId = 102;
const toId = 103;
const amount = 5;

document.getElementById('ans').textContent = JSON.stringify(transferLoyaltyPoints(customers, fromId, toId, amount));