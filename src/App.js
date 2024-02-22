import "./App.css";
import { useState } from "react";

import MainPage from "./components/MainPage";
import Employment from "./components/Employment";
import About from "./components/About";
import Art from "./components/Art";
import Music from "./components/Music";

function App() {
  const [activeComponent, setActiveComponent] = useState("MainPage");

  const onMenuSelect = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      {activeComponent === "MainPage" && (
        <MainPage onMenuSelect={onMenuSelect} />
      )}
      {activeComponent === "Employment" && (
        <Employment onMenuSelect={onMenuSelect} />
      )}
      {activeComponent === "About" && <About onMenuSelect={onMenuSelect} />}
      {activeComponent === "Art" && <Art onMenuSelect={onMenuSelect} />}
      {activeComponent === "Music" && <Music onMenuSelect={onMenuSelect} />}
    </div>
  );
}

export default App;
