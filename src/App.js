import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  const [todos, setTodos] = useState([])
  const [allTodos, setAllTodos] = useState(0)
  const [allComplete, setAllComplete] = useState(0)

  const putTodo = (value) => {
    if (value) {
      setTodos([...todos, {id: Date.now(), text: value, done: false}])
      setAllTodos(allTodos + 1)
    } else {
      alert("Введите текст")
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
        if (todo.id !== id) return todo;
        const updatedTodo = { ...todo, done: !todo.done };
        if (updatedTodo.done) {
            setAllComplete(allComplete + 1);
        } else {
            setAllComplete(allComplete - 1);
        }
        return updatedTodo;
    }));
}

const removeTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id))
  setAllTodos(allTodos - 1)

}

const clearTodos = () => {
  setTodos([]);
  setAllTodos(0);
}


  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title">TodoList</h1>
        <Form 
        putTodo={putTodo}
        />
        <ul className="todos">
        {
          todos.map(todo => {
            return (
              <li className={todo.done ? "todo done" : "todo"} key={todo.id} onClick={() => toggleTodo(todo.id)}>
                {todo.text}
                < img src="./delete.jpg" alt="delete" className="delete_img" onClick={e => {
                  e.stopPropagation();
                  removeTodo(todo.id);

                }}/>

              </li>
            );
          })
        }
        <div className="info_footer">
          <span>All todos: {allTodos}</span>
          <span>Complete: {allComplete}</span>
        </div>
        </ul>
        <button className="btn" onClick={clearTodos}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
