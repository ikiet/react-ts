import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (content: string) => {
    const newTodo = new Todo(content);

    setTodos((currentState) => {
      return currentState.concat(newTodo);
    });
  };

  const onDeleteTodo = (id: string) => {
    setTodos((currentState) => {
      return currentState.filter(todo => todo.id !== id);
    });
  };

  return (
    <>
      <NewTodo onAddTodo={onAddTodo}  />
      <Todos items={todos} onDeleteTodo={onDeleteTodo} />
    </>
  );
}

export default App;
