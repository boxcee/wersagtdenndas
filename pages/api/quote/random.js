import db from '../../../models/index';

export default (req, res) => {
  db.Quote
    .findOne({ order: db.sequelize.random() })
    .then(res.send)
    .catch(err => res.status(500).send(err));
};
