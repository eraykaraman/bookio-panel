import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    img: "",
    price: 0,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/" + bookId, book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="form">
        <h1>Update New Book</h1>
        <input
          type="text"
          placeholder="Enter a book name"
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter a book description"
          name="description"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter a book img"
          name="img"
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Enter a book price"
          name="price"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Update</button>
      </div>
    </div>
  );
};

export default Update;
