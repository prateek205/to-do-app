import React from "react";
import { myContext } from "../context/TodoContext";
import { BsTrash } from "react-icons/bs";
import { MdDoneOutline } from "react-icons/md";

const Todo = () => {
  const { text, list, handleChange, handleClick, deleteTask, updateTask } =
    myContext();

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center p-5">
      <div className="w-full max-w-3xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 text-white">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2">📝 Todo Manager</h1>
          <p className="text-gray-200">Organize your daily tasks efficiently</p>
        </div>

        {/* Input Section */}
        <div className="flex gap-3 mb-8">
          <input
            type="text"
            placeholder="What's your next task?"
            value={text}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 outline-none placeholder:text-gray-300"
          />

          <button
            onClick={handleClick}
            className="px-8 py-3 rounded-xl bg-white text-purple-600 font-semibold hover:scale-105 duration-300"
          >
            Add Task
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-between mb-6">
          <div className="bg-white/10 px-4 py-2 rounded-xl">
            Total: {list.length}
          </div>

          <div className="bg-green-500/20 px-4 py-2 rounded-xl">
            Completed:
            {list.filter((item) => item.status === "completed").length}
          </div>
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {list.length === 0 ? (
            <div className="text-center py-10 text-gray-200">
              🎉 No Tasks Available
            </div>
          ) : (
            list.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 flex justify-between items-center hover:scale-[1.02] duration-300"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      item.status === "completed"
                        ? "bg-green-500"
                        : "bg-orange-500"
                    }`}
                  >
                    {item.status}
                  </span>

                  <p
                    className={`text-lg ${
                      item.status === "completed"
                        ? "line-through text-gray-300"
                        : ""
                    }`}
                  >
                    {item.text}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => updateTask(item)}
                    disabled={item.status === "completed"}
                    className={`p-3 rounded-xl ${
                      item.status === "completed"
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    <MdDoneOutline />
                  </button>

                  <button
                    onClick={() => deleteTask(item.id)}
                    className="p-3 rounded-xl bg-red-500 hover:bg-red-600"
                  >
                    <BsTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Todo;
