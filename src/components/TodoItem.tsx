import Todo from "../models/Todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  item: Todo;
  onDeleteTodo: (id: string) => void;
}> = ({ item, onDeleteTodo }) => {
  return (
    <li onClick={() => onDeleteTodo(item.id)} className={classes.item}>
      {item.content}
    </li>
  );
};

export default TodoItem;
