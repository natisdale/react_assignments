import { books } from "../data/bookData.js";
import BookList from "../components/BookList.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      {/* Page heading */}
      <h1>Chess Books</h1>
      <main>
        <h2 className="strategy-books">Strategy Books</h2>
        <BookList
          books={books.filter((book) => book.category === "strategy")}
        />
        <h2 className="history-books">History Books</h2>
        <BookList books={books.filter((book) => book.category === "history")} />
      </main>
      {/* Render the footer with copyright information */}
      <Footer />
    </>
  );
}

export default Home;
