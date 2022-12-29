import type { NextApiHandler } from 'next';
import prisma from '../../../../libs/prisma';

// GET BY ID
const handlerGetById: NextApiHandler = async (req, res) => {
	const { userId } = req.query;

	try {
		const user = await prisma.user.findUnique({
			where: { id: +(userId as string) },
		});
		user && res.status(200).json({ user });
	} catch (error) {
		res.status(400).json({ message: 'Bad Request', error });
	}
};

// PUT
const handlerPut: NextApiHandler = async (req, res) => {
	const { userId } = req.query;

	try {
		await prisma.user.update({
			where: { id: +(userId as string) },
			data: req.body,
		});
		res.status(200).json({ message: 'Updated' });
	} catch (error) {
		res.status(400).json({ message: 'Bad Request', error });
	}
};

// DELETE
const handlerDelete: NextApiHandler = async (req, res) => {
	const { userId } = req.query;

	try {
		await prisma.user.delete({
			where: { id: +(userId as string) },
		});
		res.status(200).json({ message: 'Deleted' });
	} catch (error) {
		res.status(400).json({ message: 'Bad Request', error });
	}
};

const handler: NextApiHandler = async (req, res) => {
	switch (req.method) {
		case 'GET':
			handlerGetById(req, res);
			break;
		case 'PUT':
			handlerPut(req, res);
			break;
		case 'DELETE':
			handlerDelete(req, res);
			break;
	}
};

export default handler;
