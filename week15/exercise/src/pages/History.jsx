import { books } from "../data/bookData.js";
import BookList from "../components/BookList.jsx";

function History() {
  return (
    <>
      <main>
        <h1>Chess History</h1>
        <div id="history-books">
          <BookList
            books={books.filter((book) => book.category === "history")}
          />
        </div>
      </main>
    </>
  );
}

export default History;
