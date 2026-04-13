import "./css/app.css";
import BookCard from "./components/BookCard.jsx";
import { books } from "./data/bookData.js";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      {/* Page heading */}
      <h1>Chess Books</h1>
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
      {/* Render the footer with copyright information */}

      <Footer />
    </div>
  );
}

// Export the App component as the default component of this file
// This allows other files to import App without needing to specify its name
export default App;
