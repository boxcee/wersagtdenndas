import { config } from 'dotenv';

config();

const HEADER_KEY = 'x-api-key';

export default handler => (req, res) => {
  if (req.method === 'POST' && req.headers[HEADER_KEY] !== process.env.API_KEY) {
    res.status(403).end();
  } else {
    handler(req, res);
  }
}
