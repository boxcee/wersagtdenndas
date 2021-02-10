const quotes = require('./zitate.json');

module.exports = function () {
  return {
    name: 'database',
    async contentLoaded({content, actions}) {
      const {setGlobalData} = actions;
      await setGlobalData(quotes);
    }
  };
};
