import { PLAYER_ACTION } from '../Constants/player-action';
import { PLAYER_NAME } from '../Constants/player-name';
import { STATUS } from '../Constants/status';
import { useReduxState } from '../redux-manger';

import { InfoLayout } from './infoLayout';

export const Info = () => {
	const { status, currentPlayer } = useReduxState();

	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_NAME[currentPlayer];

	const information =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

	return <InfoLayout information={information} />;
};
