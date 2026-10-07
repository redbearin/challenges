const formatTrip = trip => {
  const {
    traveler, 
    route: [origin, , destination], 
    days
  } = trip;

  return`${traveler}: ${origin} → ${destination} (${days} days)`;
};

const trip = {
  traveler: "Maria",
  route: ["Chicago", "Denver", "Seattle"],
  days: 5
};

document.getElementById('ans').textContent = formatTrip(trip);

