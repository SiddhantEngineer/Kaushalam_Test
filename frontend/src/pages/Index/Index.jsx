import React, { useEffect } from "react";
import "./Index.css";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  useEffect(() => {}, []);
  return (
    <div id="home-page">
      <div id="home-title">Welcome To Siddhant's Task App</div>
      <div id="home-button-container">
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Index;
