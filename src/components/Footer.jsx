// import styles from "./footer.module.css";
import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>
        Completed todos: {completedTodos} Total todos: {totalTodos}
      </span>
    </div>
  );
}
