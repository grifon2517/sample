import styles from './app.module.css';
import { Field, Info } from './components/main';
import PropTypes from 'prop-types';



export const AppLayout = ({ status, currentPlayer, field, onCellClick, handleRestart, }) => {
	
  
	return (
		 
		<div className={styles.background}>
		<div className={styles.game}>
		  <Info status={status} currentPlayer={currentPlayer} />
		  <Field field={field} onCellClick={onCellClick} />
		  <button className={styles.restartButton} onClick={handleRestart}>
			Начать заново
		  </button>
		</div>
	  </div>
	  
	);
	
  };

AppLayout.propTypes = {
	status: PropTypes.number.isRequired,
	currentPlayer: PropTypes.number.isRequired,
	field: PropTypes.arrayOf(PropTypes.number).isRequired,
	onCellClick: PropTypes.func.isRequired,
	handleRestart: PropTypes.func.isRequired
};