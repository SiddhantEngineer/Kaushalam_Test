import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  useEffect(() => {}, []);
  return (
    <div>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login?
      </button>
      <button
        onClick={() => {
          navigate("/register");
        }}
      >
        Register?
      </button>
    </div>
  );
}

export default Index;
