import { books } from "../data/bookData.js";
import BookList from "../components/BookList.jsx";

function Strategy() {
  return (
    <>
      <main>
        <h1>Chess Strategy</h1>
        <div id="strategy-books">
          <BookList
            books={books.filter((book) => book.category === "strategy")}
          />
        </div>
      </main>
    </>
  );
}

export default Strategy;
