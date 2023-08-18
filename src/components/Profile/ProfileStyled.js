import styled from 'styled-components';

export const StyledProfile = styled.div`
  max-width: 300px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto 20px;
  padding: 20px;
  background-color: #f0f0f0;
  box-shadow: 7px 7px 11px 0px rgba(0, 0, 0, 0.75);
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  width: 100%;
  margin: 20px auto 0;
  padding: 20px;
  background-color: white;
  margin-bottom: 16px;
  border-radius: 10px;
  & .name {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    color: black;
  }
  & .tag,
  & .location {
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const CardPoster = styled.img`
  object-fit: cover;
  width: 170px;
  border-radius: 100%;
  margin-bottom: 16px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 240px;
  border-radius: 10px;

  & li {
    background-color: #0163a0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    font-size: 16px;
    text-align: center;
  }
`;
