import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='#'>Learn how the pomodore technique works</a>
      <a href='#'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Made w love s2
      </a>
    </footer>
  );
}
