import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todosList, setTodoList] = useState([]);

  console.log(todosList, "yyy");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      todo: todo,
      id: Date.now(),
    };
    setTodoList((prve) => [...prve, data]);
    setTodo("");
  };


  const handleDelete = (id) => {
    setTodoList((prv) => prv.filter((todiItem) => todiItem.id !== id));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Text Task </label>
        <input placeholder="eneter task" onChange={(e) => setTodo(e.target.value)} type="text"  required/>
        <button type="submit">submit</button>
      </form>

      <ul>
        {todosList.map((todoItem) => (
          <li key={todoItem.id}>
            {todoItem.todo}{" "}
            <span>
              <button onClick={() => handleDelete(todoItem.id)}>delete</button>
            </span>{" "}
            <span>
   
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
