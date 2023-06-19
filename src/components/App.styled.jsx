import styled from 'styled-components';

export const Container = styled.div`
  /* width: 280px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px; */
  display: flex;
  flex-direction: column;
  max-width: 500px;
  border: 1px solid #eee;
  margin: 0 auto;
  margin-bottom: 20px;
  transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const Title = styled.h1`
  /* margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 30px; */
  display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
`;

export const SubTitle = styled.h2`
  /* margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 30px; */
  display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
`;

export const Message = styled.p`
  margin-left: 20px;
  font-size: 16px;
  font-weight: 400;
`;
