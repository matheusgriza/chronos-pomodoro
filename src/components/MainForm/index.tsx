import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
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

    function handleInterruptTask(e:React.MouseEvent) {
      e.preventDefault()
      setState(prevState => {
        return {
          ...prevState,
          activeTask: null,
          secondsRemain: 0,
          formattedSecondsRemaining: '00:00',
          tasks: prevState.tasks.map( task => {
            if(prevState.activeTask && prevState.activeTask.id == task.id ){
              return {...task, interruptDate: Date.now()}
            }
            return task;  
          })
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
        {!state.activeTask && (
          <DefaultButton aria-label='Start task' title = 'Start task' type='submit' icon={<PlayCircleIcon />} color='green' />

        )} 

        {!!state.activeTask && (
          <DefaultButton aria-label='Stop task' title='Stop task' type='button' icon={<StopCircleIcon />} color='red' onClick={handleInterruptTask} /> 
        )}

        
      </div>
    </form>
  );
}
