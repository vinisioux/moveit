// import Head from 'next/head';
import { FiChevronRight } from 'react-icons/fi';

import {
  Container,
  LeftSide,
  RightSide,
  FormContainer,
  Form,
} from '../styles/pages/homeStyles';

export default function Home() {
  return (
    <Container>
      <LeftSide></LeftSide>
      <RightSide>
        <img src="/logo-white.svg" alt="Move.it" />

        <section>
          <h1>Bem-vindo</h1>
          <FormContainer>
            <div>
              <img src="/github.svg" alt="Github" />
              <span>
                Faça login com seu Github <br /> para começar
              </span>
            </div>
            <Form>
              <input type="text" placeholder="Digite seu username" />
              <button>
                <FiChevronRight />
              </button>
            </Form>
          </FormContainer>
        </section>
      </RightSide>
    </Container>
  );
}
