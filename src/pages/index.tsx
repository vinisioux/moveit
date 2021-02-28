import Head from 'next/head';
import { useEffect } from 'react';
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
              <div>
                <img src="/github.svg" alt="Github" />
                <span>
                  Faça login com seu Github <br /> para começar
                </span>
              </div>
              <Form>
                <input type="text" placeholder="Digite seu username" />
                <button
                  onClick={(): Promise<void> =>
                    signIn('GitHub', {
                      callbackUrl: `${process.env.NEXTAUTH_URL}/api/auth/logout`,
                    })
                  }
                >
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
