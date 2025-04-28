import styles from './app.module.css';
import { Field, Info } from './components/main';
import PropTypes from 'prop-types';

export const AppLayout = ({ handleRestart }) => {
	return (
		<div className={styles.background}>
			<div className={styles.game}>
				<Info />
				<Field />
				<button className={styles.restartButton} onClick={handleRestart}>
					Начать заново
				</button>
			</div>
		</div>
	);
};

AppLayout.propTypes = {
	handleRestart: PropTypes.func.isRequired,
};
