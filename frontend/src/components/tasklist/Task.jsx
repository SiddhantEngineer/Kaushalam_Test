import React, { useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

function Task() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch(apiUrl + "/task/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setTasks(data);
    } catch (error) {
      console.log("fetchtasks error: " + error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((e) => (
        <div>{e.text}</div>
      ))}
    </div>
  );
}

export default Task;
