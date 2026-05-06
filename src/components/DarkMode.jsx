import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { ThContext } from "../context/ThemeContext";

const DarkMode = () => {
  const { mode, setMode, handleToggle } = ThContext();

  return (
    <section className="flex items-center justify-end py-2 px-5">
      <div className="flex">
        <button onClick={handleToggle} className="text-xl">
          {mode ? <BsSun /> : <BsMoon />}
        </button>
      </div>
    </section>
  );
};

export default DarkMode;
