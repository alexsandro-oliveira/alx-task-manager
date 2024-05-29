import axios from "axios";
import { useAlert } from "react-alert";
import { AiFillDelete } from "react-icons/ai";

import "./TaskItem.scss";

const TaskItem = ({ task }) => {
  const alert = useAlert();

  const handleTaskDelete = async () => {
    try {
      await axios.delete(
        `https://alx-task-manager-backend.onrender.com/tasks/${task._id}`
      );
    } catch (error) {
      alert.error("Não foi possível deletar esta tarefa.");
    }
  };

  return (
    <div className="task-item-container">
      <div className="task-description">
        <label
          className={
            task.isCompleted
              ? "checkbox-container-completed"
              : "checkbox-container"
          }
        >
          {task.description}
          <input type="checkbox" defaultChecked={task.isCompleted} />
          <span
            className={task.isCompleted ? "checkmark completed" : "checkmark"}
          ></span>
        </label>
      </div>
      <div className="delete">
        <AiFillDelete size={18} color="#f97474" onClick={handleTaskDelete} />
      </div>
    </div>
  );
};

export default TaskItem;
