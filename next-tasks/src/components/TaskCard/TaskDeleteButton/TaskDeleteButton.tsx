import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  return (
   <form action="">
      <button type='submit'>
        <FaTrashAlt />
      </button>
   </form>
  )
}

export default TaskDeleteButton
