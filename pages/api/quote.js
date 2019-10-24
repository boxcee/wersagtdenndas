import db from '../../models/index';
import auth from '../../lib/auth';

export default auth((req, res, auth) => {
  console.log(auth);
  if (req.method === 'POST') {
    db.Quote.create(req.body).then(quote => {
      res.send(quote);
    });
  } else {
    db.Quote.findAll().then(quotes => {
      res.send(quotes);
    });
  }
});
