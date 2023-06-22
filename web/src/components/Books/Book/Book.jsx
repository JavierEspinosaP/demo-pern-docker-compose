import { useSelector, useDispatch } from "react-redux";
import { DeleteOutlined,EditOutlined } from "@ant-design/icons";
import { deleteBook, getById } from "../../../features/books/booksSlice";
import { useState } from "react";
import EditModal from "./EditModal/EditModal";

const Book = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (id) => {
    dispatch(getById(id))
    setIsModalVisible(true);
  };

  const book = books.map((book) => {
    return (
      <div key={book.id}>
        <h2>{book.name}</h2>
        <span>{book.price}</span>
        <DeleteOutlined onClick={() => dispatch(deleteBook(book.id))} />
        <EditOutlined onClick={() => showModal(book.id)} />
      </div>
    );
  });

  return <div>{book}
        <EditModal visible={isModalVisible} setVisible={setIsModalVisible} />
  </div>;
};

export default Book;
