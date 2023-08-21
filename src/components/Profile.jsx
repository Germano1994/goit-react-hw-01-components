import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt={`${username}'s avatar`} className={styles.avatar} />
          <p className={styles.name}>{username}</p>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
        <ul className={styles.statsList}>
          <li className={styles.statsItem}>
            <span className={styles.labelFollowers}>Followers</span>
            <span className={styles.quantity}>{followers}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.labelViews}>Views</span>
            <span className={styles.quantity}>{views}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.labelLikes}>Likes</span>
            <span className={styles.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
