import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleDescriptionMap = {
    workTime: 'work time',
    shortBreakTime: 'small rest time',
    longBreakTime: 'long rest time',
  };

  const cycleSteps = Array(state.currentCycle).fill(null);
  return (
    <div className={styles.cycles}>
      <span>Cycles:</span>

      <div className={styles.cycleDots}>
        {cycleSteps.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycleType}_${nextCycle}`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicator of ${cycleDescriptionMap[nextCycleType]}`}
              title={`Indicator of ${cycleDescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
