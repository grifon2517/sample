import { STATUS, PLAYER } from "../Constants/main";
import { checkWin, checkEmptyCell } from '../utils/main';

export const onCellClick = ({status, field, currentPlayer, setField, setStatus, setCurrentPlayer}, index) => {
        if (status === STATUS.WIN || 
            status ===STATUS.DRAW || 
            field[index] !== PLAYER.NOBODY) {
            return;
        }

        const newField =  [...field];

        newField[index] = currentPlayer;

        setField(newField)
        

        if (checkWin(newField, currentPlayer)) {
            setStatus(STATUS.WIN)
        }	else if (checkEmptyCell(newField)){
                setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS)
        }	else {
                setStatus(STATUS.DRAW)
        }
    };