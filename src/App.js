import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextInput from "./Components/TextInput";
import Alert from "./Components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAltert = (message, type) => {
    setAlert({
      message: message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClass = () => {
    setMode("");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
  };

  const toggleMode = (cls) => {
    removeBodyClass();
    document.body.classList.add(`bg-${cls}`);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1d1c1e";
      showAltert("Dark mode is enabled...", "success");
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAltert("Light mode is enabled...", "success");
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          title="Dipu's"
          About="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} showAltert={showAltert} />
        <Routes>
          <Route
            path="/about"
            element={<About title="About" mode={mode} />}
          ></Route>
          <Route
            path="/"
            element={
              <TextInput
                showAltert={showAltert}
                title="Enter a Text To Analyze :"
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
