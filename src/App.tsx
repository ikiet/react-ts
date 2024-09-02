import Todos from "./components/Todos";
import Todo from "./models/Todo";

function App() {
  const todos = [
    new Todo('Learn Vanilla Javascript'),
    new Todo('Learn React Native')
  ]
  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
