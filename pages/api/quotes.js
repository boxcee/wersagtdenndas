import db from '../../models/index';
import validate from "../../utils/validate";

export default validate((req, res) => {
  if (req.method === 'POST') {
    db.Quote
      .create(req.body)
      .then(quote => {
        res.status(201).send(quote);
      })
      .catch(err => res.status(500).send(err));
  } else {
    db.Quote
      .findAll()
      .then(res.send)
      .catch(err => res.status(500).send(err));
  }
});
