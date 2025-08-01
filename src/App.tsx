import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Heading attr={123}>Olá Mundo!</Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia
        corrupti at, voluptatum doloremque nam cupiditate asperiores est
        accusamus repellendus quos, sunt quibusdam commodi iste eius delectus
        incidunt deleniti quam.
      </p>
    </>
  );
}
