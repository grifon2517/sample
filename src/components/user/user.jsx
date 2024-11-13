import PropTypes from 'prop-types';
import styles from './user.module.css';
import { Contacts } from '../contacts/contacts';
import { Label } from '../label/label';

export const User = ({ name, age, ...contacts }) => {
	return (
		<div className={styles.user}>
			<Label color={`blue`}>Пользователь</Label>
			<div>Имя: {name}</div>
			<div>Возраст:{age}</div>
			<Contacts {...contacts} />
		</div>
	);
};

User.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
};
