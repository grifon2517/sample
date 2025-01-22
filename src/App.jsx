
import { useState } from 'react';
import { AppLayout } from './appLayout';
import {STATUS, PLAYER, } from './Constants/main'

import {onCellClick, handleRestart} from './handlers/main'
import {createEmptyField} from './utils/main'


export const App = () => {
	const [status, setStatus] = useState(STATUS.TURN);
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	
	const [field, setField] = useState (createEmptyField());

	const state = {status, setStatus, currentPlayer, setCurrentPlayer, field, setField};

	
	return  <AppLayout status={status} currentPlayer={currentPlayer} field={field} onCellClick={(index) => onCellClick(state, index)}  handleRestart={() => handleRestart(state)}/>;
	
};

