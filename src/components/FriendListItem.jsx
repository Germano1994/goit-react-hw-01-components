import React from 'react';
import PropTypes from 'prop-types';

function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;

  return (
    <li className="item">
      <span className={isOnline ? 'status online' : 'status offline'}></span>
      <img className="avatar" src={avatar} alt={`${name}'s avatar`} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
