import styled from 'styled-components';

export const ContactListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 5px 60px;
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.18;
    letter-spacing: 0.03em;
    font-family: 'Montserrat', sans-serif;
    margin: auto 0;
  }
  span {
    margin-left: 10px;
  }
  button {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0px;
    margin: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
    padding: 5px 15px;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border: 1px solid rgba(25, 118, 210, 0.5);
    color: rgb(25, 118, 210);
    top: 10px;
  }
`;
