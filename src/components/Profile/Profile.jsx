import PropTypes from 'prop-types';
import defaultImage from '../Profile/default.jpg';
import styles from '../Profile/Profile.module.css';

const CardUser = ({ imgUrl = defaultImage, userName, tag, location, statsUser }) => {
       
        return <div className={styles.profile}>
            <div className={styles.description}>
            <img
                src={imgUrl}
                alt="Аватар пользователя"
                className="avatar"
            />
            <p className={styles.name}>{userName}</p>
            <p className="tag">@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles.social}>
            <span className="label">Followers</span>
            <span className={styles.quantity}>{statsUser.followers}</span>
            </li>
            <li className={styles.social}>
            <span className="label">Views</span>
            <span className={styles.quantity}>{statsUser.views}</span>
            </li>
            <li className={styles.social}>
            <span className="label">Likes</span>
            <span className={styles.quantity}>{statsUser.likes}</span>
            </li>
        </ul>
    </div >
};

CardUser.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    statsUser: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default CardUser;