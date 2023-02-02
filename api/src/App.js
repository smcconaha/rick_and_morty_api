import React, { useState } from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Character from "./components/Character";

function App() {
  return (
    <div className="container">
      <Character />
    </div>
  );
}

export default App;
