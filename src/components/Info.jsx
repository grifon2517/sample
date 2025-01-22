
import { PLAYER_ACTION } from '../Constants/player-action';
import { PLAYER_NAME } from '../Constants/player-name';
import { STATUS } from '../Constants/status';


import { InfoLayout } from './infoLayout';
import PropTypes from 'prop-types';

export const Info = ({status, currentPlayer}) => {
    const playerAction = PLAYER_ACTION[status]
    const playerName = PLAYER_NAME[currentPlayer]
	
	const information = status === STATUS.DRAW ?'Ничья' : `${playerAction}: ${playerName}`

	return <InfoLayout information={information}/>;
};

Info.propTypes = {
    status: PropTypes.number.isRequired,
    currentPlayer: PropTypes.number.isRequired,
};
