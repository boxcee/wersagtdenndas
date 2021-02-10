const quotes = require('./zitate.json');

module.exports = function () {
  return {
    name: 'database',
    async loadContent() {
      return Math.floor(Math.random() * quotes.length);
    },
    async contentLoaded({content, actions}) {
      const {setGlobalData} = actions;
      await setGlobalData(quotes[content]);
    }
  };
};
