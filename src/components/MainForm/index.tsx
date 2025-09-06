import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
// import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  //Next Cycle
  console.log(state);
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      alert('Please type a task name');
      return;
    }

    //Create new task
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      durationMinutes: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemain = newTask.durationMinutes * 60; //seconds

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask, //Check
        currentCycle: nextCycle,
        secondsRemain,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemain), //Check
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  return (
    <form className='form' action='' onSubmit={handleCreateNewTask}>
      <div className='formRow'>
        <DefaultInput
          type='text'
          id='abc12345'
          labelText='Task'
          required
          placeholder='Task'
          ref={taskNameInput}
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      {state.currentCycle > 0 && (

      <div className='formRow'>
        <Cycles />
      </div>

      )}
    
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
        {/* <DefaultButton icon={<StopCircleIcon />} color='red' /> */}
      </div>
    </form>
  );
}
