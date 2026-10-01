Given a customer like:
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

Write:
const formatCustomer = customer => {
  // your solution
};

It should return:
Maria Lopez | maria@example.com | Chicago, IL | USA

Another valid input:
const customer = {
  name: "David Chen",
  contact: {
    email: "david@example.com",
    phone: "555-9876"
  },
  address: {
    city: "Toronto",
    state: "ON"
  }
};

should return:
David Chen | david@example.com | Toronto, ON | Unknown

Your requirements are: destructure name, destructure email directly from contact, destructure city, state, and country directly from address, and give country a default of "Unknown". You don't need phone, and don't modify the original object.
The main thing I want you practicing is this shape:
const {
  something,
  nestedObject: { somethingElse }
} = object;

Don't worry about making it clever or especially short. Get comfortable reading and writing the nested destructuring first.