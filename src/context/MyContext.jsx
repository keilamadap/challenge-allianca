import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const todos = [
  {
    name: "Lavar a louça =(",
    id: uuidv4(),
    isCompleted: false,
  },
  {
    name: "Fazer as compras",
    id: uuidv4(),
    isCompleted: true,
  },
  {
    name: "Estudar",
    id: uuidv4(),
    isCompleted: false,
  },
];

const MyContext = createContext();

function MyContextProvider({ children }) {
  const [tasks, setTasks] = useState(todos);

  useEffect(() => {
    console.log(todos);

    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      setTasks(parsedTasks);
    }
  }, []);

  const onAddTask = (taskName, isCompleted = false) => {
    const newTask = { id: uuidv4(), name: taskName, isCompleted };
    setTasks((old) => {
      const updatedTasks = [...old, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const onRemoveTask = (id) => {
    setTasks((old) => {
      const updatedTasks = old.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const onMarkTaskCompleted = (id) => {
    const markedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
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
