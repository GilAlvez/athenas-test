interface Users {
	id: number;
	name: string;
	age: number;
	gender: 'male' | 'female';
	address: {
		street: string;
		number: number | 'S/N';
		city: string;
		country: string;
	};
	birthday: Date;
}

export const listAllUsers: Users[] = [
	{
		id: 1,
		name: 'Example 1',
		age: 20,
		gender: 'male',
		address: { street: 'Anywhere Street', number: 2, city: 'João Pessoa', country: 'Brazil' },
		birthday: new Date(),
	},
	{
		id: 2,
		name: 'Example 2',
		age: 20,
		gender: 'male',
		address: { street: 'Anywhere Street', number: 2, city: 'João Pessoa', country: 'Brazil' },
		birthday: new Date(),
	},
	{
		id: 3,
		name: 'Example 3',
		age: 20,
		gender: 'male',
		address: { street: 'Anywhere Street', number: 2, city: 'João Pessoa', country: 'Brazil' },
		birthday: new Date(),
	},
	{
		id: 4,
		name: 'Example 4',
		age: 20,
		gender: 'male',
		address: { street: 'Anywhere Street', number: 2, city: 'João Pessoa', country: 'Brazil' },
		birthday: new Date(),
	},
	{
		id: 5,
		name: 'Example 5',
		age: 20,
		gender: 'male',
		address: { street: 'Anywhere Street', number: 2, city: 'João Pessoa', country: 'Brazil' },
		birthday: new Date(),
	},
	{
		id: 6,
		name: 'Example 6',
		age: 20,
		gender: 'female',
		address: { street: 'Anywhere Street', number: 2, city: 'João Pessoa', country: 'Brazil' },
		birthday: new Date(),
	},
	{
		id: 7,
		name: 'Example 7',
		age: 20,
		gender: 'female',
		address: { street: 'Anywhere Street', number: 2, city: 'João Pessoa', country: 'Brazil' },
		birthday: new Date(),
	},
	{
		id: 8,
		name: 'Example 8',
		age: 20,
		gender: 'female',
		address: { street: 'Anywhere Street', number: 2, city: 'João Pessoa', country: 'Brazil' },
		birthday: new Date(),
	},
	{
		id: 9,
		name: 'Example 9',
		age: 20,
		gender: 'female',
		address: { street: 'Anywhere Street', number: 2, city: 'João Pessoa', country: 'Brazil' },
		birthday: new Date(),
	},
	{
		id: 10,
		name: 'Example 10',
		age: 20,
		gender: 'female',
		address: { street: 'Anywhere Street', number: 2, city: 'João Pessoa', country: 'Brazil' },
		birthday: new Date(),
	},
];
