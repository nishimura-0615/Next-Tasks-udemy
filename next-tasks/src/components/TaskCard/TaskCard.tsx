//タスク一覧画面に出力させるタスクカードを出力

import { TaskDocument } from "@/models/task";
import TaskDeleteButton from "./TaskDeleteButton/TaskDeleteButton";
import TaskEditButton from "./TaskEditButton/TaskEditButton";

interface TaskCardProps {
  task: TaskDocument;
}

const TaskCard: React.FC<TaskCardProps> = ({task}) => {
  return <div className='w-64 h-52 p-4 bg-white rounded-md shadow-md
  flex flex-col justify-between'>
    <header>
      <h1 className="text-lg font-semibold">タイトル</h1>
      <div className='mt-1 text-sm line-clamp-3'>タスクの説明</div>
    </header>
    <div>
      <div className='text-sm'>2024-12-31</div>
      <div className='flex justify-between items-center'>
        {/* ステータスに応じて背景色を変える */}
        <div className={`mt-1 text-sm px-2 py-1 w-24 text-center text-white
          rounded-full shadow-sm ${true ? 'bg-green-500':'bg-red-500' } `}>
          {true ? 'Completed' : 'Incomplete'}
        </div>
        <div className='flex gap-4'></div>
        <TaskEditButton id={task_id}/>
        <TaskDeleteButton id={task_id} />
      </div>
    </div>
  </div>
};

export default TaskCard;
