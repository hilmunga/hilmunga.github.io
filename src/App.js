import React, { useState } from 'react';
import axios from 'axios';

//refactored version

const API_KEY = "postmanrulz"; // Replace with a valid API key
const API_URL = "https://proxy.corsfix.com/?https://library-api.postmanlabs.com/books";

const CreateData = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    yearPublished: "",
  });

  // Handle input changes dynamically
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Prepare book data
  const getBookData = () => ({
    ...formData,
    yearPublished: formData.yearPublished ? parseInt(formData.yearPublished, 10) : 2000,
  });

  // Create a new book entry
  const handleCreate = async () => {
    try {
      const response = await axios.post(API_URL, getBookData(), {
        headers: {
          "Content-Type": "application/json",
          "api-key": API_KEY,
        },
      });

      alert("Book created successfully!");
      console.log("Response:", response.data);
      setFormData({ title: "", author: "", genre: "", yearPublished: "" }); // Reset form
    } catch (error) {
      console.error("Error creating data:", error);
      alert(`Failed to create book. ${JSON.stringify(error.response?.data || "Unknown error")}`);
    }
  };

  return (
    <div>
      <h2>Create New Book</h2>
      {["title", "author", "genre", "yearPublished"].map((field) => (
        <input
          key={field}
          type={field === "yearPublished" ? "number" : "text"}
          name={field}
          placeholder={field.replace(/([A-Z])/g, " $1").trim()} // Converts camelCase to normal text
          value={formData[field]}
          onChange={handleChange}
        />
      ))}
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateData;






