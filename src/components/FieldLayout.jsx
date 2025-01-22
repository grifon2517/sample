import styles from './field.module.css';
import PropTypes from 'prop-types'
import { PLAYER_ICON } from '../Constants/player-icon';

export const FieldLayout = ({field, onCellClick}) => {
    
    if (!Array.isArray(field)) {
        
        return <div>Error: Invalid field data</div>;
      }
    return(
    <div className={styles.field}>
        {field.map((cellPlayer, index) => (
        <button key={index} 
        className={styles.cell} 
        onClick={() => onCellClick(index)}
        
        >
            {PLAYER_ICON[cellPlayer]}
            </button>))}
            </div>
        
    )
};




FieldLayout.propTypes = {
    field: PropTypes.arrayOf(PropTypes.number).isRequired,
    onCellClick: PropTypes.func.isRequired,
};