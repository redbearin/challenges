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

document.getElementById('ans').textContent = JSON.stringify(updateBookRating(book, newRating));
