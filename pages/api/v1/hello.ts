import type { NextApiHandler } from 'next';

interface Data {
	name: string;
}
const helloHandler: NextApiHandler<Data> = (req, res) => {
	res.status(200).json({ name: 'John Doe' });
};

export default helloHandler;
