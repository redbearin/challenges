Write a function called updateBookRating that takes two arguments:
- book: a book object
- newRating: the new rating value
Return a new book object with reviews.rating updated to newRating.
Input
const book = {
  id: 401,
  title: "The Silent Forest",
  author: "Emma Wilson",
  reviews: {
    rating: 4.2,
    count: 125,
    featured: true
  }
};


Calling:
updateBookRating(book, 4.8);


should return:
{
  id: 401,
  title: "The Silent Forest",
  author: "Emma Wilson",
  reviews: {
    rating: 4.8,
    count: 125,
    featured: true
  }
}


Requirements
1. Use an arrow function with an implicit return.
2. Use object spread to create a new outer book object.
3. Use a second object spread to create a new reviews object.
4. Update only reviews.rating.
5. Preserve all other properties, including unexpected additional properties.
6. Do not mutate the original book or its reviews.
7. Return new objects at both levels.
You can assume book.reviews always exists.