import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { StyledFriendList } from '../FriendList/FriendListStyled';

export const FriendList = ({ friends }) => {
  return (
    <>
      <StyledFriendList className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </StyledFriendList>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ),
};
