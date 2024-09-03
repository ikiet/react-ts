import { useContext } from "react";
import Todo from "../models/Todo";
import { TodoContext } from "../store/TodoContext";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  item: Todo;
}> = ({ item }) => {
  const { onDeleteTodo } = useContext(TodoContext);
  return (
    <li onClick={() => onDeleteTodo(item.id)} className={classes.item}>
      {item.content}
    </li>
  );
};

export default TodoItem;
