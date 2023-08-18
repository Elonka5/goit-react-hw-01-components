import PropTypes from 'prop-types';
import { StyledFriends } from '../FriendList/FriendStyle';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <StyledFriends className={isOnline ? 'item isOn' : 'item isOff'}>
      <span
        className={isOnline ? 'status isOnline' : 'status isOffline'}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </StyledFriends>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
