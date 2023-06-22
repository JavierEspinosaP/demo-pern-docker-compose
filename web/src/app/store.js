import { configureStore } from '@reduxjs/toolkit';
import books from "../features/books/booksSlice";
import genres from "../features/genres/genresSlice";

export const store = configureStore({
  reducer: {
    books,
    genres
  },
});
