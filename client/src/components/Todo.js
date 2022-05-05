import React, { useEffect, useState } from 'react'

function Todo() {
  
    const [tasks, setTasks] = useState([
        {
            text: "Feed Cats",
            done: true,
        },
        {
            text: "Buy more milk",
            done: true,
        },
        {
            text: "Check emails and reply",
            done: false,
        },
        {
            text: "Clean room",
            done: false,
        },
        {
            text: "Make new playlist for gym",
            done: false,
        }
    ]);
    const [remainingTasks, setRemainingTasks] = React.useState(0);
  const addTaskInput = React.useRef();

  React.useEffect(() => {
    setRemainingTasks(
      tasks.filter((taskItem) => taskItem.done === false).length
    );
  }, [tasks]);

  function addTask() {
    const newTask = addTaskInput.current.value;
    if (newTask && !tasks.some((task) => task.text === newTask)) {
      const newTaskObj = {
        text: newTask,
        done: false,
      };
      setTasks((tasks) => {
        return [...tasks, newTaskObj];
      });
      addTaskInput.current.value = "";
      addTaskInput.current.focus();
    }
  }

  function handleKey({ keyCode, target }) {
    if (keyCode === 13) {
      addTask();
    } else {
      if (!tasks.some((task) => task.text === target.value)) {
        addTaskInput.current.classList.remove("invalid");
      } else {
        addTaskInput.current.classList.add("invalid");
      }
    }
  }

  return (
    <div className=" w-full flex items-center justify-center pl-3 pr-3 pb-3 ">
      <div className="relative w-full rounded-lg bg-white dark:bg-gray-700 text-center overflow-hidden text-black dark:text-white">
        <div className="todo-header bg-gradient-to-b from-sky-400 to-sky-200">
          <h1 className="text-">Todo List</h1>
          <small>
            {tasks.length > 0 && remainingTasks === 0 ? (
              "All done! =D"
            ) : (
              <>
                You have <b>{remainingTasks}</b> of <b>{tasks.length}</b> tasks
                remaining
              </>
            )}
          </small>
        </div>
        <div className="todo-form text-black dark:text-white bg-white dark:bg-gray-700">
          <input
            ref={addTaskInput}
            type="text"
            placeholder="Add task..."
            onKeyUp={handleKey}
            className="text-black dark:text-white bg-white dark:bg-gray-700"
          />
          <button onClick={addTask}>+</button>
        </div>
        <div className="todo-body">
          <List tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
}

const List = ({ tasks, setTasks }) => {
  if (tasks.length > 0) {
    return (
      <ul className="todo-list">
        {tasks.map((task, taskIndex) => {
          return (
            <Task
              key={taskIndex}
              taskId={taskIndex}
              task={task}
              setTasks={setTasks}
            />
          );
        })}
      </ul>
    );
  }
  return (
    <div className="empty">
      <p>
        <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="translate(2.5 4.5)"
          >
            <path d="m3.65939616 0h8.68120764c.4000282 0 .7615663.23839685.9191451.6060807l2.7402511 6.3939193v4c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-4l2.74025113-6.3939193c.15757879-.36768385.51911692-.6060807.91914503-.6060807z" />
            <path d="m0 7h4c.55228475 0 1 .44771525 1 1v1c0 .55228475.44771525 1 1 1h4c.5522847 0 1-.44771525 1-1v-1c0-.55228475.4477153-1 1-1h4" />
          </g>
        </svg>
      </p>
      <p>
        <b>Empty list</b>
      </p>
      <p>Add a new task above</p>
    </div>
  );
};

const Task = ({ taskId, task, setTasks }) => {
  function removeTask() {
    setTasks((tasks) => {
      return tasks.filter((taskItem, taskIndex) => taskIndex !== taskId);
    });
  }

  function toggleTask() {
    const doneStatus = !task.done;
    setTasks((tasks) => {
      return tasks.map((taskItem, taskIndex) => {
        if (taskIndex === taskId) {
          return {
            text: task.text,
            done: doneStatus,
          };
        }
        return taskItem;
      });
    });
  }

  const prefixClass = "task-item";
  const doneClass = task.done ? " done" : "";

    return (
        <div className=''>
            <li className={prefixClass + doneClass}>
      <div className={prefixClass + "-infos"}>
        <label className={prefixClass + "-checkbox"}>
          <input type="checkbox" onChange={toggleTask} checked={task.done} />
          <div className={prefixClass + "-checkbox-el"}></div>
        </label>
        <div className={prefixClass + "-text"}>{task.text}</div>
      </div>
      <div className={prefixClass + "-remove"}>
        <button onClick={removeTask} title="Remover item">
          <svg
            height="21"
            viewBox="0 0 21 21"
            width="21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              transform="translate(5 5)"
            >
              <path d="m10.5 10.5-10-10z" />
              <path d="m10.5.5-10 10" />
            </g>
          </svg>
        </button>
      </div>
    </li>
        </div>
    )
}

export default Todo