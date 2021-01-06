import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.css';
import FriendsListItem from '../FriendListItem/FriendListItem';

export default function ListFriends({friends}) {
    return <ul className={styles.friendList}>{friends.map(FriendsListItem)}</ul>
}

ListFriends.propTypes = {
    friends: PropTypes.array.isRequired,
}