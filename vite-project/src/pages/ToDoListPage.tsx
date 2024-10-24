import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import TaskItem from "../components/TaskItem";

interface Task {
  task: string;
  id: number;
}

function ToDoListPage() {
  const [taskInput, setTaskInput] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [curId, setCurId] = useState<number>(0);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [noTask, setNoTask] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      setTaskList(JSON.parse(localStorage.getItem("tasks")!));
    }
    if (localStorage.getItem("id")) {
      setCurId(JSON.parse(localStorage.getItem("id")!));
    }
  }, []);

  function addTask() {
    if (!taskInput) {
      setNoTask(true);
      return;
    }
    setNoTask(false);
    const newTask: Task = {
      task: taskInput,
      id: curId,
    };

    setTaskList([...taskList, newTask]);
    setCurId(curId + 1);
    setTaskInput("");

    localStorage.setItem("tasks", JSON.stringify([...taskList, newTask]));
    localStorage.setItem("id", JSON.stringify(curId + 1));
  }

  function deleteTasks() {
    const updatedList = taskList.filter(
      (task) => selectedIds.indexOf(task.id) < 0
    );
    setTaskList(updatedList);
    setSelectedIds([]);

    localStorage.setItem("tasks", JSON.stringify(updatedList));
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
          To Do List ({taskList.length})
        </h1>
        <div>
          Search: &nbsp;
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </div>
        <br />
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
          {noTask ? (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                }}
              >
                No task inputted!
              </div>
              <hr />
            </>
          ) : (
            <></>
          )}
        </div>
        <br/>
  
        <button
          onClick={() => {
            deleteTasks();
          }}
          disabled={selectedIds.length == 0}
        >
          Delete {selectedIds.length} Selected Task(s)
        </button>
         
        <ul style={{ listStyle: "none" }}>
          {taskList
            .filter((task) => {
              if (
                searchQuery == "" ||
                task.task.toLowerCase().includes(searchQuery)
              ) {
                return task;
              }
            })
            .map((task) => (
              <TaskItem
                key={task.id}
                task={task.task}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
                id={task.id}
              />
            ))}
        </ul>
      </div>
    </>
  );
}

export default ToDoListPage;
