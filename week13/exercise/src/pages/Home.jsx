import NavBar from "../components/NavBar.jsx";
import { books } from "../data/bookData.js";
import BookList from "../components/BookList.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      {/* Page heading */}
      <h1>Chess Books</h1>
      <NavBar />
      <main>
        <div id="fiction-books">
          <h2>Fiction</h2>
          <BookList
            books={books.filter((book) => book.category === "fiction")}
          />
        </div>
        <div id="strategy-books">
          <h2>Strategy</h2>
          <BookList
            books={books.filter((book) => book.category === "strategy")}
          />
        </div>
        <div id="history-books">
          <h2>History</h2>
          <BookList
            books={books.filter((book) => book.category === "history")}
          />
        </div>
      </main>
      {/* Render the footer with copyright information */}
      <Footer />
    </>
  );
}

export default Home;
