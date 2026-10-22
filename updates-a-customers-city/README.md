Write a function named updateCustomerCity that takes two arguments:
- customer: a customer object
- newCity: the new city name
It should return a new customer object with the updated city inside address.
Input
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


Calling:
updateCustomerCity(customer, "Seattle");


should produce:
{
  id: 201,
  name: "Maria",
  active: true,
  address: {
    street: "123 Main St",
    city: "Seattle",
    state: "Illinois",
    zip: "60601"
  }
}


Requirements
1. Use object spread syntax to create a new customer object.
2. Use a second object spread to create a new address object.
3. Update only address.city using newCity.
4. Preserve all other customer and address properties.
5. Do not mutate the original customer or its address.
6. Return a new customer object and a new address object.
You can assume that customer.address always exists.