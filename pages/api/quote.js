import db from '../../models/index';

export default (req, res) => {
  if (req.method === 'POST') {
    db.Quote.create(req.body).then(quote => {
      res.send(quote);
    });
  } else {
    db.Quote.findAll().then(quotes => {
      res.send(quotes);
    });
  }
};
