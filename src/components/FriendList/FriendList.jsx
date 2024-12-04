import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends = [] }) {
  return (
    <ul className={css.friends}>
      {friends.map(item => {
        return (
          <li key={item.id}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
