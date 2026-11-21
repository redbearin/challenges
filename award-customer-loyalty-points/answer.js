const awardLoyaltyPoints = (customers, targetId, points) =>
  customers.map(customer => {
    if (
      customer.id !== targetId ||
      !customer.loyalty.active ||
      points === 0 ||
      customer.loyalty.maximum === customer.loyalty.points
    ) {
      return customer;
    }

    const newPoints = Math.min(
      customer.loyalty.maximum,
      points + customer.loyalty.points
    );

    return {
      ...customer,
      loyalty: {
        ...customer.loyalty,
        points: newPoints
      }
    };
  });

const customers = [
  {
    id: 101,
    name: "Alice",
    loyalty: {
      points: 120,
      maximum: 200,
      active: true,
      tier: "Silver"
    }
  },
  {
    id: 102,
    name: "Bob",
    loyalty: {
      points: 80,
      maximum: 150,
      active: false,
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
      points: 200,
      maximum: 200,
      active: true,
      tier: "Gold"
    }
  }
];

const targetId = 101;

const points = 30;

document.getElementById('ans').textContent = JSON.stringify(awardLoyaltyPoints(customers, targetId, points));