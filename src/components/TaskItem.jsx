import axios from 'axios'
import { useAlert } from 'react-alert'
import { AiFillDelete } from 'react-icons/ai'

import './TaskItem.scss'

const TaskItem = ({ task, fetchTasks }) => {
  const alert = useAlert()

  const handleTaskDelete = async () => {
    try {
      await axios.delete(
        `https://alx-task-manager-backend.onrender.com/tasks/${task._id}`
      )

      await fetchTasks()

      alert.success('A tarefa foi removida com sucesso!')
    } catch (_error) {
      alert.error('Não foi possível remover esta tarefa.')
    }
  }

  const handleTaskCompletedChange = async (e) => {
    try {
      await axios.patch(
        `https://alx-task-manager-backend.onrender.com/tasks/${task._id}`,
        {
          isCompleted: e.target.checked
        }
      )

      await fetchTasks()

      alert.success('Tarefa concluída com sucesso!')
    } catch (_error) {
      alert.error('Algo deu errado.')
    }
  }

  return (
    <div className='task-item-container'>
      <div className='task-description'>
        <label
          className={
            task.isCompleted
              ? 'checkbox-container-completed'
              : 'checkbox-container'
          }
        >
          {task.description}
          <input
            type='checkbox'
            defaultChecked={task.isCompleted}
            onChange={(e) => handleTaskCompletedChange(e)}
          />
          <span
            className={task.isCompleted ? 'checkmark completed' : 'checkmark'}
          ></span>
        </label>
      </div>
      <div className='delete'>
        <AiFillDelete size={18} color='#f97474' onClick={handleTaskDelete} />
      </div>
    </div>
  )
}

export default TaskItem
