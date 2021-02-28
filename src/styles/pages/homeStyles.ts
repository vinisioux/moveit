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
  /* min-width: 20%; */

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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;

  input {
    height: 100%;
    border-radius: 5px 0 0 5px;
    border: 0;
    background: linear-gradient(90deg, #4953b8 0%, rgba(73, 83, 184, 0.2) 100%);
    padding-left: 1.2rem;
    color: var(--white);

    &::placeholder {
      color: var(--textBlue);
      font-size: 1.2rem;
    }
  }

  button {
    background: var(--blue02);
    height: 100%;
    width: 4.8rem;
    border-radius: 0 5px 5px 0;

    svg {
      color: var(--white);
      height: 2.4rem;
      width: 2.4rem;
    }
  }
`;
