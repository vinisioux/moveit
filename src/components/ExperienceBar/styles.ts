import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export const ProgressBarContainer = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;
`;

export const ProgressCount = styled.span``;

export const ProgressBar = styled.div`
  height: 4px;
  border-radius: 4px;
  background: var(--green);
`;

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;
