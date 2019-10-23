import { sequelize } from '../../lib/sequelize';

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default (req, res) => {
  res.send('hello eran');
}
