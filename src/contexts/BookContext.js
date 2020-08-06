import React, { createContext, useEffect, useReducer } from "react";
import { bookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  // const addBook = ({ title, author }) => {
  //   setBooks([...books, { title, author, id: uuid() }]);
  // };
  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
