import PropTypes from 'prop-types';
import { Label } from '../label/label';
export const Contacts = ({ email, phone }) => {
	return (
		<div>
			<Label color={`green`}>Контакты</Label>
			<div>Почта: {email}</div>
			<div>Телефон: {phone}</div>
		</div>
	);
};

Contacts.propTypes = {
	email: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
};
