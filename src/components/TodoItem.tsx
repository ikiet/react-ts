import Todo from "../models/Todo";

const TodoItem: React.FC<{
  item: Todo;
}> = (props) => {
  return <li>{props.item.content}</li>;
};

export default TodoItem;
