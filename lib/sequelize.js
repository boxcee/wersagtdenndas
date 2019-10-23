import Sequelize, { Model } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL);

class Quote extends Model {
}

Quote.init({
  content: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  source: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'quote'
});

sequelize.sync().then(() => {
  console.log('Database has been successfully synced.');
});

export { Quote };
