import React from "react";
import { myContext } from "../context/TodoContext";
import { BsTrash } from "react-icons/bs";
import { MdDoneOutline } from "react-icons/md";
import { ThContext } from "../context/ThemeContext";
import DarkMode from "./DarkMode";

const Todo = () => {
  const { text, list, handleChange, handleClick, deleteTask, updateTask } =
    myContext();

  const completedCount = list.filter(
    (item) => item.status === "completed",
  ).length;

  const { mode } = ThContext();

  return (
    <section className="min-h-screen w-full flex justify-center items-center p-3 sm:p-6 bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100 dark:from-gray-950 dark:via-purple-950/40 dark:to-indigo-950 transition-colors duration-500">
      <div className="w-full max-w-2xl bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-xl dark:shadow-2xl p-5 sm:p-8 text-slate-800 dark:text-gray-100 transition-all duration-300 relative">

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 pr-12 sm:text-center sm:pr-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-pink-400 bg-clip-text text-transparent">
            Todo Manager
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-purple-200/60">
            Organize your daily tasks efficiently
          </p>
        </div>

        {/* Input Form Section */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
          <input
            type="text"
            placeholder="What's your next task?"
            value={text}
            onChange={handleChange}
            className="w-full flex-1 px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 focus:border-indigo-500 dark:focus:border-purple-500/50 focus:ring-4 focus:ring-indigo-500/10 dark:focus:ring-purple-500/10 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-purple-200/30 text-base shadow-sm text-slate-900 dark:text-white"
          />

          <button
            onClick={handleClick}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 dark:bg-white text-white dark:text-purple-900 font-bold hover:bg-indigo-700 dark:hover:bg-purple-50 transition-all active:scale-[0.98] shrink-0 shadow-md shadow-indigo-600/10 dark:shadow-purple-900/20 cursor-pointer text-center text-base"
          >
            Add Task
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex justify-between items-center gap-4 mb-6 text-xs sm:text-sm font-bold tracking-wide">
          <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-4 py-2 rounded-xl text-slate-600 dark:text-purple-200">
            Total:{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">
              {list.length}
            </span>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-200 px-4 py-2 rounded-xl">
            Completed:{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">
              {completedCount}
            </span>
          </div>
        </div>

        {/* Task List Feed Layer */}
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1 custom-scrollbar">
          {list.length === 0 ? (
            <div className="text-center py-12 px-4 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl text-slate-400 dark:text-purple-200/40 text-sm sm:text-base font-medium">
              🎉 All caught up! No tasks left.
            </div>
          ) : (
            list.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 shadow-sm hover:border-slate-300 dark:hover:bg-white/10"
              >
                {/* Content Inner Area */}
                <div className="flex items-start gap-3 min-w-0">
                  <span
                    className={`mt-1 sm:mt-0 px-2.5 py-0.5 text-[10px] font-black tracking-wider uppercase rounded-full shrink-0 ${
                      item.status === "completed"
                        ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30"
                        : "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30"
                    }`}
                  >
                    {item.status}
                  </span>

                  <p
                    className={`text-sm sm:text-base font-medium break-words min-w-0 ${
                      item.status === "completed"
                        ? "line-through text-slate-400 dark:text-white/40 decoration-slate-300 dark:decoration-white/20"
                        : "text-slate-700 dark:text-white"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>

                {/* Tool Actions */}
                <div className="flex items-center justify-end gap-2 shrink-0 border-t border-slate-100 dark:border-white/5 pt-2 sm:pt-0 sm:border-none">
                  <button
                    onClick={() => updateTask(item)}
                    disabled={item.status === "completed"}
                    className={`p-2.5 rounded-lg transition-all text-sm cursor-pointer ${
                      item.status === "completed"
                        ? "bg-slate-100 dark:bg-white/5 text-slate-300 dark:text-white/20 cursor-not-allowed border border-slate-200 dark:border-white/5"
                        : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-300 dark:hover:bg-emerald-500/30 border border-emerald-200 dark:border-emerald-500/30 active:scale-95"
                    }`}
                    title={
                      item.status === "completed"
                        ? "Task Completed"
                        : "Mark as Completed"
                    }
                  >
                    <MdDoneOutline />
                  </button>

                  <button
                    onClick={() => deleteTask(item.id)}
                    className="p-2.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 dark:bg-rose-500/20 dark:text-rose-300 dark:hover:bg-rose-500/30 border border-rose-200 dark:border-rose-500/30 transition-all text-sm cursor-pointer active:scale-95"
                    title="Delete Task"
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
