import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { todosProps } from "./types";
import Context from "./context";

function App() {
  const [todos, setTodos] = React.useState<todosProps[]>([]);

  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function addTodo(title: string) {
    setTodos([...todos, { id: Date.now(), completed: false, title }]);
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <Context.Provider value={{ removeTodo, addTodo }}>
      <div className="todo">
        <span style={{ fontSize: "64px", color: "#1976D2FF" }}>TODOS</span>
        <AddTodo />
        <TodoList todos={todos} onToggle={toggleTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
