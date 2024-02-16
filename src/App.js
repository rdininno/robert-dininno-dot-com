import "./App.css";
import { useState } from "react";

import MainPage from "./components/MainPage";
import Employment from "./components/Employment";

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
    </div>
  );
}

export default App;
