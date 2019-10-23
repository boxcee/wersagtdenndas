import { Quote } from '../../lib/sequelize';

export default (req, res) => {
  Quote.create({ content: 'hello eran', author: 'msc', source: 'hearsay' }).then(quote => {
    res.send(quote);
  });
}
