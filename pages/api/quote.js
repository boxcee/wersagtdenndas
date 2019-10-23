import { Quote } from '../../lib/sequelize';

export default (req, res) => {
  if (req.method === 'POST') {
    Quote.create(req.body).then(quote => {
      res.send(quote);
    });
  } else {
    res.end(Quote.findAll());
  }
}