import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor='#212529'
      document.body.style.color='#fff'
    } else {
      setMode("light");
      document.body.style.backgroundColor='#fff'
      document.body.style.color='#212529'
    }
  };
  return (
    <>
      <Navbar
        title="Text Utils"
        about="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm heading="Enter the Text to be analyzed" />
      </div>
    </>
  );
}

export default App;
