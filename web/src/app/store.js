import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import books from "../features/books/booksSlice";
import genres from "../features/genres/genresSlice";

export const store = configureStore({reducer: {books,genres}}, composeWithDevTools(applyMiddleware(logger)));
