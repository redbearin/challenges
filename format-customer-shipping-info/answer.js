const formatCustomer = customer => {
  const {
    name,
    contact: {email},
    address: {city, state, country = "Unknown"}
  } = customer;
  return `${name} | ${email} | ${city}, ${state} | ${country}`;
};

const customer = {
  name: "Maria Lopez",
  contact: {
    email: "maria@example.com",
    phone: "555-1234"
  },
  address: {
    city: "Chicago",
    state: "IL",
    country: "USA"
  }
};

document.getElementById('ans').textContent = formatCustomer(customer);