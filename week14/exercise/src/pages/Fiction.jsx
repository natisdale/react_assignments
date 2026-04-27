import { books } from "../data/bookData.js";
import BookList from "../components/BookList.jsx";

function Fiction() {
  return (
    <>
      <main>
        <h1>Chess Fiction</h1>
        <div id="fiction-books">
          <BookList
            books={books.filter((book) => book.category === "fiction")}
          />
        </div>
      </main>
    </>
  );
}

export default Fiction;
