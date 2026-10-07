Given:
const trip = {
  traveler: "Maria",
  route: ["Chicago", "Denver", "Seattle"],
  days: 5
};

Write:
const formatTrip = trip => {
  // your solution
};

It should return:
Maria: Chicago → Seattle (5 days)

Another example:
formatTrip({
  traveler: "David",
  route: ["Boston", "New York", "Miami"],
  days: 7
});

should return:
David: Boston → Miami (7 days)

Your requirements are: destructure everything inside the function body; destructure traveler and days from the object; destructure the first and third elements of route into variables named origin and destination; skip the middle element using the array-destructuring syntax you've already learned; don't use array indexing; and don't modify the input.
You can assume route always contains exactly three strings.