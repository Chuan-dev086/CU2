// place the input and add button
function AddTodoForm() {
  return (
    <div className="mt-4 w-100 ">
      <form className="d-flex justify-content-between align-items-center w-100">
        <input
          type="text"
          className="form-control flex-grow-1"
          placeholder="Add new item..."
          required
        />
        <button className="btn btn-primary btn-sm rounded ms-2">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
