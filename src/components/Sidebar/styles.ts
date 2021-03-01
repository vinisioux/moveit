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

    .toggle-theme-button {
      margin-top: 1.5rem;
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

  button {
    svg {
      color: var(--text);
    }
  }
`;
