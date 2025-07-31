import styles from './Heading.module.css';

export function Heading() {
  const c = `${styles.heading} ${styles.matheus}`;
  return <h1 className={c}>Olá Mundo</h1>;
}
