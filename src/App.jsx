import React from "react";
import Todo from "./components/Todo";
import DarkMode from "./components/DarkMode";

const App = () => {
  return (
    <div className="flex flex-col gap-2 h-screen bg-white text-black dark:bg-gray-900 dark:text-white w-full duration-300">
      <DarkMode />
      <Todo />
    </div>
  );
};

export default App;
