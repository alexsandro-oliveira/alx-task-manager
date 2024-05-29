import axios from "axios";
import { useState } from "react";
import { useAlert } from "react-alert";
import { FaPlus } from "react-icons/fa";

import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

import "./AddTask.scss";

const AddTask = ({ fetchTasks }) => {
  const [task, setTask] = useState("");

  const alert = useAlert();

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAdd = async () => {
    try {
      if (task.length === 0) {
        return alert.error(
          "A tarefa precisa de uma descrição para ser adicionada."
        );
      }

      await axios.post("https://alx-task-manager-backend.onrender.com/tasks", {
        description: task,
        isCompleted: false,
      });

      await fetchTasks();

      setTask("");

      alert.success("A tarefa foi adicionada com sucesso!");
    } catch (error) {
      alert.error("Algo deu errado.");
    }
  };

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar tarefa..."
        value={task}
        onChange={onChange}
      />
      <CustomButton onClick={handleTaskAdd}>
        <FaPlus size={14} />
      </CustomButton>
    </div>
  );
};

export default AddTask;
