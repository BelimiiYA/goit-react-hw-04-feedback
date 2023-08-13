import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 20px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 7px rgba(165, 99, 99, 0.3);

  &:hover,
  &:focus {
    color: #c1bcbc;
    background-color: #2b0505;
    cursor: pointer;
  }
`;
