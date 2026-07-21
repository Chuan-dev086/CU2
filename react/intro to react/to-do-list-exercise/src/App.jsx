import TodoList from "./todolist-component/TodoList";
import AddTodoForm from "./todolist-component/AddTodoForm";

function App() {
  return (
    <div className="container py-2">
      <div
        className="card rounded shadow-sm"
        style={{ maxWidth: "400px", margin: "60px auto" }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <TodoList />
          <AddTodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;
