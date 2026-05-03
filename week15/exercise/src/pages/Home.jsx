import { books } from "../data/bookData.js";
import BookList from "../components/BookList.jsx";

function Home() {
  return (
    <>
      <main>
        <h1>Chess Books</h1>
        <div id="fiction-books">
          <BookList books={books} />
        </div>
      </main>
    </>
  );
}

export default Home;
