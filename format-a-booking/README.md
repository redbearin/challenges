Given:
const booking = {
  guest: {
    first_name: "Maria",
    last_name: "Lopez"
  },
  hotel: {
    name: "Grand Hotel",
    city: "Miami"
  },
  nights: 3
};

Write:
const formatBooking = booking => {
  // destructure here
};

It should return:
Maria Lopez | Grand Hotel, Miami | 3 night(s)

It should also handle:
const booking = {
  guest: {
    first_name: "David",
    last_name: "Chen"
  },
  hotel: {
    name: "Lake Inn"
  }
};

and return:
David Chen | Lake Inn, Unknown | 1 night(s)

Your requirements are:
- Destructure everything inside the function body.
- Rename first_name → firstName.
- Rename last_name → lastName.
- Destructure name from hotel, but rename it → hotelName.
- Give city a default of "Unknown".
- Give nights a default of 1.
- Don't modify the original object.

So you'll need all three patterns somewhere:
property
property: newName
property = defaultValue