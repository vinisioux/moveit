import Head from 'next/head';
import { FormEvent, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';
import { FiChevronRight } from 'react-icons/fi';

import {
  Container,
  LeftSide,
  RightSide,
  FormContainer,
  Form,
} from '../styles/pages/homeStyles';

export default function Home() {
  const [session] = useSession();

  const router = useRouter();

  useEffect(() => {
    !!session && router.push('/home');
  }, [session, router]);

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    await signIn('github');
  }, []);

  return (
    <>
      <Head>
        <title>Move.it</title>
      </Head>
      <Container>
        <LeftSide></LeftSide>
        <RightSide>
          <img src="/logo-white.svg" alt="Move.it" />
          <section>
            <h1>Bem-vindo</h1>
            <FormContainer>
              <Form onSubmit={handleSubmit}>
                <button type="submit">
                  <main className="informations">
                    <img src="/github.svg" alt="Github" />
                    <span>
                      Faça login com seu Github <br /> para começar
                    </span>
                  </main>
                  <FiChevronRight />
                </button>
              </Form>
            </FormContainer>
          </section>
        </RightSide>
      </Container>
    </>
  );
}
