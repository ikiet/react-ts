import { createContext, PropsWithChildren, useState } from "react";
import Todo from "../models/Todo";

type TodoContextValue = {
  todos: Todo[];
  onAddTodo: (content: string) => void;
  onDeleteTodo: (id: string) => void;
};

export const TodoContext = createContext<TodoContextValue>({
  todos: [],
  onAddTodo: () => {},
  onDeleteTodo: () => {},
});

export const TodoContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (content: string) => {
    const newTodo = new Todo(content);

    setTodos((currentState) => {
      return currentState.concat(newTodo);
    });
  };

  const onDeleteTodo = (id: string) => {
    setTodos((currentState) => {
      return currentState.filter((todo) => todo.id !== id);
    });
  };

  const value = {
    todos,
    onAddTodo,
    onDeleteTodo,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
