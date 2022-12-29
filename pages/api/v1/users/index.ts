import type { NextApiHandler } from 'next';
import prisma from '../../../../libs/prisma';

// GET ALL
const handlerGetAll: NextApiHandler = async (req, res) => {
	const { page } = req.query;
	const itemsPerPage = 10;
	const offset = page ? (+(page as string) - 1) * itemsPerPage : undefined;
	const totalItems = await prisma.user.count();
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	try {
		const users = await prisma.user.findMany({
			orderBy: {
				id: 'desc',
			},
			skip: offset,
			take: itemsPerPage,
		});

		res.status(200).json({
			users,
			pagination: {
				total: totalPages,
				current: +(page as string),
			},
		});
	} catch (error) {
		res.status(400).json({ message: 'Bad Request', error });
	}
};

// POST
const handlerPost: NextApiHandler = async (req, res) => {
	const { name, age, birthday, gender, address } = req.body;

	try {
		await prisma.user.create({ data: { name, age, birthday, gender, address } });
		res.status(201).json({ message: 'Created' });
	} catch (error) {
		res.status(400).json({ message: 'Bad Request', error });
	}
};

const handler: NextApiHandler = async (req, res) => {
	switch (req.method) {
		case 'GET':
			handlerGetAll(req, res);
			break;
		case 'POST':
			handlerPost(req, res);
			break;
	}
};

export default handler;
