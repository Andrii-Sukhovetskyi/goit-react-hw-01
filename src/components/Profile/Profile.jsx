import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileInfo}>
        <img
          className={styles.profileImage}
          src={image}
          alt="User avatar"
          width={120}
        />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileTag}>@{tag}</p>
        <p className={styles.profileLocation}>{location}</p>
      </div>

      <ul className={styles.statsList}>
        <li className={styles.statItem}>
          <span className={styles.statLabel}>Followers</span>
          <span className={styles.statValue}>{stats.followers}</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.statLabel}>Views</span>
          <span className={styles.statValue}>{stats.views}</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.statLabel}>Likes</span>
          <span className={styles.statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;