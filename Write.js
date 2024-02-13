import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Write.css";

function Write() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
 
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({
      ...formData,
      image: imageFile,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("image", formData.image);

    try {
      const response = await fetch("http://localhost:5000/api/blog", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        console.log("Blog created successfully");
      } else {
        console.error("Failed to create blog");
      }
      navigate('/Home');
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signup">
    <nav className="navbar">
      <img id="icon" src={require("../image/web-blogger-app.png")} alt="Icon" />
    </nav>
    <form onSubmit={handleFormSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Content:
        <textarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Image:
        <input type="file" name="image" onChange={handleImageChange} />
      </label>

      <button type="submit">Create a new blog</button>
    </form>
  </div>
  );
}

export default Write;
