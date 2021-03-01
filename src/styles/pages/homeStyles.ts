import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: var(--blue01);

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const LeftSide = styled.div`
  background: url('/logobig.svg') no-repeat center;
  background-size: contain;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    margin-bottom: 5rem;
    margin-left: -5rem;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      margin-bottom: 2rem;
      color: var(--white);
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    img {
      margin-right: 1.5rem;
    }

    span {
      color: var(--white);
    }
  }
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    height: 100%;
    border-radius: 5px;
    border: 0;
    background: linear-gradient(90deg, #4953b8 0%, rgba(73, 83, 184, 0.2) 100%);
    padding: 1.2rem;
    color: var(--white);
    font-size: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 0.2s;

    main.informations {
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        margin-left: 1rem;
        text-align: left;
      }
    }

    svg {
      color: var(--white);
      height: 2.4rem;
      width: 2.4rem;
      margin-left: 1rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
