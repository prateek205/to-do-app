import { createContext, useContext, useEffect, useState } from "react";

export const ToDoContext = createContext();

export const TodoContext = ({ children }) => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  // GET Task

  const getTask = async () => {
    const res = await fetch("http://localhost:5000/Task");
    const data = await res.json();
    setList(data);
    console.log(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  // POST Task
  const handleClick = async (e) => {
    e.preventDefault();

    const newTask = {
      text,
      status: "process",
    };

    const task = await fetch("http://localhost:5000/Task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    setText("");
    getTask();
  };

  // PUT Task

  const updateTask = async (todo) => {
    const newStatus = todo.status === "process" ? "completed" : "process";

    const updateTasks = await fetch(`http://localhost:5000/Task/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...todo,
        status: newStatus,
      }),
    });

    getTask();
  };

  // DELETE Task

  const deleteTask = async (id) => {
    const deleteTasks = await fetch(`http://localhost:5000/Task/${id}`, {
      method: "DELETE",
    });
    getTask();
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <ToDoContext.Provider
      value={{
        text,
        list,
        handleChange,
        handleClick,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export const myContext = () => useContext(ToDoContext);
