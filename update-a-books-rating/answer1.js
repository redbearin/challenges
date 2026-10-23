const updateBookRating = (book, newRating) => ({
  ...book,
  reviews: {
    ...book.reviews,
    rating: newRating
  }
});

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

const newRating = 4.8;

console.log(updateBookRating(book, newRating));

const assert = require("assert").strict;

const original = JSON.parse(JSON.stringify(book));

const result = updateBookRating(book, 4.8);

assert.deepStrictEqual(result, {
  id: 401,
  title: "The Silent Forest",
  author: "Emma Wilson",
  reviews: {
    rating: 4.8,
    count: 125,
    featured: true
  }
});

console.log("Rating update test passed!");

// Check that the original data is unchanged
assert.deepStrictEqual(book, original);
console.log("Immutability test passed!");

// Check that both objects are new references
assert.notStrictEqual(result, book);
assert.notStrictEqual(result.reviews, book.reviews);
console.log("New object references test passed!");
