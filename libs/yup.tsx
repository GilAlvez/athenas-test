import * as yup from 'yup';

yup.setLocale({
	mixed: {
		default: 'Invalid input',
		required: 'Required',
	},
	date: {
		min: 'Minimum date is ${min}',
		max: 'Maximum  date is  ${max}',
	},
});

export default yup;
