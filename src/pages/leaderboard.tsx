import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import prisma from '../lib/prisma';

import { Sidebar } from '../components/Sidebar';

import {
  Container,
  Content,
  TableContainer,
} from '../styles/pages/leaderboardStyles';

interface User {
  id: number;
  name: string;
  image: string;
  challenges: number;
  level: number;
  experience: number;
  totalExperience: number;
}

interface LeaderboardProps {
  users: User[];
}

export default function Leaderboard({ users }: LeaderboardProps) {
  const [session] = useSession();

  const router = useRouter();

  useEffect(() => {
    !session && router.push('/');
  }, [session, router]);

  return (
    <>
      <Head>
        <title>Ranking | move.it</title>
      </Head>
      <Container>
        <Sidebar />
        <Content>
          <header>
            <h1>Ranking</h1>
          </header>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>POSIÇÃO</th>
                  <th>USUÁRIO</th>
                  <th>DESAFIOS</th>
                  <th>EXPERIÊNCIA</th>
                </tr>
              </thead>
              <tbody>
                {dataFake.map((user: User, position) => (
                  <tr key={String(position + 1)}>
                    <td>{position + 1}</td>
                    <td className="user">
                      <img src={user.image} alt={user.name} />
                      <div>
                        <strong>{user.name}</strong>
                        <span>
                          <img src="/icons/level.svg" alt="Level" />
                          <span>Level {user.level}</span>
                        </span>
                      </div>
                    </td>
                    <td className="challenges">
                      <span>{user.challenges}</span>
                      <span> completados</span>
                    </td>
                    <td className="experience">
                      <span>{user.totalExperience}</span>
                      <span> xp</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <PagesButtonsContainer>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={limitPerPage}
              totalItemsCount={totalTransactions}
              pageRangeDisplayed={5}
              onChange={handleChangePage}
            />
          </PagesButtonsContainer> */}
          </TableContainer>
        </Content>
      </Container>
    </>
  );
}

const dataFake: User[] = [
  {
    id: 1,
    challenges: 2,
    experience: 12,
    image:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    level: 4,
    name: 'vinicius',
    totalExperience: 12312,
  },
  {
    id: 2,
    challenges: 2,
    experience: 12,
    image:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    level: 4,
    name: 'vinicius',
    totalExperience: 12312,
  },
  {
    id: 3,
    challenges: 2,
    experience: 12,
    image:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    level: 4,
    name: 'vinicius',
    totalExperience: 12312,
  },
  {
    id: 4,
    challenges: 2,
    experience: 12,
    image:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    level: 4,
    name: 'vinicius',
    totalExperience: 12312,
  },
  {
    id: 5,
    challenges: 2,
    experience: 12,
    image:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    level: 4,
    name: 'vinicius',
    totalExperience: 12312,
  },
  {
    id: 6,
    challenges: 2,
    experience: 12,
    image:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    level: 4,
    name: 'vinicius',
    totalExperience: 12312,
  },
  {
    id: 7,
    challenges: 2,
    experience: 12,
    image:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    level: 4,
    name: 'vinicius',
    totalExperience: 12312,
  },
  {
    id: 8,
    challenges: 2,
    experience: 12,
    image:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    level: 4,
    name: 'vinicius',
    totalExperience: 12312,
  },
  {
    id: 9,
    challenges: 2,
    experience: 12,
    image:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    level: 4,
    name: 'vinicius',
    totalExperience: 12312,
  },
  {
    id: 10,
    challenges: 2,
    experience: 12,
    image:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    level: 4,
    name: 'vinicius',
    totalExperience: 12312,
  },
  {
    id: 11,
    challenges: 2,
    experience: 12,
    image:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    level: 4,
    name: 'vinicius',
    totalExperience: 12312,
  },
];

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { users: [] } };
  }

  const users = (await prisma.user.findMany({
    orderBy: { experience: 'desc' },
  })) as User[];

  return {
    props: {
      users,
    },
  };
};
