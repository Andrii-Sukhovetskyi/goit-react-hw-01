import styles from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={clsx([styles.status], isOnline ? [styles.online] : [styles.offline])}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;