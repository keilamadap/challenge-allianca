import { createContext, useEffect, useState } from "react";
import { todos } from "../utils/tasks";

const MyContext = createContext();

function MyContextProvider({ children }) {
  const [tasks, setTasks] = useState(todos);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      setTasks(parsedTasks);
    }
  }, []);

  const onAddTask = (taskName, isCompleted = false) => {
    const newTask = { name: taskName, isCompleted };
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };
  const onRemoveTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((_, i) => i !== index);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const onMarkTaskCompleted = (index) => {
    const markedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(markedTasks);
    localStorage.setItem("tasks", JSON.stringify(markedTasks));
  };

  return (
    <MyContext.Provider
      value={{ tasks, onAddTask, setTasks, onRemoveTask, onMarkTaskCompleted }}
    >
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, MyContextProvider };
