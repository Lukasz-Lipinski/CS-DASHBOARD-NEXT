import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

export default function Auth(
  res: NextApiResponse,
  req: NextApiRequest
) {
  const { body } = req;

  console.log(JSON.parse(body), 'backend');
}
