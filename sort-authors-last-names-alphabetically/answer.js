sortByLastName = books => {
  for (let i = 0; i < books.length; i++) {
    books[i].author = books[i].author.split(' ');
  }
  
  books.sort((a, b) => {
    if (a.author[1] > b.author[1]) return 1;
    if (a.author[1] < b.author[1]) return -1;
    return 0;
  });

  for (let i = 0; i < books.length; i++) {
    books[i].author = books[i].author.join(' ');
  }

  return JSON.stringify(books);
}

const books = [
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
];

document.getElementById('ans').textContent = sortByLastName(books);