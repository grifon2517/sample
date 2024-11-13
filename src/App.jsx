// import { useState } from 'react';
import { User, Label } from './components';
import styles from './app.module.css';

const getUserFormServer = () => ({
	name: 'Гриха',
	age: 30,
	email: 'akjsfakj@gmail.com',
	phone: '+7 999 99 88',
});

export const App = () => {
	const user = getUserFormServer();
	return (
		<div className={styles.app}>
			<Label color={`red`}>Приложение</Label>
			<label className={styles.appLabel}>Приложение:</label>
			<div>Разная информация приложения</div>
			<User {...user}></User>
		</div>
	);
};
