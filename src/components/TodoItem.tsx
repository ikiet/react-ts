import Todo from "../models/Todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  item: Todo;
}> = (props) => {
  return <li className={classes.item}>{props.item.content}</li>;
};

export default TodoItem;
