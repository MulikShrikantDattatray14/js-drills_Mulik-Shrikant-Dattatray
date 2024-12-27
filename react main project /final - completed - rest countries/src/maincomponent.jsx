import React from "react";
import App from "./App";
import { useDarkMode } from "./context";
function MainComponent() {
  const { isDarkMode } = useDarkMode();
  return (
    <div  className={isDarkMode ? 'bg-gray-800 text-white min-h-[100vh]' : 'bg-white text-black min-h-[100vh]'}>
      <App />
    </div>
  );
}

export default MainComponent;
