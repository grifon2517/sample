import { PLAYER_ACTION } from '../Constants/player-action';
import { PLAYER_NAME } from '../Constants/player-name';
import { STATUS } from '../Constants/status';
import { useSelector } from 'react-redux';
import { selectStatus, selectCurrentPlayer } from '../selectors';
import { InfoLayout } from './infoLayout';

export const Info = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const status = useSelector(selectStatus);

	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_NAME[currentPlayer];

	const information =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

	return <InfoLayout information={information} />;
};
