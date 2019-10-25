import db from '../../../models/index';
import validate from "../../../utils/validate";

export default validate((req, res) => {
  const { quoteid } = req.query;
  if (req.method === 'DELETE') {
    db.Quote.delete()
  } else {
    db.Quote
      .findOne({ where: { id: quoteid } })
      .then(quote => res.send(quote))
      .catch(() => res.status(404).end());
  }
});
