import { books } from "../data/bookData.js";
import BookList from "../components/BookList.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      {/* Page heading */}
      <h1>Chess Books</h1>
      <main>
        <BookList books={books} />
      </main>
      {/* Render the footer with copyright information */}
      <Footer />
    </>
  );
}

export default Home;
