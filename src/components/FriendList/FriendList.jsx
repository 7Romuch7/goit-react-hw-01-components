import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.css';
import defaultAvatar from '../FriendList/default.jpg';

const ListFriends = ({ friends }) => {
    return <ul className={styles.friendList}>
        {friends.map(friend => (
            <li key={friend.id} className={styles.friendListItem}>
                <span className={friend.isOnline ? styles.online : styles.offline}></span>
                <img className="avatarFriend" src={friend.avatar ? friend.avatar : defaultAvatar} alt="Аватар друга" width="48" />
                <p className={styles.nameFriend}>{friend.name}</p>
            </li>)
        )}
    </ul>
}

ListFriends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ),
}

export default ListFriends;