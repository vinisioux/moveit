import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

import prisma from '../lib/prisma';

import { Sidebar } from '../components/Sidebar';

import {
  Container,
  Content,
  TableContainer,
} from '../styles/pages/leaderboardStyles';
import { useState } from 'react';

interface User {
  id: number;
  name: string;
  image: string;
  challenges: number;
  level: number;
  experience: number;
  totalExperience: number;
  createdAt: Date;
  updatedAt: Date;
}

interface LeaderboardProps {
  users: User[];
}

export default function Leaderboard(props: LeaderboardProps) {
  const [users] = useState<User[]>(() => {
    return JSON.parse(String(props.users));
  });

  return (
    <Container>
      <Sidebar />
      <Content>
        <header>
          <h1>Leaderboard</h1>
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
              {users.map((user: User, position) => (
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
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { users: [] } };
  }

  const users = await prisma.user.findMany({
    orderBy: { experience: 'desc' },
  });

  return {
    props: {
      users: JSON.stringify(users),
    },
  };
};
