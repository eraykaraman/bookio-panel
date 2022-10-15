import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    img: "",
    price: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Add New Book</h1>
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
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Add;
