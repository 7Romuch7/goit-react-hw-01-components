import PropTypes from 'prop-types';
import styles from '../FriendListItem/FriendListItem.module.css';
import defaultAvatar from '../FriendListItem/default.jpg';

const ListFriendsItem = ({ avatar, name, isOnline, id }) => {
    return <li key={id} className={styles.friendListItem}>
                <span className={isOnline ? styles.online : styles.offline}></span>
                <img className="avatarFriend" src={avatar ? avatar : defaultAvatar} alt="Аватар друга" width="48" />
                <p className={styles.nameFriend}>{name}</p>
            </li>
}

ListFriendsItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ),
}

export default ListFriendsItem;