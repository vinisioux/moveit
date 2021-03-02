import Head from 'next/head';
import { FormEvent, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';
import { FiChevronRight } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

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

  const handleSubmitDiscord = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    await signIn('discord');
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
                    <span>Faça login o Github</span>
                  </main>
                  <FiChevronRight />
                </button>
              </Form>
              <Form onSubmit={handleSubmitDiscord}>
                <button type="submit">
                  <main className="informations">
                    <FaDiscord size={20} color="#B3B9FF" />
                    <span>Faça login o Discord</span>
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
