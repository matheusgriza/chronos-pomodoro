import { Container } from './components/Container';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <section>
          <Heading>LOGO</Heading>
        </section>
      </Container>
      <Container>
        <section>
          <Heading>LOGO</Heading>
        </section>
      </Container>
      <Container>
        <section>FORM</section>
      </Container>
      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}
