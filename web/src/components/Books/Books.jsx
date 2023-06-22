import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "../../features/books/booksSlice";
import { getAllGenres } from "../../features/genres/genresSlice";
import AddBook from "./AddBook/AddBook";
import Book from "./Book/Book";

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
    dispatch(getAllGenres())
  }, []);

  return (
    <div>
      <h1>Books4</h1>
      <AddBook/>
      <Book />
    </div>
  );
};

export default Books;
