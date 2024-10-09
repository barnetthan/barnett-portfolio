import { useState } from "react";

interface TaskItemProps {
  task: string;
  setSelectedIds: Function;
  id: number;
}

function TaskItem({ task, setSelectedIds, id }: TaskItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function updateCheck() {
    let checked = isChecked;
    setIsChecked(!isChecked);
    if (!checked) {
      setSelectedIds((prevSelected: number[]) => [...prevSelected, id]);
    } else {
      setSelectedIds((prevSelected: number[]) => prevSelected.filter(item => item != id));
    }
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={updateCheck}
        />
        {task}
      </label>
    </li>
  );
}

export default TaskItem;