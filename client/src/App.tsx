import "./App.css";
import TodoItem from "./components/TodoItem";
import useToDo from "./hooks/useToDo";

function App() {
  const {
    toDo,
    text,
    isUpdating,
    handleTextChange,
    handleAddToDo,
    handleUpdateToDo,
    handleDeleteToDo,
    handleEditToDo,
  } = useToDo();

  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={isUpdating ? handleUpdateToDo : handleAddToDo}>
        <div>
          <input type="text" value={text} onChange={handleTextChange} />
        </div>
        {isUpdating ? (
          <button type="button" onClick={handleUpdateToDo}>
            Update
          </button>
        ) : (
          <button type="button" onClick={handleAddToDo}>
            Add
          </button>
        )}
      </form>
      <ul>
        {toDo.map((item) => (
          // <li key={item._id}>
          //   <span>{item.text}</span>
          //   <button onClick={() => handleEditToDo(item)}>Edit</button>
          //   <button onClick={() => handleDeleteToDo(item._id)}>Delete</button>
          // </li>

          <TodoItem item={item} handleEdit={handleEditToDo} handleDelete={handleDeleteToDo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
