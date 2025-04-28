// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { ReduxRenderer } from './redux-manger.js';
import { store } from './store.js';

createRoot(document.getElementById('root')).render(
	<ReduxRenderer store={store}>
		<App />
	</ReduxRenderer>,
);
