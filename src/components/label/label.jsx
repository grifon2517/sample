import PropTypes from 'prop-types';
import styles from './label.module.css';

export const Label = ({ color, children }) => {
	return <label className={`${styles.label} ${styles[color]}`}>{children}:</label>;
};

Label.propTypes = {
	children: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};
