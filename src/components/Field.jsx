import { FieldLayout } from './FieldLayout';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS, PLAYER } from '../Constants';
import { checkEmptyCell, checkWin } from '../utils';
import { setCurrentPlayer, setField, setStatus } from '../actions';
import { selectField, selectStatus, selectCurrentPlayer } from '../selectors';

import PropTypes from 'prop-types';

export const Field = () => {
	const status = useSelector(selectStatus);
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const dispatch = useDispatch();

	const onCellClick = (index) => {
		if (
			status === STATUS.WIN ||
			status === STATUS.DRAW ||
			field[index] !== PLAYER.NOBODY
		) {
			return;
		}

		const newField = [...field];

		newField[index] = currentPlayer;

		dispatch(setField(newField));

		if (checkWin(newField, currentPlayer)) {
			dispatch(setStatus(STATUS.WIN));
		} else if (checkEmptyCell(newField)) {
			const newCurrentPlayer =
				currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS;
			dispatch(setCurrentPlayer(newCurrentPlayer));
		} else {
			dispatch(setStatus(STATUS.DRAW));
		}
	};

	return <FieldLayout field={field} onCellClick={onCellClick} />;
};

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.number).isRequired,
	onCellClick: PropTypes.func.isRequired,
};
