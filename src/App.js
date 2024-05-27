import axios from "axios";
import { useEffect, useState } from "react";

import TaskItem from "./components/TaskItem";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      description: "Estudar Programação",
      isCompleted: false,
    },
    {
      id: "2",
      description: "Ler",
      isCompleted: true,
    },
  ]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(
        "https://alx-task-manager-backend.onrender.com/tasks"
      );
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </>
  );
};

export default App;
