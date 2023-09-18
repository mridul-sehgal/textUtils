import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "#fff";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#212529";
      showAlert("Light mode has been enabled", "success");
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

      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the Text to be analyzed"
        />
      </div>
    </>
  );
}

export default App;
