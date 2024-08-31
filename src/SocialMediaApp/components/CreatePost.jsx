import React, { useContext, useState } from "react";
import { PostList } from "../store/Post-List-Store";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  let { addList } = useContext(PostList);

  let navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    id: uuidv4(),
    userId: "",
    title: "",
    body: "",
    reaction: "",
    tags: "",
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert tags from comma-separated string to array
    const tagsArray = formData.tags.split(",").map((tag) => tag.trim());

    // Create new post object
    const newPost = {
      id: formData.id,
      title: formData.title,
      body: formData.body,
      reaction: Number(formData.reaction), // Ensure this is a number
      userId: formData.userId,
      tags: tagsArray,
    };

    // Add new post to the list
    addList(newPost);

    try {
      const response = await axios.post(
        "https://dummyjson.com/posts/add",
        newPost,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response.data);

      // Call the function to execute it
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data); // Log full error response
      }
      console.error("Error adding post:", error.message);
    }
    // Reset form fields
    setFormData({
      userId: "",
      title: "",
      body: "",
      reaction: "",
      tags: "",
    });

    await navigate("/social");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">Create Post</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">
          User-ID
        </label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter post title"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter post title"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="body" className="block text-gray-700">
          Body
        </label>
        <textarea
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter post content"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="reaction" className="block text-gray-700">
          Reaction Count
        </label>
        <input
          type="number"
          id="reaction"
          name="reaction"
          value={formData.reaction}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter number of reactions"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="tags" className="block text-gray-700">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="e.g. vacation, enjoy"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
