import React, { useState } from "react";
import { Todo, ToggleTodo } from "./types";

import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";

const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Write app", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo, // text
          complete: !todo.complete, // complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (newTodo: string) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
};
export default App;
