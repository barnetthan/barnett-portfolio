import { useState } from "react";
import NavBar from "../components/NavBar";
import TaskItem from "../components/TaskItem";

interface Task {
  task: string;
  id: number;
}

function ToDoListPage() {
  const [taskInput, setTaskInput] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [curId, setCurId] = useState<number>(0);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  function addTask() {
    const newTask: Task = {
      task: taskInput,
      id: curId,
    };

    setTaskList([...taskList, newTask]);
    setCurId(curId + 1);
    setTaskInput("");
  }

  function deleteTasks() {
    setTaskList(taskList.filter((task) => selectedIds.indexOf(task.id) < 0));
    setSelectedIds([]);
  }

  return (
    <>
      <NavBar curPage="todolist" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ textDecoration: "underline" }}>
          &nbsp;
          To Do List ({taskList.length})
        </h1>
        <div>
          Add New Task: &nbsp;
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          &nbsp;
          <button
            onClick={() => {
              addTask();
            }}
          >
            Submit
          </button>
          &nbsp;
          {selectedIds.length > 0 ? (
            <button
              onClick={() => {
                deleteTasks();
              }}
            >
              Delete {selectedIds.length} Selected Task(s)
            </button>
          ) : (
            <></>
          )}
        </div>
        <ul style={{ listStyle: "none" }}>
          {taskList.map((task) => (<TaskItem key={task.id} task={task.task} setSelectedIds={setSelectedIds} id={task.id}/>))}
        </ul>
      </div>
    </>
  );
}

export default ToDoListPage;
