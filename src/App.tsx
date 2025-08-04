import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import {TaskContextProvider } from './contexts/TaskContext';



export function App() {
  return (
    <TaskContextProvider>
      <Home /> 
    </TaskContextProvider>
  )
}
