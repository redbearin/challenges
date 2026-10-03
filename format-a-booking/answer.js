const formatBooking = booking => {
  const {guest: {first_name: firstName, last_name: lastName}, hotel: {name: hotelName, city = "Unknown"}, nights = 1} = booking;
  return `${firstName} ${lastName} | ${hotelName}, ${city} | ${nights} night(s)`;
};

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

document.getElementById('ans').textContent = formatBooking(booking);
