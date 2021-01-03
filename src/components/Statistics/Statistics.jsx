import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

const SectionStatic = ({ title, stats }) => {
    return <section className={styles.statistics}>
        <div>{title && <h2 className={styles.title}>{title}</h2>}</div>
        
        <div className={styles.containerStat}>
            {stats.map(stat => (
            <ul key={stat.id} className={styles.statList} >
                <li className={styles.item}>
                    <span className="label">{stat.label}</span>
                    <span className="percentage">{stat.percentage}%</span>
                </li>
            </ul>
        ))}
        </div>
    </section>
}

SectionStatic.propTypes = {
        title: PropTypes.string,
        stats: PropTypes.arrayOf(
        PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        }),
    ),
}

export default SectionStatic;
