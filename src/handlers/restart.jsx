import { STATUS, PLAYER } from '../Constants/main';
import {createEmptyField} from '../utils/main'


export  const handleRestart = ({setStatus, setCurrentPlayer, setField}) => {
        setStatus(STATUS.TURN);
        setCurrentPlayer(PLAYER.CROSS);
        setField(createEmptyField)

    }