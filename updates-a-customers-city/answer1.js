updateCustomerCity = (customer, newCity) => ({
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

console.log(updateCustomerCity(customer, newCity));