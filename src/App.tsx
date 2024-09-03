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

  return (
    <>
      <NewTodo onAddTodo={onAddTodo} />
      <Todos items={todos} />
    </>
  );
}

export default App;
