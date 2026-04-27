import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <div>
      <ul className="books-grid">
        {/* Render the BookCard component and pass title, author, and description as props */}
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            coverImage={book.coverImage}
            description={book.description}
            projectGutenbergLink={book.projectGutenbergLink}
          />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
