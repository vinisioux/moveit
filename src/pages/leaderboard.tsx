import { useEffect, useState } from 'react';
import { Sidebar } from '../components/Sidebar';

import {
  Container,
  Content,
  TableContainer,
} from '../styles/pages/leaderboardStyles';

interface User {
  position?: number;
  name: string;
  avatar: string;
  challenges: number;
  level: number;
  experience: number;
}

export default function Leaderboard() {
  const [users, setUsers] = useState<User[]>([] as User[]);

  useEffect(() => {
    function loadUsers() {
      setUsers(usersData);
    }
    loadUsers();
  }, [users]);

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
              {users.map((user, position) => (
                <tr key={String(position + 1)}>
                  <td>{position + 1}</td>
                  <td className="user">
                    <img src={user.avatar} alt={user.name} />
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

const usersData: User[] = [
  {
    name: 'Vinicius Henrique',
    avatar:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    level: 53,
    challenges: 123,
    experience: 898,
  },
  {
    name: 'Vinicius',
    avatar:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    level: 53,
    challenges: 43,
    experience: 54,
  },
  {
    name: 'Henrique',
    challenges: 23,
    avatar:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    level: 53,
    experience: 23,
  },
  {
    name: 'Vinicius Leonardo',
    challenges: 45,
    avatar:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    experience: 43,
    level: 1,
  },
  {
    name: 'Leonardo Henrique',
    challenges: 13,
    avatar:
      'https://avatars.githubusercontent.com/u/36283335?s=460&u=5cb01d7f72a210ab2f0a6fe4f5afc746af1a4d36&v=4',
    level: 53,
    experience: 12,
  },
];
