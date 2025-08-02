import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Cycles:</span>

      <div className={styles.cycleDots}>
        <div className={`${styles.cycleDot} ${styles.workTime}`}></div>
        <div className={`${styles.cycleDot} ${styles.restTimeShort}`}></div>

        <div className={`${styles.cycleDot} ${styles.workTime}`}></div>
        <div className={`${styles.cycleDot} ${styles.restTimeShort}`}></div>

        <div className={`${styles.cycleDot} ${styles.workTime}`}></div>
        <div className={`${styles.cycleDot} ${styles.restTimeShort}`}></div>

        <div className={`${styles.cycleDot} ${styles.workTime}`}></div>
        <div className={`${styles.cycleDot} ${styles.restTimeShort}`}></div>

        <div className={`${styles.cycleDot} ${styles.restTimeLong}`}></div>
      </div>
    </div>
  );
}
