import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos, sortedTodos }) {
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          todos={todos}
          setTodos={setTodos}
          key={item.name}
          item={item}
        />
      ))}
    </div>
  );
}
