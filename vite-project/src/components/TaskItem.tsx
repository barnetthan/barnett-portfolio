import "../styles/App.css"

interface TaskItemProps {
  task: string;
  selectedIds: number[];
  setSelectedIds: Function;
  id: number;
}

function TaskItem({ task, selectedIds, setSelectedIds, id }: TaskItemProps) {

  function updateCheck() {
    if (selectedIds.includes(id)) {
      // uncheck
      setSelectedIds((prevSelected: number[]) => prevSelected.filter(item => item !== id));
    } else {
      // check
      setSelectedIds((prevSelected: number[]) => [...prevSelected, id]);
    }
  }
  

  return (
    <li>
      <label style={{display: "flex", justifyContent: "center"}}>
        <input
          type="checkbox"
          checked={selectedIds.includes(id)}
          onChange={updateCheck}
        />
        &nbsp; {task}
      </label>
    </li>
  );
}

export default TaskItem;