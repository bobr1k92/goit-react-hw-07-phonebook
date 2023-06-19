import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 30px;
  label {
    font-size: 16px;
    line-height: 1.67;
    letter-spacing: 0.01em;
    font-family: 'Montserrat', sans-serif;
    color: #757575;
    display: block;
  }
  input {
    margin-top: 10px;
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
  button {
    font-size: 16px;
    font-weight: 600px;
    font-family: 'Montserrat', sans-serif;
    height: 40px;
    max-width: 150px;
    padding: 0 20px;
    color: white;
    background-color: #2196f3;
    border-color: transparent;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      background-color: #0b5089;
    }
  }
`;
