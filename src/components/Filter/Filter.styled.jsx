import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  row-gap: 10px;
  label {
    display: block;
    text-align: center;
    font-size: 16px;
    line-height: 1.67;
    letter-spacing: 0.01em;
    font-family: 'Montserrat', sans-serif;
    color: #757575;
    display: block;
  }
  input,
  textarea {
    outline: none;
    border: none;
    border: solid 1px #f2f2f2;
    width: 100%;
    max-width: 350px;
    height: 10px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    padding: 12px 12px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus {
      border-color: #2196f3;
    }
  }
`;
