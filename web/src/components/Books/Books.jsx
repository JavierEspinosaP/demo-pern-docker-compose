import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "../../features/books/booksSlice";
import { getAllGenres } from "../../features/genres/genresSlice";
import AddBook from "./AddBook/AddBook";
import Book from "./Book/Book";
import './Books.css'

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
    dispatch(getAllGenres())
  }, []);

  return (
    <div className="mainContainer">
      <h1>Redux Library</h1>
      <AddBook/>
      <section className='booksContainer'>
      <Book />        
      </section>

    </div>
  );
};

export default Books;
