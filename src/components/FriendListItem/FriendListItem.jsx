import { FriendList } from '../FriendList/FriendList';
import styles from './FriendListItem.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendList className={styles.frienditem}>
      <avatar src={avatar} alt={name} />
      <name>{name}</name>
      {/* <isOnline>{isOnline ? <FcBullish /> : <FcBearish />}</isOnline> */}
    </FriendList>
  );
};
