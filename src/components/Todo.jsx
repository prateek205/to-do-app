import React from "react";
import { myContext } from "../context/TodoContext";
import { BsTrash } from "react-icons/bs";
import { MdDoneOutline } from "react-icons/md";

const Todo = () => {
  const { text, list, handleChange, handleClick, deleteTask, updateTask } =
    myContext();

  return (
    <section className="h-screen w-full flex items-center justify-start flex-col gap-5 p-10 bg-white text-black dark:bg-gray-900 dark:text-white duration-300">
      <h1 className="text-4xl font-bold">To-Do Application</h1>
      <div className="flex gap-5 px-2 py-5 w-full rounded-md">
        <input
          type="text"
          placeholder="Enter the Task..."
          className="px-2 py-2 w-full text-xl outline-none rounded-md bg-transparent shadow-[0_0_5px_rgb(50,50,50)] dark:shadow-[0_0_5px_rgb(250,250,250)]"
          value={text}
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="py-2 px-10 bg-transparent hover:bg-gray-900 hover:text-white text-black rounded-md dark:hover:bg-gray-800 dark:hover:text-white shadow-[0_0_5px_rgb(50,50,50)] dark:shadow-[0_0_5px_rgb(250,250,250)]"
        >
          Add
        </button>
      </div>
      <div className="dark:shadow-[0_0_10px_rgb(250,250,250)] shadow-[0_0_10px_rgb(50,50,50)] shadow-gray-500 w-full h-full flex flex-col gap-5 py-5 px-3 rounded-md">
        <h1 className="text-xl font-bold">Task List</h1>
        <div className="flex flex-col gap-2">
          {list.map((item, index) => {
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <ul>
                    <li
                      className={
                        item.status === "completed"
                          ? "line-through text-gray-500"
                          : null
                      }
                    >
                      {item.text}
                    </li>{" "}
                  </ul>
                  <div
                    className={`w-5 h-5 rounded-full ${
                      item.status === "completed"
                        ? "bg-green-500"
                        : "bg-orange-500"
                    }`}
                  ></div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateTask(item)}
                    className={`text-xl ${item.status === "completed" ? "text-gray-400 cursor-not-allowed" : "hover:text-green-500"}`}
                    disabled={item.text === "completed"}
                  >
                    <MdDoneOutline />
                  </button>

                  <button
                    className="text-xl hover:text-red-500"
                    onClick={() => deleteTask(item.id)}
                  >
                    <BsTrash />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Todo;
