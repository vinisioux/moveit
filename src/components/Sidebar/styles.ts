import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  min-width: 112px;
  background: var(--primary);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 32px 32px;

  header {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;

    button {
      margin-top: 0.5rem;

      svg {
        color: var(--text);
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;

    button {
      padding: 3px 0;

      svg {
        color: var(--text);
      }
    }
  }
`;
