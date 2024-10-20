import React, { useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

function AddTask() {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl + "/task/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ text }),
      });
    } catch (error) {
      console.log("Error at addTask: " + error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddTask;
