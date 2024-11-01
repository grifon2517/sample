// import { useState } from 'react';

import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState();
	const total = operand1 + operator + opernad2;
	const NUMS = [`1`, '2', '3', '4', '5', '6', '7', '8', '9', '0'];

	return (
		<div className={styles.app}>
			<div className={styles.screen}>{total}</div>
			<div className={styles.buttons}>
				<div className={styles.left}>
					{NUMS.map((num) => (
						<button key={num} className={styles.button} onClick={() => {}}>
							{num}{' '}
						</button>
					))}
				</div>
				<div className={styles.right}>
					<button>{'+'}</button>
					<button>{'-'}</button>
					<button>{'='}</button>
					<button>{'C'}</button>
				</div>
			</div>
		</div>
	);
};
