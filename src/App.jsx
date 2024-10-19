import Todo from "./components/Todo";
import Header from "./components/Header";
import "./App.css";

export default function App(totalTodos) {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}
