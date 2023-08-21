import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;

  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.statusOnline : styles.statusOffline}></span>
      <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} width="48" />
      <p className={styles.name}>{name}</p>
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
