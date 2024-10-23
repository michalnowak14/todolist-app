import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  const sortedTodos = todos.sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      {todos.length === 0 ? null : (
        <TodoList sortedTodos={sortedTodos} todos={todos} setTodos={setTodos} />
      )}
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
