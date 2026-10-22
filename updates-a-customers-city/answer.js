updateCustomerCity = (customer, newCity) => JSON.stringify({
  ...customer,
  address: {
    ...customer.address,
    city: newCity
  }
});

const customer = {
  id: 201,
  name: "Maria",
  active: true,
  address: {
    street: "123 Main St",
    city: "Chicago",
    state: "Illinois",
    zip: "60601"
  }
};

const newCity = "Seattle";

document.getElementById(ans).textContent = updateCustomerCity(customer, newCity);
