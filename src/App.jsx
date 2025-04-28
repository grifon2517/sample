import { AppLayout } from './appLayout';
import { RESTART_GAME } from './actions';
import { useDispatch } from './redux-manger';

export const App = () => {
	const dispatch = useDispatch();
	const handleRestart = () => {
		dispatch(RESTART_GAME);
	};

	return <AppLayout handleRestart={handleRestart} />;
};
