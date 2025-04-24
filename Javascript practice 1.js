const books = [
  {title: "To Kill A Mockingbird",
  authorName: "Harper Lee",
  releaseYear: 1960},

  {title: "1984",
  authorName: "George Orwell",
  releaseYear: 1949},

  {title: "The Midnight Library",
  authorName: "Matt Haig",
  releaseYear: 2020}
];

function sortByYear(book1,book2) {
    if (book1.releaseYear<book2.releaseYear)
    {return -1;}
    else if (book1.releaseYear>book2.releaseYear)

    {return 1;}
    else {return 0;}

}

const filteredBooks = books.filter (book =>book.releaseYear<=1950);

filteredBooks.sort(sortByYear);
