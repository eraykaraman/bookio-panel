import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="books">
      {books.map((book) => (
        <Card
          key={book.id}
          style={{
            width: "38em",
          }}
        >
          <Card.Body>
            <Card.Img variant="top" src={book.img} />
            <Card.Title>
              <h2 id="book-title">{book.title}</h2>
            </Card.Title>
            <Card.Text>{book.description}</Card.Text>
            <Card.Text>
              <b>{book.price} TL</b>
            </Card.Text>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link to={`/update/${book.id}`}>
                <b id="update">Update</b>
              </Link>
            </button>
          </Card.Body>
        </Card>
      ))}
    </div>

    // <div className="container">
    //   <h1>books.io</h1>
    //   <div className="books">
    //     {books.map((book) => (
    //       <div className="book" key={book.id}>
    //         {book.img && <img src={book.img} alt={book.title} />}
    //         <h2>{book.title}</h2>
    //         <p>{book.description}</p>
    //         <b>{book.price}</b>
    //         <button className="delete" onClick={() => handleDelete(book.id)}>
    //           Delete
    //         </button>
    //         <button className="update">
    //           <Link to={`/update/${book.id}`}>Update</Link>
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    //   <button>
    //     <Link to="/add">Add new book</Link>
    //   </button>
    // </div>
  );
};

export default Books;
