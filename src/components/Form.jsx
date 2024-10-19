import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
    console.log(todos);
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          placeholder="Add task..."
          className={styles.modernInput}
          onChange={(e) => {
            setTodo({ name: e.target.value, done: false });
          }}
          value={todo.name}
          type="text"
        />
        <button className={styles.modernButton}>Add</button>
      </div>
    </form>
  );
}
