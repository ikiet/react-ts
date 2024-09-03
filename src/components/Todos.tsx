import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  onDeleteTodo: (id: string) => void;
}> = ({ items, onDeleteTodo }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem onDeleteTodo={onDeleteTodo} key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Todos;
