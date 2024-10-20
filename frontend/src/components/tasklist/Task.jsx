import React, { useEffect, useState } from "react";

function Task() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/task/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("fetchtasks error: " + error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return <div>Task</div>;
}

export default Task;
