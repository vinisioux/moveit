import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/client';

import prisma from '../lib/prisma';

import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';
import { Sidebar } from '../components/Sidebar';

import { CountdownProvider } from '../contexts/CountdownContext';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { Container, Content } from '../styles/pages/homePageStyles';
import { useEffect } from 'react';

interface HomePageProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function HomePage(props: HomePageProps) {
  const [session] = useSession();

  const router = useRouter();

  useEffect(() => {
    !session && router.push('/');
  }, [session, router]);

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Container>
        <Sidebar />
        <Content>
          <Head>
            <title>Início | move.it</title>
          </Head>

          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </Content>
      </Container>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { userStatus: {} } };
  }

  const userAccessToken = await prisma.session.findUnique({
    where: {
      accessToken: session.accessToken,
    },
  });

  const user = await prisma.user.findUnique({
    where: {
      id: userAccessToken.userId,
    },
  });

  return {
    props: {
      level: user.level,
      currentExperience: user.experience,
      challengesCompleted: user.challenges,
    },
  };
};
