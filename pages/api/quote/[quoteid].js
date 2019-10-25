import db from '../../../models/index';

export default (req, res) => {
  const { quoteid } = req.query;
  db.Quote
    .findOne({ where: { id: quoteid } })
    .then(quote => res.send(quote))
    .catch(() => res.status(404).end());
};
