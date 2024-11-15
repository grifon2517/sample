import { useState } from 'react';
import styles from './app.module.css';
import PropTypes from 'prop-types';

const AppLayout = ({ a, b, sum, setA, setB }) => (
	<div className={styles.App}>
		<div> A: {a}</div>
		<button onClick={() => setA(a + 1)}>прибавить 1</button>
		<div> B: {b}</div>
		<button onClick={() => setB(b + 1)}>прибавить 1</button>
		<div>Сумма A+B: {sum}</div>
	</div>
);

export const App = () => {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);

	const sum = a + b;
	console.log(sum);
	return <AppLayout a={a} b={b} sum={sum} setA={setA} setB={setB} />;
};

AppLayout.propTypes = {
	a: PropTypes.number.isRequired,
	b: PropTypes.number.isRequired,
	sum: PropTypes.number.isRequired,
	setA: PropTypes.func.isRequired,
	setB: PropTypes.func.isRequired,
};
