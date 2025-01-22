import styles from './info.module.css';
import PropTypes from 'prop-types'

export const InfoLayout = ({ information }) => (
        <div className={styles.info}>
            {information}
        </div>);

InfoLayout.propTypes = {
    information: PropTypes.string.isRequired,
};