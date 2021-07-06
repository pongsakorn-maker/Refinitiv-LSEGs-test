import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <Link to="/question1">Question1</Link>
      <Link to="/question2">Question2</Link>
    </div>
  );
}

export default Home;
