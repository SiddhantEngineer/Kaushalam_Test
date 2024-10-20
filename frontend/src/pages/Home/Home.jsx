import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Task from "../../components/tasklist/Task";
import AddTask from "../../components/tasklist/AddTask";

function Home() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      Home
      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        logout
      </button>
      <Task></Task>
      <AddTask></AddTask>
    </div>
  );
}

export default Home;
