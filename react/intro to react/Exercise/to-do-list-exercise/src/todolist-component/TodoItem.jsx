//the list item component 

function TodoItem({ task_name, task_done }) {
  //*this is the logic of task complete
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center w-100 ">
        <div className="d-flex align-items-center">
          <button
            className={`btn btn-sm ${task_done ? "btn-success" : "btn-light"}`}
          >
            <i
              className={`bi ${task_done ? "bi-check-square" : "bi-square"}`}
            ></i>
          </button>
          <span
            className={`ms-2 ${task_done ? "text-decoration-line-through" : ""}`}
          >
            {task_name}
          </span>
        </div>
        <div>
          <button className="btn btn-sm btn-danger">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </li>
    </>
  );
}

export default TodoItem;
