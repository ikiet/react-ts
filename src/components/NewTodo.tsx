import { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/TodoContext";

const NewTodo: React.FC = () => {
  const { onAddTodo } = useContext(TodoContext);

  const todoContentInputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredContent = todoContentInputRef.current?.value;
    if (enteredContent == undefined || enteredContent?.trim().length === 0) {
      return;
    }
    onAddTodo(enteredContent);
  };
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <label htmlFor="text">Todo Content</label>
      <input ref={todoContentInputRef} id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
