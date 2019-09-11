import React from "react";
import "./App.css";
import Logo from "./components/Display Components/Logo";
import NasaPOD from "./components/NasaPOD";

function App() {
  return (
    <div className="App">
      <Logo />
      <NasaPOD />
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
      </p>
    </div>
  );
}

export default App;
