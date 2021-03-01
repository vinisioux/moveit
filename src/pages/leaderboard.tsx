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
                    <span>{user.experience}</span>
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

// const usersData: User[] = [
//   {
//     name: 'Vinicius Henrique',
//     image:
//       'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
//     level: 53,
//     challenges: 123,
//     experience: 898,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     id: 1,
//   },
//   {
//     name: 'Vinicius',
//     image:
//       'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
//     level: 53,
//     challenges: 43,
//     experience: 54,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     id: 2,
//   },
//   {
//     name: 'Henrique',
//     challenges: 23,
//     image:
//       'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
//     level: 53,
//     experience: 23,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     id: 3,
//   },
//   {
//     name: 'Vinicius Leonardo',
//     challenges: 45,
//     image:
//       'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
//     experience: 43,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     id: 4,
//     level: 1,
//   },
//   {
//     name: 'Leonardo Henrique',
//     challenges: 13,
//     image:
//       'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
//     level: 53,
//     experience: 12,
//     createdAt: new Date(),
//     updatedAt: new Date(),
//     id: 5,
//   },
// ];

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
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
