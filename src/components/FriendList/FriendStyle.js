import styled from 'styled-components';

export const StyledFriends = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: inset 7px 7px 11px 0px rgba(0, 0, 0, 0.75);

  & .status {
    display: flex;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  & .status.isOnline {
    background-color: green;
  }

  & .status.isOffline {
    background-color: red;
  }
  & .name {
    font-size: 20px;
    text-align: center;
  }
  &.isOn {
    box-shadow: 7px 7px 11px 0px rgba(0, 0, 0, 0.75);
  }
`;
