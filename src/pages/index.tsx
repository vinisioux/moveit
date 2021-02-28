import Head from 'next/head';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import axios from 'axios';
import { FiChevronRight } from 'react-icons/fi';
import * as Yup from 'yup';

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

  const formSchema = Yup.object().shape({
    githubUser: Yup.string().required(
      'O usuário do Gihub é um campo obrigatório',
    ),
  });

  const handleSubmitUser = useCallback((githubUser) => {
    axios
      .get(`https://api.github.com/users/${githubUser}`)
      .then(() => {
        signIn('github');
      })
      .catch((err) => {
        if (
          String(err).includes('Error: Request failed with status code 404')
        ) {
          toast.error(`Usuário ${githubUser} não existe`);
        } else {
          toast.error(
            `Ocorreu um erro inesperado\nTente novamente mais tarde.`,
          );
          console.log(err);
        }
      });
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
              <div>
                <img src="/github.svg" alt="Github" />
                <span>
                  Faça login com seu Github <br /> para começar
                </span>
              </div>
              <Formik
                initialValues={{
                  githubUser: '',
                }}
                validationSchema={formSchema}
                onSubmit={(values) => handleSubmitUser(values.githubUser)}
              >
                {({ handleChange, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Digite seu username do Github"
                      name="githubUser"
                      onChange={handleChange}
                    />

                    <button type="submit">
                      <FiChevronRight />
                    </button>
                  </Form>
                )}
              </Formik>
            </FormContainer>
          </section>
        </RightSide>
      </Container>
    </>
  );
}
